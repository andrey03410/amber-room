import React, {useEffect, useState} from 'react';

const Indications = () => {
    const [indications, setIndications] = useState([])

    const [idPersons, setIdPersons] = useState("test name")
    const [testimony, setTestimony] = useState("test desc")
    const [idVersions, setIdVersions] = useState("test desc")
    const [date, setDate] = useState("test date")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/10ce9c86-ab08-416a-aafc-4d04a143a995")
            .then(res => res.json())
            .then((result) => {
                setIndications(result.indications)
            })
    }, [])
    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper">
                Добавить показание
                <div>
                    <p>* Автор показания</p>
                    <select name="select" size="3" multiple className="form_input">
                        <option  selected value="s1" > Иванов</option>
                        <option value="s2">Петров</option>
                        <option value="s3">Сидоров</option>
                        <option value="s4">Пирогов</option>
                    </select>
                </div>
                <div>
                    <p>Показание </p>
                    <textarea className="form_input"/>
                </div>
                <div>
                    <p>* Версия</p>
                    <select name="select" size="3" multiple className="form_input">
                        <option selected value="s1">1 (Описание)</option>
                        <option value="s2">2 (Описание)</option>
                        <option value="s3">3 (Описание)</option>
                        <option value="s4">4 (Описание)</option>
                    </select>
                </div>

                <div>
                    <p>Дата </p>
                    <input className="form_input"/>
                </div>
                <p>Документы, с которыми связаны показания</p>
                <select name="select" size="3" multiple className="form_input">
                    <option selected value="s1">1</option>
                    <option value="s2">2</option>
                    <option value="s3">3</option>
                    <option value="s4">4</option>
                </select>


                <button type={"submit"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                        Найти показание
                        <div>
                            <p>* ФИО автора</p>
                            <input className="form_input"/>
                        </div>
                Список показаний
                <div className="scroll-table">
                    <table>
                        <thead>
                            <tr>
                                <th>id показания</th>
                                <th>id персоны</th>
                                <th>Показание</th>
                                <th>id версии</th>
                                <th>Дата</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {indications.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_persons}</td>
                                    <td>{item.testimony}</td>
                                    <td>{item.id_versions}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                            {indications.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_persons}</td>
                                    <td>{item.testimony}</td>
                                    <td>{item.id_versions}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                            {indications.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_persons}</td>
                                    <td>{item.testimony}</td>
                                    <td>{item.id_versions}</td>
                                    <td>{item.date}</td>
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

export default Indications;