import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";

const Versions = () => {
    const [versions, setVersion] = useState([])
    const [placeList, setPlaceList] = useState([])
    const [selectLoading, setSelectLoading] = useState(true)


    const [id_places, setIdPlaces] = useState("1")
    const [description, setDescription] = useState("test desc")
    const [searchPlaceName, setSearchPlaceName] = useState("")

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getVersions")
            .then(res => res.json())
            .then((result) => {
                setVersion(result.versions)
            })
    }, [])


    useEffect(() => {
        fetch("http://127.0.0.1:5000/getPlaces")
            .then(res => res.json())
            .then((result) => {
                let array = []
                result.places.map((item) => {
                    array.push({value: item.id, label: item.name})
                })
                setPlaceList(array)
                setSelectLoading(false)
            })
    }, [])


    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({id_places, description})
        }
        fetch("http://127.0.0.1:5000/addVersion", request)
            .then(response => {
                if (response.status === 200) {
                    toast.success("Версия успешно добавлена")
                } else {
                    toast.error("Ошибка добавления версии")
                }
            })
    }


    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper" onSubmit={submit}>
                <span className={"title_form"}>Добавить версию</span>
                <div>
                    <p className={"title_field"}>* Место</p>

                    <Select options={placeList} isLoading={selectLoading} placeholder={"Выберите место"}
                            onChange={(newValue) => {
                                setIdPlaces(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>Описание</p>
                    <textarea className="textarea_form" onChange={(event) => {
                        setDescription(event.target.value)
                    }}/>
                </div>
                <button className={"submit_button"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                <span className={"title_form"}>Найти версию</span>
                <div>
                    <p className={"title_field"}>* Место</p>

                    <Select options={placeList} isLoading={selectLoading} placeholder={"Выберите место"}
                            onChange={(newValue) => {
                                setSearchPlaceName(newValue.value)
                            }}/>
                </div>
                <p className={"title_field"}>Результаты поиска</p>
                <div className="scroll-table">
                    <table>
                        <thead>
                        <tr>
                            <th>id версии</th>
                            <th>id места</th>
                            <th>Описание</th>
                        </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>

                            {versions.map(item => {
                                if (item.id_places === searchPlaceName) {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            {placeList.map(plc => {
                                                if (plc.value === item.id_places) {
                                                    return (
                                                        <td>{plc.label}</td>

                                                    )
                                                }
                                            })}

                                            <td>{item.description}</td>
                                        </tr>
                                    )
                                }
                            })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Versions;