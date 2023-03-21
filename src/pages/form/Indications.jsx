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
    const [idDoc, setIdDoc] = useState("test date")

    const [selectLoadingPers, setSelectLoadingPers] = useState(true)
    const [selectLoading, setSelectLoading] = useState(true)
    const [selectLoadingDocs, setSelectLoadingDocs] = useState(true)

        useEffect(() => {
            fetch("https://run.mocky.io/v3/8a8895a4-d564-4806-9fd7-b8e97bc633ba")
                .then(res => res.json())
                .then((result) => {
                    let array = []
                    result.versionList.map((item, index) => {
                        array.push({value: index + 1, label: item})
                    })
                    setVersionList(array)
                    setSelectLoading(false)
                })
        }, [])

        useEffect(() => {
            fetch("https://run.mocky.io/v3/d23e90dc-0ac2-4506-929b-e5b9e234b28e")
                .then(res => res.json())
                .then((result) => {
                    let array = []
                    result.docList.map((item, index) => {
                        array.push({value: index + 1, label: item})
                    })
                    setDocList(array)
                    setSelectLoadingDocs(false)
                })
        }, [])


    useEffect(() => {
        fetch("https://run.mocky.io/v3/10ce9c86-ab08-416a-aafc-4d04a143a995")
            .then(res => res.json())
            .then((result) => {
                setIndications(result.indications)
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
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({id_persons, testimony, id_versions, date, idDoc})
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
                    <textarea className="textarea_form" onChange={(event) => {setTestimony(event.target.value)}}/>
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
                    <input className="form_input" onChange={(event) => {setDate(event.target.value)}}/>
                </div>
                <p className={"title_field"}>Документы, с которыми связаны показания</p>
                    <Select options={docList} isLoading={selectLoading} isMulti placeholder={"Выберите документ(ы)"}
                            onChange={(newValue) => {
                                setIdDoc(newValue.value)
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
                                if (item.id_persons.toLowerCase().includes(searchAuthor)) {
                                    return (
                                        <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_persons}</td>
                                    <td>{item.testimony}</td>
                                    <td>{item.id_versions}</td>
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