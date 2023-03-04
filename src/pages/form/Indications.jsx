import React from 'react';

const Indications = () => {
    return (
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
                        Найти показание
                        <div>
                            <p>* ФИО автора</p>
                            <input className="form_input"/>
                        </div>
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
    );
};

export default Indications;