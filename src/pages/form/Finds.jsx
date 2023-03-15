import React, {useEffect, useState} from 'react';

const Finds = () => {
    const [find, setFind] = useState([])
    const [idSearchAttList, setIdSearchAttList] = useState(["1. Королевский замок 1949-1956", "2. Королевский замок 1964-1969", "3. Королевский замок 1970-1972"])

    const [name, setName] = useState("test name")
    const [id_search_attempts, setIdSearchAtt] = useState("test search")
    const [description, setDescription] = useState("test desc")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/0675be50-5496-41fb-b182-d9f435e5c241")
            .then(res => res.json())
            .then((result) => {
                setFind(result.find)
            })
    }, [])

    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({name,id_search_attempts, description})
        }
        fetch("test.com", request)
            .then(response => {
            if (response.status === 200) {
                    toast.success("Перона успешно добавлена")
                } else {
                    toast.error("Ошибка добавления персоны")
                }
            })
    }

    return (
            <div className={"forms_wrapper"}>
                <form className="form_wrapper"  onSubmit={submit}>
                <span className={"title_form"}>Добавить находку</span>
                    <div>
                        <p className={"title_field"}>* Название находки</p>
                        <input className="form_input" onChange={(event) => {setName(event.target.value)}}/>
                    </div>
                    <div>
                        <p className={"title_field"}>* Описание</p>
                        <input className="form_input" onChange={(event) => {setDescription(event.target.value)}}/>
                    </div>
                    <div>
                        <p className={"title_field"}>* ID попытки поиска</p>
                        <select name="select" size="3" multiple className="select_form"
                        onChange={(event) => {setIdSearchAtt(event.target.value)}}>
                        {idSearchAttList.map((item, index) => (
                            <option value={index + 1}>{item}</option>
                        ))}
                    </select>
                    </div>
                    <button className={"submit_button"}>Отправить</button>
                </form>
                <div className="form_wrapper">
                <span className={"title_form"}>Найти находку</span>
                        <div>
                            <p className={"title_field"}>* Введите номер попытки поиска</p>
                            <input className="form_input"/>
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