import React, {useEffect, useState} from 'react';

const Researches = () => {
    const [research, setResearch] = useState([])

    const [idOrganization, setIdOrganization] = useState("test name")
    const [idSearchAtt, setIdSearchAtt] = useState("test name")
    const [description, setDescription] = useState("test desc")
    const [idTypeResearch, setIdTypeResearch] = useState("test desc")
    const [localPlace, setLocalPlace] = useState("test desc")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/6f9278ec-35f5-4e5c-938e-81830b57de35")
            .then(res => res.json())
            .then((result) => {
                setResearch(result.research)
            })
    }, [])
    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper">
                Добавить исследование
                <div>
                    <p>Организация</p>
                    <select name="select" size="3" multiple className="form_input">
                        <option  selected value="s1" > 1 (Описание)</option>
                        <option value="s2">2 (Описание)</option>
                        <option value="s3">3 (Описание)</option>
                        <option value="s4">4 (Описание)</option>
                    </select>
                </div>
                <div>
                    <p>* Попытка поиска</p>
                    <select name="select" size="3" multiple className="form_input">
                        <option selected value="s1">1 (Описание)</option>
                        <option value="s2">2 (Описание)</option>
                        <option value="s3">3 (Описание)</option>
                        <option value="s4">4 (Описание)</option>
                    </select>
                </div>
                <div>
                    <p>Описание </p>
                    <textarea className="form_input"/>
                </div>
                <div>
                    <p>* Тип исследования</p>
                    <select name="select" size="3" multiple className="form_input">
                        <option  selected value="s1" > 1 (Описание)</option>
                        <option value="s2">2 (Описание)</option>
                        <option value="s3">3 (Описание)</option>
                        <option value="s4">4 (Описание)</option>
                    </select>
                </div>
                <div>
                    <p>Локальное место </p>
                    <textarea className="form_input"/>
                </div>
                <div>
                    <p>Техника</p>
                    <textarea className="form_input"/>
                </div>


                <button type={"submit"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                                Найти документ
                                <div>
                                    <p>* Тип исследования</p>
                                    <input className="form_input"/>
                                </div>
                Список исследований
                <div className="scroll-table">
                    <table>
                        <thead>
                            <tr>
                                <th>id исследования</th>
                                <th>id организации</th>
                                <th>id попытки поиска</th>
                                <th>Описание</th>
                                <th>Тип исследования</th>
                                <th>Локальное место</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {research.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_organization}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.description}</td>
                                    <td>{item.id_type_research}</td>
                                    <td>{item.local_place}</td>
                                </tr>
                            ))}
                            {research.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_organization}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.description}</td>
                                    <td>{item.id_type_research}</td>
                                    <td>{item.local_place}</td>
                                </tr>
                            ))}
                            {research.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_organization}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.description}</td>
                                    <td>{item.id_type_research}</td>
                                    <td>{item.local_place}</td>
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

export default Researches;