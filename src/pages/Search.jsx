import React, {useEffect, useState} from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import './Search.css'
import Select from "react-select";
import toast from "react-hot-toast";
import {ENDPOINTS} from "../API/endpoints";

const Search = (props) => {
    const [images, setImages] = useState([{id_image: 1, description: "test"}])
    const [documents, setDocuments] = useState([])
    const [personList, setPersonList] = useState([])
    const [selectLoadingPers, setSelectLoadingPers] = useState(true)
    const [searchAttList, setSearchAttList] = useState([])
    const [typeDocList, setTypeDocList] = useState([])
    const [selectLoadingTypeDoc, setSelectLoadingTypeDoc] = useState(true)
    const [selectLoadingSearchAtt, setSelectLoadingSearchAtt] = useState(true)

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getTypeDoc")
            .then(res => res.json())
            .then((result) => {
                let array = []
                result.type_doc.map((item) => {
                    array.push({value: item.id, label: item.type})
                })
                setTypeDocList(array)
                setSelectLoadingTypeDoc(false)
            })
    }, [])


    useEffect(() => {
        fetch("http://127.0.0.1:5000/getSearchAtt")
            .then(res => res.json())
            .then((result) => {
                let array = []
                result.search_attempts.map((item) => {
                    array.push({value: item.id, label: item.description})
                })
                setSearchAttList(array)
                setSelectLoadingSearchAtt(false)
            })
    }, [])

    const searchDoc = (id_person) => {
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({id_person})
        }
        fetch(ENDPOINTS.DOCUMENT.FIND_DOCUMENT, request)
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
        fetch("http://127.0.0.1:5000/findImages", request)
            .then(response => {
                if (response.status === 200) {
                    toast.success("Фотографии найдены")
                } else {
                    toast.error("Фотографии не найдены")
                }
                return response.json()
            })
            .then(result => {
                setImages(result.images)
            })
    }

    useEffect(() => {
        fetch(ENDPOINTS.PERSON.GET)
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
                <span className={"title_form"}>Найти документы</span>
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
                                <th>ID</th>
                                <th>Тип документа</th>
                                <th>Попытка поиска</th>
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
                                        {typeDocList.map(nat => {
                                            if (nat.value === item.id_type_doc) {
                                                return (
                                                    <td>{nat.label}</td>
                                                )
                                            }
                                        })}
                                        {searchAttList.map(nat => {
                                            if (nat.value == item.id_search_attempts) {
                                                return (
                                                    <td>{nat.label}</td>
                                                )
                                            }
                                        })}
                                        <td>{item.date}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <button value={item.id} onClick={(event) => {
                                                loadImagesId(item.id)
                                                console.log(images)
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
                    {images.map((item) => (
                        <PhotoView key={item.id_image}
                                   src={ENDPOINTS.IMAGE.GET + item.id_image.toString()}>
                            <img src={ENDPOINTS.IMAGE.GET + item.id_image.toString()} alt={''}
                                 className='image_preview'/>
                        </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
        </div>
    );
};

export default Search;