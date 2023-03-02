import React, {useEffect, useState} from 'react';

const Places = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch("https://run.mocky.io/v3/6de17b9c-0751-418c-b695-b30fc486b6fb")
            .then(res => res.json())
            .then((result) => {
                setPlaces(result.places)
            })
    }, [])
    return (
        <div className={"forms_wrapper"}>
            <form className="form_wrapper">
                Добавить место
                <div>
                    <p>* Название</p>
                    <input className="form_input"/>
                </div>
                <div>
                    <p>Описание</p>
                    <input className="form_input"/>
                </div>
                <button type={"submit"}>Отправить</button>
            </form>
            <div className="form_wrapper">
                Список мест
                <table className={"table"}>
                    <tr>
                        <td>id места</td>
                        <td>Название</td>
                        <td>Описание</td>
                    </tr>
                    {places.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default Places;