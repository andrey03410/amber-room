import React from 'react';

const Versions = () => {
    return (
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
                                Найти версию
                                <div>
                                    <p>* Место</p>
                                    <input className="form_input"/>
                                </div>
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
    );
};

export default Versions;