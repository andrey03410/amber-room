import React, {useEffect, useState} from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import './Search.css'
import Select from "react-select";
import toast from "react-hot-toast";

const Search = () => {
    const [id_images, setId_images] = useState([1, 2, 3])
    const [documents, setDocuments] = useState([])
    const [personList, setPersonList] = useState([])
    const [selectLoadingPers, setSelectLoadingPers] = useState(true)

    const searchDoc = (id_person) => {
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({id_person})
        }
        fetch("http://127.0.0.1:5000/findDoc", request)
            .then(response => {
                if (response.status === 200) {
                    toast.success("Документы найдены")
                } else {
                    toast.error("Документы не найдены")
                }
                return response.json()
            })
            .then(result => {
                setDocuments(result.documents)
            })
    }

    const loadImagesId = (id_document) => {
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({id_document})
        }
        fetch("http://127.0.0.1:5000/findImagesId", request)
            .then(response => {
                if (response.status === 200) {
                    toast.success("Фотографии найдены")
                } else {
                    toast.error("Фотографии не найдены")
                }
                return response.json()
            })
            .then(result => {
                setId_images(result.id_images)
            })
    }

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getPersons")
            .then(res => res.json())
            .then((result) => {
                let array = []
                result.persons.map((item) => {
                    array.push({value: item.id, label: item.name})
                })
                setPersonList(array)
                setSelectLoadingPers(false)
            })
    }, [])
    return (
        <div>
            <div className="form_wrapper_search">
                <span className={"title_form"}>Найти документ</span>
                <div>
                    <p className={"title_field"}>* ФИО персоны, которая упоминается в документе</p>
                    <Select options={personList} isLoading={selectLoadingPers} placeholder={"Выберите персону"}
                            onChange={(newValue) => {
                                searchDoc(newValue.value)
                            }}/>
                </div>
                <p className={"title_field"}>Результаты поиска</p>
                <div className="scroll-table">
                    <table>
                        <thead>
                        <tr>
                            <th>id места</th>
                            <th>id тип документа</th>
                            <th>id попытки поиска</th>
                            <th>Дата</th>
                            <th>Описание</th>
                            <th>Загрузить</th>
                        </tr>
                        </thead>
                    </table>
                    <div className="scroll-table-body">
                        <table>
                            <tbody>
                            {documents.map(item => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.id_type_doc}</td>
                                        <td>{item.id_search_attempts}</td>
                                        <td>{item.date}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <button value={item.id} onClick={(event) => {
                                                loadImagesId(item.id)
                                                console.log(id_images)
                                            }}>Загрузить
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <h3>Просмотреть документы</h3>
            <PhotoProvider>
                <div>
                    {id_images.map((item) => (
                        <PhotoView key={item} src={'http://localhost:5000/getImage' + item.toString()}>
                            <img src={'http://localhost:5000/getImage' + item.toString()} alt={''}
                                 className='image_preview'/>
                        </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
        </div>
    );
};

export default Search;