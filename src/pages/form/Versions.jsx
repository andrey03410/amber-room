import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";

const Versions = () => {
    const [versions, setVersion] = useState([])
    const [placeList, setPlaceList] = useState(["Королевский замок", "Штайндамм", "Амаллиенау", "Косма"])

    const [id_places, setIdPlaces] = useState("1")
    const [description, setDescription] = useState("test desc")
    const [searchPlaceName, setSearchPlaceName] = useState("")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/45bf1284-e257-4de8-91b9-ed0e1caa8cb3")
            .then(res => res.json())
            .then((result) => {
                setVersion(result.versions)
            })
    }, [])

    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({id_places, description})
        }
        fetch("test.com", request)
            .then(response => {
            if (response.status === 200) {
                    toast.success("Перcона успешно добавлена")
                } else {
                    toast.error("Ошибка добавления персоны")
                }
            })
    }


    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper" onSubmit={submit}>
                <span className={"title_form"}>Добавить версию</span>
                <div>
                    <p className={"title_field"}>* Место</p>
                    <select name="select" size="3" multiple className="select_form"
                    onChange={(event) => {setIdPlaces(event.target.value)}}>
                        {placeList.map((item, index) => (
                            <option value={index + 1}>{item}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p className={"title_field"}>Описание</p>
                    <textarea className="textarea_form" onChange={(event) => {setDescription(event.target.value)}}/>
                </div>
                <button className={"submit_button"}>Отправить</button>
            </form>
            <div className="form_wrapper">
            <span className={"title_form"}>Найти версию</span>
                                <div>
                                    <p className={"title_field"}>* Место</p>
                                <input className="form_input" onChange={(event) => {
                                    setSearchPlaceName(event.target.value)
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
                            {versions.map(item => (
                                <tr>
                                        <td>{item.id}</td>
                                        <td>{item.id_places}</td>
                                        <td>{item.description}</td>
                                </tr>
                            ))}

                            {versions.map(item => {
                                if (item.id_places.toLowerCase().includes(searchPlaceName.toLowerCase())) {
                                    return (
                                        <tr>
                                        <td>{item.id}</td>
                                        <td>{item.id_places}</td>
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