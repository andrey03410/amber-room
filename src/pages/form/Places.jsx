import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";

const Places = () => {
    const [places, setPlaces] = useState([])

    const [name, setName] = useState("test name")
    const [description, setDescription] = useState("test desc")
    const [searchPlaceName, setSearchPlaceName] = useState("")

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getPlaces")
            .then(res => res.json())
            .then((result) => {
                setPlaces(result.places)
            })
    }, [])




    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({name, description})
        }
        fetch("http://127.0.0.1:5000/addPlace", request)
            .then(response => {
            if (response.status === 200) {
                    toast.success("Место успешно добавлено")
                } else {
                    toast.error("Ошибка добавления места")
                }
            })
    }
    return (

        <div className={"forms_wrapper"}>
            <form className="form_wrapper" onSubmit={submit}>
                <span className={"title_form"}>Добавить место</span>
                <div>
                    <p className={"title_field"}>* Название</p>
                    <input className="form_input" onChange={(event) => {setName(event.target.value)}}/>
                </div>
                <div>
                    <p className={"title_field"}>Описание</p>
                    <textarea className="textarea_form" onChange={(event) => {setDescription(event.target.value)}}/>
                </div>
                <button className={"submit_button"}>Отправить</button>
            </form>
            <div className="form_wrapper">
            <span className={"title_form"}>Найти место</span>
                        <div>
                            <p className={"title_field"}>* Название места</p>
                                <input className="form_input" onChange={(event) => {
                                    setSearchPlaceName(event.target.value)
                                }}/>
                        </div>
                <p className={"title_field"}>Результаты поиска</p>
                <div className="scroll-table">
                    <table>
                        <thead>
                            <tr>
                                <th>id места</th>
                                <th>Название</th>
                                <th>Описание</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {places.map(item => {
                                if (item.name.toLowerCase().includes(searchPlaceName.toLowerCase())) {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
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

export default Places;