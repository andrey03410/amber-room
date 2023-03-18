import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";


const Persons = () => {
    const [persons, setPersons] = useState([])
    const [nationalityList, setNationalityList] = useState([])

    const [name, setName] = useState("test name")
    const [id_nationality, setNationality] = useState("1")
    const [description, setDescription] = useState("test desc")
    const [searchName, setSearchName] = useState("")

    const [selectLoading, setSelectLoading] = useState(true)

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getPersons")
            .then(res => res.json())
            .then((result) => {
                setPersons(result.persons)
            })
    }, [])

    useEffect(() => {
        fetch("https://run.mocky.io/v3/8f71e77d-4787-4d07-a758-01eebb9e1d36")
            .then(res => res.json())
            .then((result) => {
                let array = []
                result.nationalityList.map((item, index) => {
                    array.push({value: index + 1, label: item})
                })
                setNationalityList(array)
                setSelectLoading(false)
            })
    }, [])

    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({name, id_nationality, description})
        }
        fetch("http://127.0.0.1:5000/addPerson", request)
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
                    <Select options={nationalityList} isLoading={selectLoading} placeholder={"Выберите гражданство"}
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
                        <thead>
                        <tr>
                            <th>id персоны</th>
                            <th>ФИО</th>
                            <th>Гражданство</th>
                            <th>Описание</th>
                        </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {persons.map(item => {
                                if (item.name.toLowerCase().includes(searchName.toLowerCase())) {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.id_nationality}</td>
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