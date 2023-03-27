import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";

const Researches = () => {
    const [research, setResearch] = useState([])
    const [searchAttList, setSearchAttList] = useState([])
    const [searchTypeRes, setSearchTypeRes] = useState("")


    const [orgList, setOrgList] = useState([])
    const [typeResList, setTypeResList] = useState([])

    const [id_organization, setIdOrganization] = useState("test name")
    const [id_search_attempts, setIdSearchAtt] = useState("test name")
    const [description, setDescription] = useState("test desc")
    const [id_type_research, setIdTypeResearch] = useState("test desc")
    const [local_place, setLocalPlace] = useState("test desc")
    const [technique, setTechnique] = useState("test desc")

    const [selectLoadingSearchAtt, setSelectLoadingSearchAtt] = useState(true)
    const [selectLoadingOrg, setSelectLoadingOrg] = useState(true)
    const [selectLoadingTypeRes, setSelectLoadingTypeRes] = useState(true)

        useEffect(() => {
            fetch("http://127.0.0.1:5000/getOrganisation")
                .then(res => res.json())
                .then((result) => {
                    let array = []
                    result.organisation.map((item) => {
                        array.push({value: item.id, label: item.organisation})
                    })
                    setOrgList(array)
                    setSelectLoadingOrg(false)
                })
        }, [])

        useEffect(() => {
            fetch("http://127.0.0.1:5000/getTypeResearch")
                .then(res => res.json())
                .then((result) => {
                    let array = []
                    result.type_research.map((item) => {
                        array.push({value: item.id, label: item.type})
                    })
                    setTypeResList(array)
                    setSelectLoadingTypeRes(false)
                })
        }, [])

        useEffect(() => {
            fetch("http://127.0.0.1:5000/getSearchAtt")
                .then(res => res.json())
                .then((result) => {
                    let array = []
                    result.search_attempts.map((item, index) => {
                        array.push({value: item.id, label: item.date_start})
                    })
                    setSearchAttList(array)
                    setSelectLoadingSearchAtt(false)
                })
        }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getResearch")
            .then(res => res.json())
            .then((result) => {
                setResearch(result.research)
            })
    }, [])

    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({id_organization, id_search_attempts, description, id_type_research, local_place, technique})
        }
        fetch("test.com", request)
            .then(response => {
            if (response.status === 200) {
                    toast.success("Исследование успешно добавлено")
                } else {
                    toast.error("Ошибка добавления исследования")
                }
            })
    }


    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper" onSubmit={submit}>
                <span className={"title_form"}>Добавить исследование</span>
                <div>
                    <p className={"title_field"}>Организация</p>
                    <Select options={orgList} isLoading={selectLoadingOrg} placeholder={"Выберите организацию"}
                            onChange={(newValue) => {
                                setIdOrganization(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>* Попытка поиска</p>
                    <Select options={searchAttList} isLoading={selectLoadingSearchAtt} placeholder={"Выберите попытку поиска"}
                            onChange={(newValue) => {
                                setIdSearchAtt(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>Описание </p>
                    <textarea className="textarea_form" onChange={(event) => {setDescription(event.target.value)}}/>
                </div>
                <div>
                    <p className={"title_field"}>* Тип исследования</p>
                    <Select options={typeResList} isLoading={selectLoadingTypeRes} placeholder={"Выберите тип исследования"}
                            onChange={(newValue) => {
                                setIdTypeResearch(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>Локальное место </p>
                    <textarea className="textarea_form" onChange={(event) => {setLocalPlace(event.target.value)}}/>
                </div>
                <div>
                    <p className={"title_field"}>Техника</p>
                    <textarea className="textarea_form" onChange={(event) => {setTechnique(event.target.value)}}/>
                </div>


                <button className={"submit_button"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                <span className={"title_form"}>Найти исследование</span>
                                <div>
                                    <p className={"title_field"}>* Тип исследования</p>
                    <Select options={typeResList} isLoading={selectLoadingTypeRes} placeholder={"Выберите тип исследования"}
                            onChange={(newValue) => {
                                setSearchTypeRes(newValue.value)
                            }}/>
                                </div>
                <p className={"title_field"}>Результаты поиска</p>
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
                            {research.map(item => {
                                if (item.id_type_research === searchTypeRes) {
                                    return (
                                        <tr>
                                    <td>{item.id}</td>
                                    <td>{item.id_organization}</td>
                                    <td>{item.id_search_attempts}</td>
                                    <td>{item.description}</td>
                                    <td>{item.id_type_research}</td>
                                    <td>{item.local_place}</td>
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

export default Researches;