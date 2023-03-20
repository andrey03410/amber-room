import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";

const Documents = () => {
    const [document, setDocument] = useState([])
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
    const [images, setImages] = useState([null])

    const [selectLoadingTypeDoc, setSelectLoadingTypeDoc] = useState(true)
    const [selectLoadingPers, setSelectLoadingPers] = useState(true)
    const [selectLoadingSearchAtt, setSelectLoadingSearchAtt] = useState(true)


    useEffect(() => {
        fetch("https://run.mocky.io/v3/e0da3604-56e0-4420-b046-86d54d9c4ddc")
            .then(res => res.json())
            .then((result) => {
                let array = []
                result.typeDocList.map((item, index) => {
                    array.push({value: index + 1, label: item})
                })
                setTypeDocList(array)
                setSelectLoadingTypeDoc(false)
            })
    }, [])




        useEffect(() => {
            fetch("https://run.mocky.io/v3/6fb4f175-3709-427a-aa28-c4f56d7f0baf")
                .then(res => res.json())
                .then((result) => {
                    let array = []
                    result.searchAttList.map((item, index) => {
                        array.push({value: index + 1, label: item})
                    })
                    setSearchAttList(array)
                    setSelectLoadingSearchAtt(false)
                })
        }, [])


    useEffect(() => {
        fetch("https://run.mocky.io/v3/91aaa078-7bd7-40c1-a998-ada5367fec2d")
            .then(res => res.json())
            .then((result) => {
                let array = []
                result.personList.map((item, index) => {
                    array.push({value: index + 1, label: item})
                })
                setPersonList(array)
                setSelectLoadingPers(false)
            })
    }, [])

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
                    toast.success("Перcона успешно добавлена")
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

                    <Select options={typeDocList} isLoading={selectLoadingTypeDoc} placeholder={"Выберите тип документа"}
                            onChange={(newValue) => {
                                setIdTypeDoc(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>Попытка поиска</p>
                    <Select options={searchAttList} isLoading={selectLoadingSearchAtt} placeholder={"Выберите попытку поиска"}
                            onChange={(newValue) => {
                                setIdSearchAtt(newValue.value)
                            }}/>
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
                    <Select options={personList} isLoading={selectLoadingPers} isMulti placeholder={"Выберите персон"}
                            onChange={(newValue) => {
                                setAuthor(newValue.value)
                    }}/>
                </div>
                <div>
                    <p className={"title_field"}>Добавить персон, которые упоминались в документе</p>
                    <Select options={personList} isLoading={selectLoadingPers} isMulti placeholder={"Выберите персон"}
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
                    <button onClick={addButtonImage}>Добавить ячейку</button>
                    <button onClick={delButtonImage}>Удалить ячейку</button>
                </div>
                <button className={"submit_button"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                <span className={"title_form"}>Найти документ</span>
                    <div>
                        <p className={"title_field"}>* ФИО персоны, которая упоминается в документе</p>
                    <input className="form_input" onChange={(event) => {
                        setSearchName(event.target.value)
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

                            {document.map(item => {
                                if (item.id_type_doc.toLowerCase().includes(searchName.toLowerCase())) {
                                    return (
                                        <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_type_doc}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.date}</td>
                                    <td>{item.description}</td>
                                        </tr>
                                    )
                                }
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