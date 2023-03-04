import React, {useEffect, useState} from 'react';

const Persons = () => {
    const [persons, setPersons] = useState([])

    const [name, setName] = useState("test name")
    const [id_nationality, setNationality] = useState("test nationality")
    const [description, setDescription] = useState("test desc")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/b51256bf-3f40-4ca8-96c2-eabb9b408b0a")
            .then(res => res.json())
            .then((result) => {
                setPersons(result.persons)
            })
    }, [])

    return (
        <div className="forms_wrapper">
            <form className="form_wrapper">
                Добавить персону
                <div>
                    <p>* ФИО</p>
                    <input className="form_input"/>
                </div>
                <div>
                    <p>* Гражданство</p>
                    <select name="select" size="3" multiple className="form_input">
                        <option selected value="s1">СССР</option>
                        <option value="s2">Германия</option>
                        <option value="s3">Польша</option>
                        <option value="s4">Украина</option>
                    </select>
                </div>
                <div>
                    <p>Описание</p>
                    <textarea className="form_input"/>
                </div>
                <button>Отправить</button>
            </form>

            <form className="form_wrapper">
                Найти персону
                <div>
                    <p>* ФИО</p>
                    <input className="form_input"/>
                </div>
                <p>Результаты поиска </p>
                <div className="scroll-table">
                <table>
                    <thead>
                        <tr>
                            <td>id персоны</td>
                            <td>ФИО</td>
                            <td>Гражданство</td>
                            <td>Описание</td>
                        </tr>
                    </thead>
                </table>
                <div className="scroll-table-body">
                    <table>
                        <tbody>
                        {persons.map(item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.id_nationality}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))}
                        {persons.map(item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.id_nationality}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))}
                        {persons.map(item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.id_nationality}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>


            </form>
        </div>
    );
};

export default Persons;