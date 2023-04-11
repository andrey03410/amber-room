import React, {useEffect, useState} from 'react';
import './AddForm.css'
import './Places'
import Places from "./Places";
import Persons from "./Persons";
import Versions from "./Versions";
import SearchAttempts from "./SearchAttempts";
import Documents from "./Documents";
import Indications from "./Indications";
import Researches from "./Researches";
import Finds from "./Finds";


const AddForm = () => {
    const [persons, setPersons] = useState([])

    const [nationalityList, setNationalityList] = useState([])
    const [nationalityListLoading, setNationalityListLoading] = useState(true)

    const [places, setPlaces] = useState([])
    const [placesLoading, setPlacesLoading] = useState(true)

    const [versions, setVersion] = useState([])
    const [versionsLoading, setVersionsLoading] = useState(true)

    const [searchAttempts, setSearchAttempts] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getPersons")
            .then(res => res.json())
            .then((result) => {
                setPersons(result.persons)
            })
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getNationality")
            .then(res => res.json())
            .then((result) => {
                let array = []
                result.nationality.map((item) => {
                    array.push({value: item.id, label: item.nationality})
                })
                setNationalityList(array)
                setNationalityListLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getPlaces")
            .then(res => res.json())
            .then((result) => {
                setPlaces(result.places)
                setPlacesLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getVersions")
            .then(res => res.json())
            .then((result) => {
                setVersion(result.versions)
                setVersionsLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getSearchAtt")
            .then(res => res.json())
            .then((result) => {
                setSearchAttempts(result.search_attempts)
            })
    }, [])

    return (
        <div>
            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Персона</summary>
                <Persons persons={persons} nationalityList={nationalityList}
                         nationalityListLoading={nationalityListLoading}/>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Места</summary>
                <Places places={places}/>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Версия</summary>
                <Versions versions={versions} places={places} placesLoading={placesLoading}/>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Попытка поиска</summary>
                <SearchAttempts searchAttempts={searchAttempts} versions={versions} versionsLoading={versionsLoading}/>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Находка</summary>
                <Finds/>
            </details>
            {/*КАТЯ! тут для тебя ↓↓↓↓↓↓↓↓↓↓↓*/}
            {/*Поняла? Обведи ответ: нет, да*/}
            {/*Да!!!*/}
            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Документ</summary>
                <Documents/>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Показание</summary>
                <Indications/>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Исследование</summary>
                <Researches/>
            </details>
        </div>
    );
};

export default AddForm;