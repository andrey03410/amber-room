import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";

const Indications = () => {
    const [indications, setIndications] = useState([])
    const [searchAuthor, setSearchAuthor] = useState("")

    const [personList, setPersonList] = useState([])
    const [docList, setDocList] = useState(["Отчет о работе...", "Акт...", "Краткая характеристика..."])
    const [versionList, setVersionList] = useState(["Королевский замок, западное крыльцо", "Королевский замок, подвал", "Королевский замок, южное крыло"])
    const [id_persons, setIdPersons] = useState("test name")
    const [testimony, setTestimony] = useState("test desc")
    const [id_versions, setIdVersions] = useState("test desc")
    const [date, setDate] = useState("test date")
    const [documentSelectValue, setDocumentSelectValue] = useState({id_doc: ""})

    const [selectLoadingPers, setSelectLoadingPers] = useState(true)
    const [selectLoading, setSelectLoading] = useState(true)
    const [selectLoadingDocs, setSelectLoadingDocs] = useState(true)

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getVersions")
            .then(res => res.json())
            .then((result) => {
                let array = []
                result.versions.map((item) => {
                    array.push({value: item.id, label: item.description})
                })
                setVersionList(array)
                setSelectLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getDocument")
            .then(res => res.json())
            .then((result) => {
                let array = []
                result.document.map((item) => {
                    array.push({value: item.id, label: item.description})
                })
                setDocList(array)
                setSelectLoadingDocs(false)
            })
    }, [])


    useEffect(() => {
        fetch("http://127.0.0.1:5000/getIndication")
            .then(res => res.json())
            .then((result) => {
                setIndications(result.indications)
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


    const submit = (event) => {
        event.preventDefault()
        let id_documents = []
        documentSelectValue.map((item) => {
            id_documents.push(item.value)
        })
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({id_persons, testimony, id_versions, date, id_documents})
        }
        fetch("test.com", request)
            .then(response => {
                if (response.status === 200) {
                    toast.success("Показание успешно добавлено")
                } else {
                    toast.error("Ошибка добавления показания")
                }
            })
    }
    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper" onSubmit={submit}>
                <span className={"title_form"}>Добавить показание</span>
                <div>
                    <p className={"title_field"}>* Автор показания</p>
                    <Select options={personList} isLoading={selectLoadingPers} placeholder={"Выберите персон"}
                            onChange={(newValue) => {
                                setIdPersons(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>Показание </p>
                    <textarea className="textarea_form" onChange={(event) => {
                        setTestimony(event.target.value)
                    }}/>
                </div>
                <div>
                    <p className={"title_field"}>* Версия</p>
                    <Select options={versionList} isLoading={selectLoading} placeholder={"Выберите версию"}
                            onChange={(newValue) => {
                                setIdVersions(newValue.value)
                            }}/>
                </div>

                <div>
                    <p className={"title_field"}>Дата </p>
                    <input className="form_input" onChange={(event) => {
                        setDate(event.target.value)
                    }}/>
                </div>
                <p className={"title_field"}>Документы, с которыми связаны показания</p>
                <Select options={docList} isLoading={selectLoading} isMulti placeholder={"Выберите документ(ы)"}
                        onChange={(newValue) => {
                            setDocumentSelectValue(newValue)
                        }}/>


                <button className={"submit_button"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                <span className={"title_form"}>Найти показание</span>
                <div>
                    <p className={"title_field"}>* ФИО автора</p>
                    <Select options={personList} isLoading={selectLoading} placeholder={"Выберите ФИО автора"}
                            onChange={(newValue) => {
                                setSearchAuthor(newValue.value)
                            }}/>
                </div>
                <p className={"title_field"}>Результаты поиска</p>
                <div className="scroll-table">
                    <table>
                        <thead>
                        <tr>
                            <th>id показания</th>
                            <th>id персоны</th>
                            <th>Показание</th>
                            <th>id версии</th>
                            <th>Дата</th>
                        </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {indications.map(item => {
                                if (item.id_persons === searchAuthor) {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            {personList.map(prsn => {
                                                if (prsn.value === item.id_persons) {
                                                    return (

                                                        <td>{prsn.label}</td>

                                                    )
                                                }
                                            })}

                                            <td>{item.testimony}</td>
                                            {versionList.map(vrsn => {
                                                if (vrsn.value === item.id_versions) {
                                                    return (

                                                        <td>{vrsn.label}</td>

                                                    )
                                                }
                                            })}

                                            <td>{item.date}</td>
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

export default Indications;