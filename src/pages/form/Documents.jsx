import React from 'react';

const Documents = () => {
    return (
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
                    Найти документ
                    <div>
                        <p>* ФИО персоны, которая упоминается в документе</p>
                        <input className="form_input"/>
                    </div>
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
    );
};

export default Documents;