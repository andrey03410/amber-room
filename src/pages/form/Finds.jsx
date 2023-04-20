import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";

const Finds = (props) => {
    const [searchAttemptSelect, setSearchAttemptSelect] = useState([])

    const [searchSearchAtt, setSearchSearchAtt] = useState("")
    const [name, setName] = useState("test name")
    const [id_search_attempts, setIdSearchAtt] = useState("test search")
    const [description, setDescription] = useState("test desc")
    const [selectLoading, setSelectLoading] = useState(true)

    useEffect(() => {
        let array = []
        props.searchAttempts.map((item) => {
            array.push({value: item.id, label: item.date_start})
        })
        setSearchAttemptSelect(array)
    }, [props.searchAttempts])

    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({name, id_search_attempts, description})
        }
        fetch("http://127.0.0.1:5000/addFinds", request)
            .then(response => {
                if (response.status === 200) {
                    toast.success("Находка успешно добавлена")
                } else {
                    toast.error("Ошибка добавления находки")
                }
            })
    }
    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper" onSubmit={submit}>
                <span className={"title_form"}>Добавить находку</span>
                <div>
                    <p className={"title_field"}>* Название находки</p>
                    <input className="form_input" onChange={(event) => {
                        setName(event.target.value)
                    }}/>
                </div>

                <div>
                    <p className={"title_field"}>* ID попытки поиска</p>

                    <Select options={searchAttemptSelect} isLoading={props.searchAttemptsLoading}
                            placeholder={"Выберите попытку поиска"}
                            onChange={(newValue) => {
                                setIdSearchAtt(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>* Описание</p>
                    <textarea className="textarea_form" onChange={(event) => {
                        setDescription(event.target.value)
                    }}/>
                </div>
                <button className={"submit_button"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                <span className={"title_form"}>Найти находку</span>
                <div>
                    <p className={"title_field"}>* Введите номер попытки поиска</p>
                    <Select options={searchAttemptSelect} isLoading={props.searchAttemptsLoading}
                            placeholder={"Выберите попытку поиска"}
                            onChange={(newValue) => {
                                setSearchSearchAtt(newValue.value)
                            }}/>
                </div>
                <p className={"title_field"}>Результаты поиска</p>
                <div className="scroll-table">
                    <table>
                        <thead>
                        <tr>
                            <th>id находки</th>
                            <th>Название</th>
                            <th>Номер попытки поиска</th>
                            <th>Описание</th>
                        </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {props.finds.map(item => {
                                if (item.id_search_attempts === searchSearchAtt) {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            {searchAttemptSelect.map(srch => {
                                                if (srch.value === item.id_search_attempts) {
                                                    return (
                                                        <td>{srch.label}</td>
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

export default Finds;