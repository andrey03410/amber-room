import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";

const Researches = (props) => {
    const [searchAttemptsSelect, setSearchAttemptsSelect] = useState([])
    const [searchTypeRes, setSearchTypeRes] = useState("")


    const [organisationSelect, setOrganisationSelect] = useState([])
    const [typeResSelect, setTypeResSelect] = useState([])

    const [id_organization, setIdOrganization] = useState("test name")
    const [id_search_attempts, setIdSearchAtt] = useState("test name")
    const [description, setDescription] = useState("test desc")
    const [id_type_research, setIdTypeResearch] = useState("test desc")
    const [local_place, setLocalPlace] = useState("test desc")
    const [technique, setTechnique] = useState("test desc")

    useEffect(() => {
        let array = []
        props.searchAttempts.map((item) => {
            array.push({value: item.id, label: item.date_start})
        })
        setSearchAttemptsSelect(array)
    }, [props.searchAttempts])

    useEffect(() => {
        let array = []
        props.typeResearch.map((item) => {
            array.push({value: item.id, label: item.type})
        })
        setTypeResSelect(array)

    }, [props.typeResearch])

    useEffect(() => {
        let array = []
        props.organisation.map((item) => {
            array.push({value: item.id, label: item.organisation})
        })
        setOrganisationSelect(array)
    }, [props.organisation])

    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({
                id_organization,
                id_search_attempts,
                description,
                id_type_research,
                local_place,
                technique
            })
        }
        fetch("http://127.0.0.1:5000/addResearches", request)
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
                    <Select options={organisationSelect} isLoading={props.organisationLoading}
                            placeholder={"Выберите организацию"}
                            onChange={(newValue) => {
                                setIdOrganization(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>* Попытка поиска</p>
                    <Select options={searchAttemptsSelect} isLoading={props.searchAttemptsLoading}
                            placeholder={"Выберите попытку поиска"}
                            onChange={(newValue) => {
                                setIdSearchAtt(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>Описание </p>
                    <textarea className="textarea_form" onChange={(event) => {
                        setDescription(event.target.value)
                    }}/>
                </div>
                <div>
                    <p className={"title_field"}>* Тип исследования</p>
                    <Select options={typeResSelect} isLoading={props.typeResearchLoading}
                            placeholder={"Выберите тип исследования"}
                            onChange={(newValue) => {
                                setIdTypeResearch(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>Локальное место </p>
                    <textarea className="textarea_form" onChange={(event) => {
                        setLocalPlace(event.target.value)
                    }}/>
                </div>
                <div>
                    <p className={"title_field"}>Техника</p>
                    <textarea className="textarea_form" onChange={(event) => {
                        setTechnique(event.target.value)
                    }}/>
                </div>


                <button className={"submit_button"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                <span className={"title_form"}>Найти исследование</span>
                <div>
                    <p className={"title_field"}>* Тип исследования</p>
                    <Select options={typeResSelect} isLoading={props.typeResearchLoading}
                            placeholder={"Выберите тип исследования"}
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
                            <th>Техника</th>
                        </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {props.research.map(item => {
                                if (item.id_type_research === searchTypeRes) {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            {organisationSelect.map(org => {
                                                if (org.value == item.id_organization) {
                                                    return (
                                                        <td>{org.label}</td>
                                                    )
                                                }
                                            })}
                                            {searchAttemptsSelect.map(srch => {
                                                if (srch.value == item.id_search_attempts) {
                                                    return (
                                                        <td>{srch.label}</td>
                                                    )
                                                }
                                            })}
                                            <td>{item.description}</td>
                                            {typeResSelect.map(tprs => {

                                                if (tprs.value == item.id_type_research) {
                                                    return (
                                                        <td>{tprs.label}</td>
                                                    )
                                                }
                                            })}
                                            <td>{item.local_place}</td>
                                            <td>{item.tecnique}</td>
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