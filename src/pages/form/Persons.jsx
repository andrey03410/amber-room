import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";
import {ENDPOINTS} from "../../API/endpoints";


const Persons = (props) => {
    const [name, setName] = useState("test name")
    const [id_nationality, setNationality] = useState("1")
    const [description, setDescription] = useState("test desc")
    const [searchName, setSearchName] = useState("")

    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({name, id_nationality, description})
        }
        fetch(ENDPOINTS.PERSON.POST, request)
            .then(response => {
                if (response.status === 200) {
                    toast.success("Перcона успешно добавлена")
                } else {
                    toast.error("Ошибка добавления персоны")
                }
            })
    }
    return (
        <div className="forms_wrapper">
            <form className="form_wrapper" onSubmit={submit}>
                <span className={"title_form"}>Добавить персону</span>
                <div>
                    <p className={"title_field"}>* ФИО</p>
                    <input className="form_input" onChange={(event) => {
                        setName(event.target.value)
                    }}/>
                </div>
                <div>
                    <p className={"title_field"}>* Гражданство</p>
                    <Select options={props.nationalityList} isLoading={props.nationalityListLoading}
                            placeholder={"Выберите гражданство"}
                            onChange={(newValue) => {
                                setNationality(newValue.value)
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

            <form className="form_wrapper">
                <span className={"title_form"}>Найти персону</span>
                <div>
                    <p className={"title_field"}>* ФИО</p>
                    <input className="form_input" onChange={(event) => {
                        setSearchName(event.target.value)
                    }}/>
                </div>
                <p className={"title_field"}>Результаты поиска </p>
                <div className="scroll-table">
                    <table>
                        <col width='8%' valign="top"/>
                        <col width="25%" valign="top"/>
                        <col width="25%" valign="top"/>
                        <col width="42%" valign="top"/>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>ФИО</th>
                            <th>Гражданство</th>
                            <th>Описание</th>
                        </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <col width='8%' valign="top"/>
                            <col width="25%" valign="top"/>
                            <col width="25%" valign="top"/>
                            <col width="42%" valign="top"/>
                            <tbody>
                            {props.persons.map(item => {
                                if (item.name.toLowerCase().includes(searchName.toLowerCase())) {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            {props.nationalityList.map(nat => {
                                                if (nat.value === item.id_nationality) {
                                                    return (
                                                        <td>{nat.label}</td>
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
            </form>
        </div>
    );
};

export default Persons;