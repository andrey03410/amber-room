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
                        Найти находку
                        <div>
                            <p>* Введите номер попытки поиска</p>
                            <input className="form_input"/>
                        </div>
                    Список находок
                    <p>Попытка поиска</p>

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