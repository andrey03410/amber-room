import React, {useEffect, useState} from 'react';

const Versions = () => {
  const [versions, setVersion] = useState([])

    const [idPlaces, setIdPlaces] = useState("test name")
    const [description, setDescription] = useState("test desc")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/45bf1284-e257-4de8-91b9-ed0e1caa8cb3")
            .then(res => res.json())
            .then((result) => {
                setVersion(result.versions)
            })
    }, [])
    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper">
                Добавить версию
                <div>
                    <p>* ID места</p>
                    <input className="form_input"/>
                </div>
                <div>
                    <p>Описание</p>
                    <input className="form_input"/>
                </div>
                <button type={"submit"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                                Найти версию
                                <div>
                                    <p>* Место</p>
                                    <input className="form_input"/>
                                </div>
                Список версий
                <div className="scroll-table">
                    <table>
                        <thead>
                            <tr>
                                <th>id версии</th>
                                <th>id места</th>
                                <th>Описание</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {versions.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_places}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                            {versions.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_places}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                            {versions.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_places}</td>
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

export default Versions;