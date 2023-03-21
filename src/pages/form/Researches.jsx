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
            fetch("https://run.mocky.io/v3/bd0a2a47-853a-4874-9fdb-ccbb439001c1")
                .then(res => res.json())
                .then((result) => {
                    let array = []
                    result.orgList.map((item, index) => {
                        array.push({value: index + 1, label: item})
                    })
                    setOrgList(array)
                    setSelectLoadingOrg(false)
                })
        }, [])

        useEffect(() => {
            fetch("https://run.mocky.io/v3/39fb8321-4ba7-40f9-bde4-df8b9f1f1a73")
                .then(res => res.json())
                .then((result) => {
                    let array = []
                    result.typeResList.map((item, index) => {
                        array.push({value: index + 1, label: item})
                    })
                    setTypeResList(array)
                    setSelectLoadingTypeRes(false)
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
        fetch("https://run.mocky.io/v3/6f9278ec-35f5-4e5c-938e-81830b57de35")
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
                    toast.success("Перcона успешно добавлена")
                } else {
                    toast.error("Ошибка добавления персоны")
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
                                if (item.id_type_research.toLowerCase().includes(searchTypeRes)) {
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