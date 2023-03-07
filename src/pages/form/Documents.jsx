import React, {useEffect, useState} from 'react';

const Documents = () => {
    const [document, setDocument] = useState([])

    const [idTypeDoc, setIdTypeDoc] = useState("test name")
    const [idSearchAtt, setIdSearchAtt] = useState("test search")
    const [date, setDate] = useState("test search")
    const [description, setDescription] = useState("test desc")

    useEffect(() => {
        fetch("https://run.mocky.io/v3/06582d7b-c765-4529-bd86-37107d13a986")
            .then(res => res.json())
            .then((result) => {
                setDocument(result.document)
            })
    }, [])
    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper">
                Добавить документ
                <div>
                    <p>* Тип документа</p>
                    <select name="select" size="3" multiple className="form_input">
                        <option selected value="s1">Справка</option>
                        <option value="s2">Акт</option>
                        <option value="s3">Письмо</option>
                        <option value="s4">Выписка</option>
                        <option value="s5">Характеристика</option>
                    </select>
                </div>
                <div>
                    <p>Попытка поиска</p>
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
                <div>
                    <p>Описание </p>
                    <textarea className="form_input"/>
                </div>
                <div>
                    <p>Добавить автора(ов)</p>
                    <select name="select" size="3" multiple className="form_input">
                        <option  selected value="s1" > Иванов</option>
                        <option value="s2">Петров</option>
                        <option value="s3">Сидоров</option>
                        <option value="s4">Пирогов</option>
                    </select>
                </div>
                <div>
                    <p>Добавить персон, которые упоминались в документе</p>
                    <select name="select" size="3" multiple className="form_input">
                        <option  selected value="s1" >Иванов</option>
                        <option value="s2">Петров</option>
                        <option value="s3">Сидоров</option>
                        <option value="s4">Пирогов</option>
                    </select>
                </div>
                <div>
                    <p>Добавить фото </p>
                    <div className="forms_wrapper">
                        <div>
                            <p>Фото </p>
                            <button type="button">Добавить</button>
                        </div>
                        <div>
                            <p>Описание </p>
                            <input className="form_input"/>
                        </div>

                    </div>
                </div>
                <button type={"submit"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                    Найти документ
                    <div>
                        <p>* ФИО персоны, которая упоминается в документе</p>
                        <input className="form_input"/>
                    </div>
                Список документов
                <div className="scroll-table">
                    <table>
                        <thead>
                            <tr>
                                <th>id места</th>
                                <th>id тип документа</th>
                                <th>id попытки поиска</th>
                                <th>Дата</th>
                                <th>Описание</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {document.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_type_doc}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.date}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}

                            {document.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_type_doc}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.date}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                            {document.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_type_doc}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.date}</td>
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

export default Documents;