import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";

const Researches = () => {
    const [research, setResearch] = useState([])

    const [orgList, setOrgList] = useState(["КГАЭ", " Московский Исторический Музей", "Музей искусства"])
    const [typeResList, setTypeResList] = useState(["Раскопки", "Бурение", "Осмотр"])
    const [idSearchAttList, setIdSearchAttList] = useState(["1. Королевский замок 1949-1956", "2. Королевский замок 1964-1969", "3. Королевский замок 1970-1972"])

    const [id_organization, setIdOrganization] = useState("test name")
    const [id_search_attempts, setIdSearchAtt] = useState("test name")
    const [description, setDescription] = useState("test desc")
    const [id_type_research, setIdTypeResearch] = useState("test desc")
    const [local_place, setLocalPlace] = useState("test desc")
    const [technique, setTechnique] = useState("test desc")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/6f9278ec-35f5-4e5c-938e-81830b57de35")
            .then(res => res.json())
            .then((result) => {
                setResearch(result.research)
            })
    }, [])

    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({id_organization, id_search_attempts, description, id_type_research, local_place, technique})
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
                <span className={"title_form"}>Добавить исследование</span>
                <div>
                    <p className={"title_field"}>Организация</p>
                    <select name="select" size="3" multiple className="select_form"
                    onChange={(event) => {setIdOrganization(event.target.value)}}>
                        {orgList.map((item, index) => (
                            <option value={index + 1}>{item}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p className={"title_field"}>* Попытка поиска</p>
                    <select name="select" size="3" multiple className="select_form"
                    onChange={(event) => {setIdSearchAtt(event.target.value)}}>
                        {idSearchAttList.map((item, index) => (
                            <option value={index + 1}>{item}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p className={"title_field"}>Описание </p>
                    <textarea className="textarea_form" onChange={(event) => {setDescription(event.target.value)}}/>
                </div>
                <div>
                    <p className={"title_field"}>* Тип исследования</p>
                    <select name="select" size="3" multiple className="select_form"
                    onChange={(event) => {setIdTypeResearch(event.target.value)}}>
                        {typeResList.map((item, index) => (
                            <option value={index + 1}>{item}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p className={"title_field"}>Локальное место </p>
                    <textarea className="textarea_form" onChange={(event) => {setLocalPlace(event.target.value)}}/>
                </div>
                <div>
                    <p className={"title_field"}>Техника</p>
                    <textarea className="textarea_form" onChange={(event) => {setTechnique(event.target.value)}}/>
                </div>


                <button className={"submit_button"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                <span className={"title_form"}>Найти исследование</span>
                                <div>
                                    <p className={"title_field"}>* Тип исследования</p>
                                    <input className="form_input"/>
                                </div>
                <p className={"title_field"}>Результаты поиска</p>
                <div className="scroll-table">
                    <table>
                        <thead>
                            <tr>
                                <th>id исследования</th>
                                <th>id организации</th>
                                <th>id попытки поиска</th>
                                <th>Описание</th>
                                <th>Тип исследования</th>
                                <th>Локальное место</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {research.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_organization}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.description}</td>
                                    <td>{item.id_type_research}</td>
                                    <td>{item.local_place}</td>
                                </tr>
                            ))}
                            {research.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_organization}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.description}</td>
                                    <td>{item.id_type_research}</td>
                                    <td>{item.local_place}</td>
                                </tr>
                            ))}
                            {research.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_organization}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.description}</td>
                                    <td>{item.id_type_research}</td>
                                    <td>{item.local_place}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Researches;