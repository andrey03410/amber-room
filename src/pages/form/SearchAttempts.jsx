import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import Select from "react-select";

const SearchAttempts = (props) => {
    const [versionSelect, setVersionSelect] = useState([])
    const [dateList, setDateList] = useState([])

    const [searchVersion, setSearchVersion] = useState("")

    const [id_versions, setIdVersion] = useState("test name")
    const [date_start, setDateStart] = useState("date1")
    const [description, setDescription] = useState("test desc")

    const [date_finish, setDateFinish] = useState("date2")
    const [selectLoading, setSelectLoading] = useState(true)

    useEffect(() => {
        let array = []
        props.versions.map((item) => {
            array.push({value: item.id, label: item.description})
        })
        setVersionSelect(array)
    }, [props.searchAttempts])

    const submit = (event) => {
        event.preventDefault()
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({id_versions, date_start, date_finish, description})
        }
        fetch("http://127.0.0.1:5000/addSearchAttempt", request)
            .then(response => {
                if (response.status === 200) {
                    toast.success("Попытка поиска успешно добавлена")
                } else {
                    toast.error("Ошибка добавления попытки поиска")
                }
            })
    }
    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper" onSubmit={submit}>
                <span className={"title_form"}>Добавить попытку поиска</span>
                <div>
                    <p className={"title_field"}>* ID версии</p>

                    <Select options={versionSelect} isLoading={props.versionsLoading} placeholder={"Выберите версию"}
                            onChange={(newValue) => {
                                setIdVersion(newValue.value)
                            }}/>
                </div>
                <div>
                    <p className={"title_field"}>Дата начала</p>
                    <input type="date" className="form_input" onChange={(event) => {
                        setDateStart(event.target.value)
                    }}/>
                </div>
                <div>
                    <p className={"title_field"}>Дата окончания</p>
                    <input type="date" className="form_input" onChange={(event) => {
                        setDateFinish(event.target.value)
                    }}/>
                </div>
                <div>
                    <p className={"title_field"}>Описание</p>
                    <textarea className="textarea_form" onChange={(event) => {
                        setDescription(event.target.value)
                    }}/>
                </div>
                <button className={"submit_button"}>Отправить</button>
            </form>

            <div className="form_wrapper">
                <span className={"title_form"}>Найти попытку поиска</span>
                <div>
                    <p className={"title_field"}>* Версия</p>
                    <Select options={versionSelect} isLoading={props.versionsLoading} placeholder={"Выберите версию"}
                            onChange={(newValue) => {
                                setSearchVersion(newValue.value)
                            }}/>
                </div>
                <p className={"title_field"}>Результаты поиска</p>

                <div className="scroll-table">
                    <table>
                        <thead>
                        <tr>
                            <th>id попытки поиска</th>
                            <th>id версии</th>
                            <th>Дата начала</th>
                            <th>Дата конца</th>
                            <th>Описание</th>
                        </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {props.searchAttempts.map(item => {
                                if (item.id_versions === searchVersion) {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            {versionSelect.map(vrs => {
                                                if (vrs.value === item.id_versions) {
                                                    return (
                                                        <td>{vrs.label}</td>
                                                    )
                                                }
                                            })}
                                            <td>{item.date_start}</td>
                                            <td>{item.date_finish}</td>
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

export default SearchAttempts;