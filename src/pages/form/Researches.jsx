import React from 'react';

const Researches = () => {
    return (
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
                                Найти документ
                                <div>
                                    <p>* Тип исследования</p>
                                    <input className="form_input"/>
                                </div>
                Список исследований
                <p>Исследование</p>

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
    );
};

export default Researches;