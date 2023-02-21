import React from 'react';
import './AddForm.css'

const AddForm = () => {
    return (
        <div>
            <details>
                <summary>Персона</summary>
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
        </div>
    );
};

export default AddForm;