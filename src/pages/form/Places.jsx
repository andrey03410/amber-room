import React, {useEffect, useState} from 'react';

const Places = () => {
    const [places, setPlaces] = useState([])

    const [name, setName] = useState("test name")
    const [description, setDescription] = useState("test desc")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/6de17b9c-0751-418c-b695-b30fc486b6fb")
            .then(res => res.json())
            .then((result) => {
                setPlaces(result.places)
            })
    }, [])

    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({name, description})
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
                Добавить место
                <div>
                    <p>* Название</p>
                    <input className="form_input" onChange={(event) => {setName(event.target.value)}}/>
                </div>
                <div>
                    <p>Описание</p>
                    <input className="form_input" onChange={(event) => {setDescription(event.target.value)}}/>
                </div>
                <button type={"submit"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                Список мест
                <div className="scroll-table">
                    <table>
                        <thead>
                            <tr>
                                <th>id места</th>
                                <th>Название</th>
                                <th>Описание</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {places.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                            {places.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                            {places.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
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

export default Places;