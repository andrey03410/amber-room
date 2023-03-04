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