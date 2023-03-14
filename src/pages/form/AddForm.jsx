import React from 'react';
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
    return (
        <div>
            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Персона</summary>
                <Persons/>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Места</summary>
                <Places/>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Версия</summary>
                <Versions/>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Попытка поиска</summary>
                <SearchAttempts/>
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