import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";

const Documents = (props) => {
    const [documents, setDocuments] = useState([])
    const [searchAttemptsSelect, setSearchAttemptsSelect] = useState([])
    const [typeDocSelect, setTypeDocSelect] = useState([])
    const [personSelect, setPersonSelect] = useState([])

    const [person, setPerson] = useState("Иванов")
    const [author, setAuthor] = useState("Петров")
    const [searchName, setSearchName] = useState("")

    const [id_type_doc, setIdTypeDoc] = useState("test name")
    const [id_search_attempts, setIdSearchAtt] = useState("test search")
    const [date, setDate] = useState("test search")
    const [description, setDescription] = useState("test desc")

    const [imageDesc, setImageDesc] = useState(["test"])
    const [images, setImages] = useState([null])


    useEffect(() => {
        let array = []
        props.persons.map((item) => {
            array.push({value: item.id, label: item.name})
        })
        setPersonSelect(array)
    }, [props.persons])

    useEffect(() => {
        let array = []
        props.searchAttempts.map((item) => {
            array.push({value: item.id, label: item.date_start})
        })
        setSearchAttemptsSelect(array)
    }, [props.searchAttempts])

    useEffect(() => {
        let array = []
        props.typesDocuments.map((item) => {
            array.push({value: item.id, label: item.type})
        })
        setTypeDocSelect(array)
    }, [props.typesDocuments])

    const searchDoc = (id_person) => {
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({id_person})
        }
        fetch("http://127.0.0.1:5000/findDoc", request)
            .then(response => {
                if (response.status === 200) {
                    toast.success("Документы найдены")
                } else {
                    toast.error("Документы не найдены")
                }
                return response.json()
            })
            .then(result => {
                setDocuments(result.documents)
            })
    }

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
                    toast.success("Документ успешно добавлен")
                } else {
                    toast.error("Ошибка добавления документа")
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
            if (array.length > 1) {
                array.pop()
            }
            return array
        })
        setImages(prevState => {
            let array = [...prevState]
            if (array.length > 1) {
                array.pop()
            }
            return array
        })
    }
    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper" onSubmit={submit}>
                <span className={"title_form"}>Добавить документ</span>
                <div>
                    <p className={"title_field"}>* Тип документа</p>

                    <Select options={typeDocSelect} isLoading={props.typesDocumentsLoading}
                            placeholder={"Выберите тип документа"}
                            onChange={(newValue) => {
                                setIdTypeDoc(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>Попытка поиска</p>
                    <Select options={searchAttemptsSelect} isLoading={props.searchAttemptsLoading}
                            placeholder={"Выберите попытку поиска"}
                            onChange={(newValue) => {
                                setIdSearchAtt(newValue.value)
                            }}/>
                </div>

                <div>
                    <p className={"title_field"}>Дата </p>
                    <input className="form_input" onChange={(event) => {
                        setDate(event.target.value)
                    }}/>
                </div>
                <div>
                    <p className={"title_field"}>Описание </p>
                    <textarea className="textarea_form" onChange={(event) => {
                        setDescription(event.target.value)
                    }}/>
                </div>
                <div>
                    <p className={"title_field"}>Добавить автора(ов)</p>
                    <Select options={personSelect} isLoading={props.personsLoading} isMulti placeholder={"Выберите персон"}
                            onChange={(newValue) => {
                                setAuthor(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>Добавить персон, которые упоминались в документе</p>
                    <Select options={personSelect} isLoading={props.personsLoading} isMulti placeholder={"Выберите персон"}
                            onChange={(newValue) => {
                                setPerson(newValue.value)
                            }}/>
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
                    <button className={"add_image_button"} onClick={addButtonImage}>Добавить ячейку</button>
                    <button className={"del_image_button"} onClick={delButtonImage}>Удалить ячейку</button>
                </div>
                <button className={"submit_button"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                <span className={"title_form"}>Найти документ</span>
                <div>
                    <p className={"title_field"}>* ФИО персоны, которая упоминается в документе</p>
                    <Select options={personSelect} isLoading={props.personsLoading} placeholder={"Выберите персону"}
                            onChange={(newValue) => {
                                searchDoc(newValue.value)
                            }}/>
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
                            {documents.map(item => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.id_type_doc}</td>
                                        <td>{item.id_search_attempts}</td>
                                        <td>{item.date}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Documents;