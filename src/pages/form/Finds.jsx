import React, {useEffect, useState} from 'react';

const Finds = () => {
    const [find, setFind] = useState([])

    const [name, setName] = useState("test name")
    const [idSearchAtt, setIdSearchAtt] = useState("test search")
    const [description, setDescription] = useState("test desc")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/0675be50-5496-41fb-b182-d9f435e5c241")
            .then(res => res.json())
            .then((result) => {
                setFind(result.find)
            })
    }, [])


    return (
            <div className={"forms_wrapper"}>
                <form className="form_wrapper">
                    Добавить находку
                    <div>
                        <p>* Название находки</p>
                        <input className="form_input"/>
                    </div>
                    <div>
                        <p>* Описание</p>
                        <input className="form_input"/>
                    </div>
                    <div>
                        <p>* ID попытки поиска</p>
                        <input className="form_input"/>
                    </div>
                    <button type={"submit"}>Отправить</button>
                </form>
                <div className="form_wrapper">
                        Найти находку
                        <div>
                            <p>* Введите номер попытки поиска</p>
                            <input className="form_input"/>
                        </div>
                    Список находок
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
                            {find.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                            {find.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                            {find.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.description}</td>
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

export default Finds;