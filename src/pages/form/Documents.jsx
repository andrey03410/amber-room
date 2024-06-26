import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";

const Documents = (props) => {
    const [documents, setDocuments] = useState([])
    const [searchAttList, setSearchAttList] = useState([])
    const [typeDocList, setTypeDocList] = useState([])
    const [personList, setPersonList] = useState([])

    const [person, setPerson] = useState("Иванов")
    const [author, setAuthor] = useState("Петров")
    const [searchName, setSearchName] = useState("")

    const [id_type_doc, setIdTypeDoc] = useState("test name")
    const [id_search_attempts, setIdSearchAtt] = useState("test search")
    const [date, setDate] = useState("test search")
    const [description, setDescription] = useState("test desc")

    const [imageDesc, setImageDesc] = useState(["test"])
    const [images, setImages] = useState([]);

    const [selectLoadingTypeDoc, setSelectLoadingTypeDoc] = useState(true)
    const [selectLoadingPers, setSelectLoadingPers] = useState(true)
    const [selectLoadingSearchAtt, setSelectLoadingSearchAtt] = useState(true)

    const [personsSelectValue, setPersonsSelectValue] = useState({id_persons: ""})
    const [authorsSelectValue, setAuthorsSelectValue] = useState({id_authors: ""})

    const [file, setFile] = useState(null);


    useEffect(() => {
        fetch("http://127.0.0.1:5000/getTypeDoc")
            .then(res => res.json())
            .then((result) => {
                let array = []
                result.type_doc.map((item) => {
                    array.push({value: item.id, label: item.type})
                })
                setTypeDocList(array)
                setSelectLoadingTypeDoc(false)
            })
    }, [])


    useEffect(() => {
        fetch("http://127.0.0.1:5000/getSearchAtt")
            .then(res => res.json())
            .then((result) => {
                let array = []
                result.search_attempts.map((item) => {
                    array.push({value: item.id, label: item.description})
                })
                setSearchAttList(array)
                setSelectLoadingSearchAtt(false)
            })
    }, [])


    useEffect(() => {
        fetch("http://127.0.0.1:5000/getPersons")
            .then(res => res.json())
            .then((result) => {
                let array = []
                result.persons.map((item) => {
                    array.push({value: item.id, label: item.name})
                })
                setPersonList(array)
                setSelectLoadingPers(false)
            })
    }, [])


    const searchDoc = (id_person) => {
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            // body: JSON.stringify({id_type_doc, id_search_attempts,date, description, id_author, id_person, imageDesc, images})
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
        let id_person = []
        personsSelectValue.map((item) => {
            id_person.push(item.value)
        })
        let id_author = []
        authorsSelectValue.map((item) => {
            id_author.push(item.value)
        })
        const formData = new FormData();
        formData.append('file', file);
        formData.append('data', JSON.stringify({
            id_type_doc,
            id_search_attempts,
            date,
            description,
            id_author,
            id_person,
        }));
        let request = {
            method: 'POST',
            body: formData
        }
        fetch("http://127.0.0.1:5000/addDocument", request)
            .then(response => {
                if (response.status === 200) {
                    toast.success("Документ успешно добавлен")
                } else {
                    toast.error("Ошибка добавления документа")
                }
            })
    }
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        setFile(file);
    }

    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper" onSubmit={submit}>
                <span className={"title_form"}>Добавить документ</span>
                <div>
                    <p className={"title_field"}>* Тип документа</p>

                    <Select options={typeDocList} isLoading={selectLoadingTypeDoc}
                            placeholder={"Выберите тип документа"}
                            onChange={(newValue) => {
                                setIdTypeDoc(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>Попытка поиска</p>
                    <Select options={searchAttList} isLoading={selectLoadingSearchAtt}
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
                    <Select options={personList} isLoading={selectLoadingPers} isMulti placeholder={"Выберите персон"}
                            onChange={(newValue) => {
                                setAuthorsSelectValue(newValue)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>Добавить персон, которые упоминались в документе</p>
                    <Select options={personList} isLoading={selectLoadingPers} isMulti placeholder={"Выберите персон"}
                            onChange={(newValue) => {
                                setPersonsSelectValue(newValue)

                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>Добавить исходный файл</p>
                    <div>
                        <input type={"file"} onChange={handleFileUpload}/>
                    </div>
                </div>
                <button className={"submit_button"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                <span className={"title_form"}>Найти документ</span>
                <div>
                    <p className={"title_field"}>* ФИО персоны, которая упоминается в документе</p>
                    <Select options={personList} isLoading={selectLoadingPers} placeholder={"Выберите персону"}
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
                                        {typeDocList.map(nat => {
                                            if (nat.value === item.id_type_doc) {
                                                return (
                                                    <td>{nat.label}</td>
                                                )
                                            }
                                        })}
                                        {searchAttList.map(nat => {
                                            if (nat.value == item.id_search_attempts) {
                                                return (
                                                    <td>{nat.label}</td>
                                                )
                                            }
                                        })}
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