import React, {useEffect, useState} from 'react';

const SearchAttempts = () => {
const [search_attempts, setSearchAt] = useState([])

    const [id_versions, setIdVersion] = useState("test name")
    const [date_start, setDateStart] = useState("date1")
    const [date_finish, setDateFinish] = useState("date2")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/1a2e2b8c-1311-4251-b99e-68e8df57062c")
            .then(res => res.json())
            .then((result) => {
                setSearchAt(result.search_attempts)
            })
    }, [])

    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({id_versions, date_start, date_finish})
        }
        fetch("test.com", request)
            .then(response => {
                if (response.status === 200) {
                    alert("Место успешно добавлено")
                } else {
                    alert("Ошибка добавления места")
                }
            })
    }



    return (
        <div className={"forms_wrapper"}>
                <form className="form_wrapper" onSubmit={submit}>
                <span className={"title_form"}>Добавить попытку поиска</span>
                    <div>
                        <p className={"title_field"}>* ID версии</p>
                        <input className="form_input" onChange={(event) => {setIdVersion(event.target.value)}}/>
                    </div>
                    <div>
                        <p className={"title_field"}>Дата начала</p>
                        <input type="date" className="form_input" onChange={(event) => {setDateStart(event.target.value)}}/>
                    </div>
                    <div>
                        <p className={"title_field"}>Дата окончания</p>
                        <input type="date" className="form_input" onChange={(event) => {setDateFinish(event.target.value)}}/>
                    </div>
                    <button className={"submit_button"}>Отправить</button>
                </form>

                <div className="form_wrapper">
            <span className={"title_form"}>Найти попытку поиска</span>
                    <div>
                        <p className={"title_field"}>* Дата начала</p>
                        <input className="form_input"/>
                    </div>
                <p className={"title_field"}>Результаты поиска</p>

                    <div className="scroll-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>id попытки поиска</th>
                                    <th>id версии</th>
                                    <th>Дата начала</th>
                                    <th>Дата конца</th>
                                </tr>
                            </thead>
                        </table>
                        <div className="scroll-table-body">
                            <table>
                                <tbody>

                                {search_attempts.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_versions}</td>
                                    <td>{item.date_start}</td>
                                    <td>{item.date_finish}</td>
                                </tr>
                                ))}
                                {search_attempts.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_versions}</td>
                                    <td>{item.date_start}</td>
                                    <td>{item.date_finish}</td>
                                </tr>
                                ))}
                                {search_attempts.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_versions}</td>
                                    <td>{item.date_start}</td>
                                    <td>{item.date_finish}</td>
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

export default SearchAttempts;