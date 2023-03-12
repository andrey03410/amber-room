import React, {useEffect, useState} from 'react';

const Persons = () => {
    const [persons, setPersons] = useState([])
    const [nationalityList, setNationalityList] = useState(["СССР", "Германия", "Польша", "Украина"])

    const [name, setName] = useState("test name")
    const [id_nationality, setNationality] = useState("1")
    const [description, setDescription] = useState("test desc")

    const [searchName, setSearchName] = useState("")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/b51256bf-3f40-4ca8-96c2-eabb9b408b0a")
            .then(res => res.json())
            .then((result) => {
                setPersons(result.persons)
            })
    }, [])

    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({name, id_nationality, description})
        }
        fetch("test.com", request)
            .then(response => {
                if (response.status === 200) {
                    alert("Персона успешно добавлена")
                } else {
                    alert("Ошибка добавления")
                }
            })
    }

    return (
        <div className="forms_wrapper">
            <form className="form_wrapper" onSubmit={submit}>
                <span className={"title_form"}>Добавить персону</span>
                <div>
                    <p className={"title_field"}>* ФИО</p>
                    <input className="form_input" onChange={(event) => {setName(event.target.value)}}/>
                </div>
                <div>
                    <p className={"title_field"}>* Гражданство</p>
                    <select name="select" size="3" multiple className="select_form"
                    onChange={(event) => {setNationality(event.target.value)}}>
                        {nationalityList.map((item, index) => (
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

            <form className="form_wrapper">
                <span className={"title_form"}>Найти персону</span>
                <div>
                    <p className={"title_field"}>* ФИО</p>
                    <input className="form_input" onChange={(event) => {setSearchName(event.target.value)}}/>
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
                            if (item.name.includes(searchName)){
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