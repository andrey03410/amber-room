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
    const [personsLoading, setPersonsLoading] = useState(true)

    const [nationalityList, setNationalityList] = useState([])
    const [nationalityListLoading, setNationalityListLoading] = useState(true)

    const [places, setPlaces] = useState([])
    const [placesLoading, setPlacesLoading] = useState(true)

    const [versions, setVersion] = useState([])
    const [versionsLoading, setVersionsLoading] = useState(true)

    const [searchAttempts, setSearchAttempts] = useState([])
    const [searchAttemptsLoading, setSearchAttemptsLoading] = useState(true)

    const [finds, setFinds] = useState([])

    const [typesDocuments, setTypesDocuments] = useState([])
    const [typesDocumentsLoading, setTypesDocumentsLoading] = useState(true)

    const [indications, setIndications] = useState([])

    const [documents, setDocuments] = useState([])
    const [documentsLoading, setDocumentsLoading] = useState(true)

    const [organisation, setOrganisation] = useState([])
    const [organisationLoading, setOrganisationLoading] = useState(true)

    const [typeResearch, setTypeResearch] = useState([])
    const [typeResearchLoading, setTypeResearchLoading] = useState(true)

    const [research, setResearch] = useState([])
    const [researchLoading, setResearchLoading] = useState(true)


    useEffect(() => {
        fetch("http://127.0.0.1:5000/getPersons")
            .then(res => res.json())
            .then((result) => {
                setPersons(result.persons)
                setPersonsLoading(false)
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
                setSearchAttemptsLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getFinds")
            .then(res => res.json())
            .then((result) => {
                setFinds(result.find)
            })
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getTypeDoc")
            .then(res => res.json())
            .then((result) => {
                setTypesDocuments(result.type_doc)
                setTypesDocumentsLoading(false)
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
        fetch("http://127.0.0.1:5000/getDocument")
            .then(res => res.json())
            .then((result) => {
                setDocuments(result.document)
                setDocumentsLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getOrganisation")
            .then(res => res.json())
            .then((result) => {
                setOrganisation(result.organisation)
                setOrganisationLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getTypeResearch")
            .then(res => res.json())
            .then((result) => {
                setTypeResearch(result.type_research)
                setTypeResearchLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getResearch")
            .then(res => res.json())
            .then((result) => {
                setResearch(result.research)
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
                <Finds finds={finds} searchAttempts={searchAttempts} searchAttemptsLoading={searchAttemptsLoading}/>
            </details>
            {/*КАТЯ! тут для тебя ↓↓↓↓↓↓↓↓↓↓↓*/}
            {/*Поняла? Обведи ответ: нет, да*/}
            {/*Да!!!*/}
            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Документ</summary>
                <Documents persons={persons} personsLoading={personsLoading} typesDocuments={typesDocuments}
                           typesDocumentsLoading={typesDocumentsLoading} searchAttempts={searchAttempts}
                           searchAttemptsLoading={searchAttemptsLoading}/>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Показание</summary>
                <Indications persons={persons} personsLoading={personsLoading}
                             versions={versions} versionsLoading={versionsLoading}
                             documents={documents} documentsLoading={documentsLoading}
                             indications={indications}
                />
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Исследование</summary>
                <Researches organisation={organisation} organisationLoading={organisationLoading}
                            typeResearch={typeResearch} typeResearchLoading={typeResearchLoading}
                            searchAttempts={searchAttempts} searchAttemptsLoading={searchAttemptsLoading}
                            research={research}
                />
            </details>
        </div>
    );
};

export default AddForm;