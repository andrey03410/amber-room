import React, {useEffect, useState} from 'react';

const Technique = () => {
    const [technique, setTechnique] = useState([])

    const [idTechnique, setIdTechnique] = useState("test name")


    useEffect(() => {
        fetch("https://run.mocky.io/v3/a45e6e8c-8147-495d-84f3-4cd92d163a92")
            .then(res => res.json())
            .then((result) => {
                setTechnique(result.technique)
            })
    }, [])
    return (

            <div className={"forms_wrapper"}>
                <form className="form_wrapper">
                    Добавить технику
                    <div>
                        <p>* Тип техники</p>
                        <input className="form_input"/>
                    </div>

                    <button type={"submit"}>Отправить</button>
                </form>
                <div className="form_wrapper">
                                    Найти технику
                                    <div>
                                        <p>* Тип техники</p>
                                        <input className="form_input"/>
                                    </div>
                <div className="scroll-table">
                    <table>
                        <thead>
                            <tr>
                                <th>id техники</th>
                                <th>Тип техники</th>

                            </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {technique.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_technique}</td>
                                </tr>
                            ))}
                            {technique.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_technique}</td>
                                </tr>
                            ))}
                            {technique.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_technique}</td>
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

export default Technique;