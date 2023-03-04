import React from 'react';

const Technique = () => {
    return (
        <div>

            <div className={"forms_wrapper"}>
                <form className="form_wrapper">
                    Добавить технику
                    <div>
                        <p>* Тип техники</p>
                        <input className="form_input"/>
                    </div>

                    <button type={"submit"}>Отправить</button>
                </form>
                <div className="form_wrapper">
                                    Найти технику
                                    <div>
                                        <p>* Тип техники</p>
                                        <input className="form_input"/>
                                    </div>
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
                            <td>id техники</td>
                            <td>Название</td>

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
        </div>
    );
};

export default Technique;