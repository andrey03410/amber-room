import React from 'react';
import './AddForm.css'
import './Places'
import Places from "./Places";

const AddForm = () => {
    return (
        <div>
            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Персона</summary>
                <div className="forms_wrapper">
                    <form className="form_wrapper">
                        Добавить персону
                        <div>
                            <p>* ФИО</p>
                            <input className="form_input"/>
                        </div>
                        <div>
                            <p>* Гражданство</p>
                            <select name="select" size="3" multiple className="form_input">
                                <option selected value="s1">СССР</option>
                                <option value="s2">Германия</option>
                                <option value="s3">Польша</option>
                                <option value="s4">Украина</option>
                            </select>
                        </div>
                        <div>
                            <p>Описание</p>
                            <textarea className="form_input"/>
                        </div>
                        <button>Отправить</button>
                    </form>

                    <form className="form_wrapper">
                        Найти персону
                        <div>
                            <p>* ФИО</p>
                            <input className="form_input"/>
                        </div>
                        <p>Результаты поиска </p>
                        <table>
                            <tr>
                                <td>&nbsp;</td>
                                <td>id персоны</td>
                                <td>ФИО</td>
                                <td>Описание</td>
                            </tr>
                            <tr>
                                <td>Eating Habits</td>
                                <td>Eats everyone's leftovers</td>
                                <td>Nibbles at food</td>
                                <td>Hearty eater</td>
                            </tr>
                        </table>
                        <button>Отправить</button>
                    </form>
                </div>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Места</summary>
                <Places/>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Версия</summary>
                <div className={"forms_wrapper"}>
                    <form className="form_wrapper">
                        Добавить версию
                        <div>
                            <p>* ID места</p>
                            <input className="form_input"/>
                        </div>
                        <div>
                            <p>Описание</p>
                            <input className="form_input"/>
                        </div>
                        <button type={"submit"}>Отправить</button>
                    </form>
                    <div className="form_wrapper">
                        Список версий
                        <table>
                            <tr>
                                <td>&nbsp;</td>
                                <td>ID версии</td>
                                <td>ID версии</td>
                                <td>Описание</td>
                            </tr>
                            <tr>
                                <td>Eating Habits</td>
                                <td>Eats everyone's leftovers</td>
                                <td>Nibbles at food</td>
                                <td>Hearty eater</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Попытка поиска</summary>
                <div className={"forms_wrapper"}>
                    <form className="form_wrapper">
                        Добавить попытку поиска
                        <div>
                            <p>* ID версии</p>
                            <input className="form_input"/>
                        </div>
                        <div>
                            <p>Дата начала</p>
                            <input type="date" className="form_input"/>
                        </div>
                        <div>
                            <p>Дата окончания</p>
                            <input type="date" className="form_input"/>
                        </div>
                        <button type={"submit"}>Отправить</button>
                    </form>
                    <div className="form_wrapper">
                        Список попыток поиска
                        <p>* Версия</p>
                        <select name="select" size="3" multiple className="form_input">
                            <option selected value="s1">1</option>
                            <option value="s2">2</option>
                            <option value="s3">3</option>
                            <option value="s4">4</option>
                        </select>
                        <table>
                            <tr>
                                <td>&nbsp;</td>
                                <td>id попытки поиска</td>
                                <td>id версии</td>
                                <td>дата начала</td>
                                <td>дата конца</td>
                            </tr>
                            <tr>
                                <td>Eating Habits</td>
                                <td>Eats everyone's leftovers</td>
                                <td>Nibbles at food</td>
                                <td>Hearty eater</td>
                                <td>Hearty eater</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className={"forms_wrapper"}>
                    <form className="form_wrapper">
                        Добавить находку
                        <div>
                            <p>* Название находки</p>
                            <input className="form_input"/>
                        </div>
                        <div>
                            <p>* Описание</p>
                            <input className="form_input"/>
                        </div>
                        <div>
                            <p>* ID попытки поиска</p>
                            <input className="form_input"/>
                        </div>
                        <button type={"submit"}>Отправить</button>
                    </form>
                    <div className="form_wrapper">
                        Список находок
                        <p>Попытка поиска</p>
                        <select name="select" size="3" multiple className="form_input">
                            <option selected value="s1">1</option>
                            <option value="s2">2</option>
                            <option value="s3">3</option>
                            <option value="s4">4</option>
                        </select>
                        <table>
                            <tr>
                                <td>&nbsp;</td>
                                <td>id находки</td>
                                <td>Название</td>
                                <td>Описание</td>
                            </tr>
                            <tr>
                                <td>Eating Habits</td>
                                <td>Eats everyone's leftovers</td>
                                <td>Nibbles at food</td>
                                <td>Hearty eater</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </details>
{/*КАТЯ! тут для тебя ↓↓↓↓↓↓↓↓↓↓↓*/}
{/*Поняла? Обведи ответ: нет, да*/}
{/*Да!!!*/}
            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Документ</summary>
                <div className={"forms_wrapper"}>
                                    <form className="form_wrapper">
                                        Добавить документ
                                        <div>
                                            <p>* Тип документа</p>
                                            <select name="select" size="3" multiple className="form_input">
                                                <option selected value="s1">Справка</option>
                                                <option value="s2">Акт</option>
                                                <option value="s3">Письмо</option>
                                                <option value="s4">Выписка</option>
                                                <option value="s5">Характеристика</option>
                                            </select>
                                        </div>
                                        <div>
                                        <p>Попытка поиска</p>
                                            <select name="select" size="3" multiple className="form_input">
                                                <option selected value="s1">1 (Описание)</option>
                                                <option value="s2">2 (Описание)</option>
                                                <option value="s3">3 (Описание)</option>
                                                <option value="s4">4 (Описание)</option>
                                            </select>
                                        </div>

                                        <div>
                                            <p>Дата </p>
                                            <input className="form_input"/>
                                        </div>
                                        <div>
                                            <p>Описание </p>
                                            <textarea className="form_input"/>
                                        </div>
                                        <div>
                                        <p>Добавить автора(ов)</p>
                                            <select name="select" size="3" multiple className="form_input">
                                                <option  selected value="s1" > Иванов</option>
                                                <option value="s2">Петров</option>
                                                <option value="s3">Сидоров</option>
                                                <option value="s4">Пирогов</option>
                                            </select>
                                        </div>
                                        <div>
                                            <p>Добавить персон, которые упоминались в документе</p>
                                                <select name="select" size="3" multiple className="form_input">
                                                    <option  selected value="s1" >Иванов</option>
                                                    <option value="s2">Петров</option>
                                                    <option value="s3">Сидоров</option>
                                                    <option value="s4">Пирогов</option>
                                                </select>
                                            </div>
                                            <div>
                                            <p>Добавить фото </p>
                                            <div className="forms_wrapper">
                                            <div>
                                                <p>Фото </p>
                                                <button type="button">Добавить</button>
                                            </div>
                                            <div>
                                            <p>Описание </p>
                                            <input className="form_input"/>
                                            </div>

                                        </div>
                                            </div>
                                        <button type={"submit"}>Отправить</button>
                                    </form>
                                    <div className="form_wrapper">
                                        Список документов
                                        <p>Документ</p>
                                        <select name="select" size="3" multiple className="form_input">
                                            <option selected value="s1">1</option>
                                            <option value="s2">2</option>
                                            <option value="s3">3</option>
                                            <option value="s4">4</option>
                                        </select>
                                        <table>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>id документа</td>
                                                <td>id тип документа</td>
                                                <td>Дата</td>
                                                <td>Описание</td>
                                            </tr>
                                            <tr>
                                                <td>Eating Habits</td>
                                                <td>Eats everyone's leftovers</td>
                                                <td>Nibbles at food</td>
                                                <td>Hearty eater</td>
                                                <td>Hearty eater</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Показание</summary>
                                <div className={"forms_wrapper"}>
                                    <form className="form_wrapper">
                                        Добавить показание
                                        <div>
                                        <p>* Автор показания</p>
                                            <select name="select" size="3" multiple className="form_input">
                                                <option  selected value="s1" > Иванов</option>
                                                <option value="s2">Петров</option>
                                                <option value="s3">Сидоров</option>
                                                <option value="s4">Пирогов</option>
                                            </select>
                                        </div>
                                        <div>
                                            <p>Показание </p>
                                            <textarea className="form_input"/>
                                        </div>
                                        <div>
                                        <p>* Версия</p>
                                            <select name="select" size="3" multiple className="form_input">
                                                <option selected value="s1">1 (Описание)</option>
                                                <option value="s2">2 (Описание)</option>
                                                <option value="s3">3 (Описание)</option>
                                                <option value="s4">4 (Описание)</option>
                                            </select>
                                        </div>

                                        <div>
                                            <p>Дата </p>
                                            <input className="form_input"/>
                                        </div>
                                        <p>Документы, с которыми связаны показания</p>
                                        <select name="select" size="3" multiple className="form_input">
                                            <option selected value="s1">1</option>
                                            <option value="s2">2</option>
                                            <option value="s3">3</option>
                                            <option value="s4">4</option>
                                        </select>


                                        <button type={"submit"}>Отправить</button>
                                    </form>
                                    <div className="form_wrapper">
                                        Список показаний
                                        <p>Показание</p>
                                        <select name="select" size="3" multiple className="form_input">
                                            <option selected value="s1">1</option>
                                            <option value="s2">2</option>
                                            <option value="s3">3</option>
                                            <option value="s4">4</option>
                                        </select>
                                        <table>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>id показания</td>
                                                <td>id автора</td>
                                                <td>Показание</td>
                                                <td>Дата</td>
                                            </tr>
                                            <tr>
                                                <td>Eating Habits</td>
                                                <td>Eats everyone's leftovers</td>
                                                <td>Nibbles at food</td>
                                                <td>Hearty eater</td>
                                                <td>Hearty eater</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
            </details>

            <details className={"detail_wrapper"}>
                <summary className={"summary_wrapper"}>Исследование</summary>
                <div className={"forms_wrapper"}>
                                    <form className="form_wrapper">
                                        Добавить исследование
                                        <div>
                                        <p>Организация</p>
                                            <select name="select" size="3" multiple className="form_input">
                                                <option  selected value="s1" > 1 (Описание)</option>
                                                <option value="s2">2 (Описание)</option>
                                                <option value="s3">3 (Описание)</option>
                                                <option value="s4">4 (Описание)</option>
                                            </select>
                                        </div>
                                        <div>
                                        <p>* Попытка поиска</p>
                                            <select name="select" size="3" multiple className="form_input">
                                                <option selected value="s1">1 (Описание)</option>
                                                <option value="s2">2 (Описание)</option>
                                                <option value="s3">3 (Описание)</option>
                                                <option value="s4">4 (Описание)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <p>Описание </p>
                                            <textarea className="form_input"/>
                                        </div>
                                        <div>
                                        <p>* Тип исследования</p>
                                            <select name="select" size="3" multiple className="form_input">
                                                <option  selected value="s1" > 1 (Описание)</option>
                                                <option value="s2">2 (Описание)</option>
                                                <option value="s3">3 (Описание)</option>
                                                <option value="s4">4 (Описание)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <p>Локальное место </p>
                                            <textarea className="form_input"/>
                                        </div>
                                        <div>
                                            <p>Техника </p>
                                            <div className="forms_wrapper">
                                            <div>
                                                <p>Тип техники </p>
                                                <select name="select" size="3" multiple className="form_input">
                                                    <option  selected value="s1" > 1 (Описание)</option>
                                                    <option value="s2">2 (Описание)</option>
                                                    <option value="s3">3 (Описание)</option>
                                                    <option value="s4">4 (Описание)</option>
                                                </select>
                                            </div>
                                            <div>
                                            <p>Количество техники </p>
                                            <input className="form_input"/>
                                            </div>

                                        </div>
                                            </div>

                                        <button type={"submit"}>Отправить</button>
                                    </form>
                                    <div className="form_wrapper">
                                        Список исследований
                                        <p>Исследование</p>
                                        <select name="select" size="3" multiple className="form_input">
                                            <option selected value="s1">1</option>
                                            <option value="s2">2</option>
                                            <option value="s3">3</option>
                                            <option value="s4">4</option>
                                        </select>
                                        <table>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>id исследования</td>
                                                <td>id организации</td>
                                                <td>id попытки поиска</td>
                                                <td>Описание</td>
                                                <td>id тип исследоввния</td>
                                                <td>Локальное место</td>
                                            </tr>
                                            <tr>
                                                <td>Eating Habits</td>
                                                <td>Eats everyone's leftovers</td>
                                                <td>Nibbles at food</td>
                                                <td>Hearty eater</td>
                                                <td>Hearty eater</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
            </details>
        </div>
    );
};

export default AddForm;