import React from 'react';

const Finds = () => {
    return (
        <div>

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
        </div>
    );
};

export default Finds;