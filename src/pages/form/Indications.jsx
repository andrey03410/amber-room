import React, {useEffect, useState} from 'react';

const Indications = () => {
    const [indications, setIndications] = useState([])

    const [personList, setPersonList] = useState(["Иванов", "Петров", "Зайцев"])
    const [docList, setDocList] = useState(["Отчет о работе...", "Акт...", "Краткая характеристика..."])
    const [versionList, setVersionList] = useState(["Королевский замок, западное крыльцо", "Королевский замок, подвал", "Королевский замок, южное крыло"])
    const [id_persons, setIdPersons] = useState("test name")
    const [testimony, setTestimony] = useState("test desc")
    const [id_versions, setIdVersions] = useState("test desc")
    const [date, setDate] = useState("test date")
    const [idDoc, setIdDoc] = useState("test date")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/10ce9c86-ab08-416a-aafc-4d04a143a995")
            .then(res => res.json())
            .then((result) => {
                setIndications(result.indications)
            })
    }, [])

    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({id_persons, testimony, id_versions, date, idDoc})
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
                <span className={"title_form"}>Добавить показание</span>
                <div>
                    <p className={"title_field"}>* Автор показания</p>
                    <select name="select" size="3" multiple className="select_form"
                    onChange={(event) => {setIdPersons(event.target.value)}}>
                        {personList.map((item, index) => (
                            <option value={index + 1}>{item}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p className={"title_field"}>Показание </p>
                    <textarea className="textarea_form" onChange={(event) => {setTestimony(event.target.value)}}/>
                </div>
                <div>
                    <p className={"title_field"}>* Версия</p>
                    <select name="select" size="3" multiple className="select_form"
                    onChange={(event) => {setIdVersions(event.target.value)}}>
                        {versionList.map((item, index) => (
                            <option value={index + 1}>{item}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p className={"title_field"}>Дата </p>
                    <input className="form_input" onChange={(event) => {setDate(event.target.value)}}/>
                </div>
                <p className={"title_field"}>Документы, с которыми связаны показания</p>
                    <select name="select" size="3" multiple className="select_form"
                    onChange={(event) => {setIdDoc(event.target.value)}}>
                        {docList.map((item, index) => (
                            <option value={index + 1}>{item}</option>
                        ))}
                    </select>


                <button className={"submit_button"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                <span className={"title_form"}>Найти показание</span>
                        <div>
                            <p className={"title_field"}>* ФИО автора</p>
                            <input className="form_input"/>
                        </div>
                <p className={"title_field"}>Результаты поиска</p>
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