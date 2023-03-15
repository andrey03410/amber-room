import React, {useEffect, useState} from 'react';

const Documents = () => {
    const [document, setDocument] = useState([])
    const [idSearchAttList, setIdSearchAttList] = useState(["1. Королевский замок 1949-1956", "2. Королевский замок 1964-1969", "3. Королевский замок 1970-1972"])
    const [typeDocList, setTypeDocList] = useState(["Акт", "Справка", "Письмо", "Выписка"])
    const [personList, setPersonList] = useState(["Иванов", "Петров", "Зайцев"])

    const [person, setPerson] = useState("Иванов")
    const [author, setAuthor] = useState("Петров")

    const [id_type_doc, setIdTypeDoc] = useState("test name")
    const [id_search_attempts, setIdSearchAtt] = useState("test search")
    const [date, setDate] = useState("test search")
    const [description, setDescription] = useState("test desc")

    const [imageDesc, setImageDesc] = useState(["test"])
    const [images, setImages] = useState([null])
    const submit = (event) => {
        event.preventDefault()
        let formData = new FormData()
        formData.append("images", images)
        formData.append("imageDesc", imageDesc)
        formData.append("id_type_doc", id_type_doc)
        formData.append("id_search_attempts", id_search_attempts)
        formData.append("date", date)
        formData.append("description", description)
        formData.append("author", author)
        formData.append("person", person)
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            // body: JSON.stringify({id_type_doc, id_search_attempts,date, description, author, person, imageDesc, images})
            body: formData,
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
    const addButtonImage = (event) => {
        event.preventDefault()
        setImageDesc(prevState => {
            return [...prevState, "123"]
        })
        setImages(prevState => {
            return [...prevState, null]
        })
    }

    const delButtonImage = (event) => {
        event.preventDefault()
        setImageDesc(prevState => {
            let array = [...prevState]
            if(array.length > 1){
                array.pop()
            }
            return array
        })
        setImages(prevState => {
            let array = [...prevState]
            if(array.length > 1){
                array.pop()
            }
            return array
        })
    }

    useEffect(() => {
        fetch("https://run.mocky.io/v3/06582d7b-c765-4529-bd86-37107d13a986")
            .then(res => res.json())
            .then((result) => {
                setDocument(result.document)
            })
    }, [])
    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper"  onSubmit={submit}>
                <span className={"title_form"}>Добавить документ</span>
                <div>
                    <p className={"title_field"}>* Тип документа</p>
                    <select name="select" size="3" multiple className="select_form"
                    onChange={(event) => {setIdTypeDoc(event.target.value)}}>
                        {typeDocList.map((item, index) => (
                            <option value={index + 1}>{item}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p className={"title_field"}>Попытка поиска</p>
                    <select name="select" size="3" multiple className="select_form"
                    onChange={(event) => {setIdSearchAtt(event.target.value)}}>
                        {idSearchAttList.map((item, index) => (
                            <option value={index + 1}>{item}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p className={"title_field"}>Дата </p>
                    <input className="form_input" onChange={(event) => {setDate(event.target.value)}}/>
                </div>
                <div>
                    <p className={"title_field"}>Описание </p>
                    <textarea className="textarea_form" onChange={(event) => {setDescription(event.target.value)}}/>
                </div>
                <div>
                    <p className={"title_field"}>Добавить автора(ов)</p>
                    <select name="select" size="3" multiple className="select_form"
                    onChange={(event) => {setAuthor(event.target.value)}}>
                        {personList.map((item, index) => (
                            <option value={index + 1}>{item}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p className={"title_field"}>Добавить персон, которые упоминались в документе</p>
                    <select name="select" size="3" multiple className="select_form"
                    onChange={(event) => {setPerson(event.target.value)}}>
                        {personList.map((item, index) => (
                            <option value={index + 1}>{item}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p className={"title_field"}>Добавить фото </p>
                    <div className="forms_wrapper">
                        <div>
                            <p className={"title_field"}>Фото </p>
                        </div>
                        <div>
                            <p className={"title_field"}>Описание </p>
                        </div>
                    </div>

                    {imageDesc.map((item, index) => (
                        <div className="forms_wrapper">
                            <div>
                                <input type={"file"} onChange={(event) => {
                                    setImages(prevState => {
                                        let array = [...prevState]
                                        array[index] = event.target.files[0]
                                        console.log(array)
                                        return array
                                    })

                                }}/>
                            </div>
                            <div>
                                <input className="form_input" onChange={(event => {
                                    setImageDesc(prevState => {
                                        let array = [...prevState]
                                        array[index] = event.target.value
                                        return array
                                    })
                                })}/>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <button onClick={addButtonImage}>Добавить ячейку</button>
                    <button onClick={delButtonImage}>Удалить ячейку</button>
                </div>
                <button className={"submit_button"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                <span className={"title_form"}>Найти документ</span>
                    <div>
                        <p className={"title_field"}>* ФИО персоны, которая упоминается в документе</p>
                        <input className="form_input"/>
                    </div>
                <p className={"title_field"}>Результаты поиска</p>
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