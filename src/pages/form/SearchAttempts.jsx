import React, {useEffect, useState} from 'react';

const SearchAttempts = () => {
const [searchAttempts, setSearchAt] = useState([])

    const [idVersion, setIdVersion] = useState("test name")
    const [dateStart, setDateStart] = useState("date1")
    const [dateFinish, setDateFinish] = useState("date2")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/63200f37-abe8-487f-810f-692cc7d5197e")
            .then(res => res.json())
            .then((result) => {
                setSearchAt(result.searchAttempts)
            })
    }, [])
    return (
        <div className={"forms_wrapper"}>
                <form className="form_wrapper">
                    Добавить попытку поиска
                    <div>
                        <p>* ID версии</p>
                        <input className="form_input"/>
                    </div>
                    <div>
                        <p>Дата начала</p>
                        <input type="date" className="form_input"/>
                    </div>
                    <div>
                        <p>Дата окончания</p>
                        <input type="date" className="form_input"/>
                    </div>
                    <button type={"submit"}>Отправить</button>
                </form>
                <div className="form_wrapper">
                    Найти попытку поиска
                    <div>
                        <p>* Дата начала</p>
                        <input className="form_input"/>
                    </div>
                    Список попыток поиска

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
                                {searchAttempts.map(item => (
                                    <tr>
                                        <th>id попытки поиска</th>
                                        <th>id версии</th>
                                        <th>Дата начала</th>
                                        <th>Дата конца</th>
                                    </tr>
                                ))}
                                {searchAttempts.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_versions}</td>
                                    <td>{item.date_start}</td>
                                    <td>{item.date_finish}</td>
                                </tr>
                                ))}
                                {searchAttempts.map(item => (
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