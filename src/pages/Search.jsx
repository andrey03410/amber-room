import React, {useState} from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import './search.css'

const Search = () => {
    const [id_images, setId_images] = useState([1, 2, 3])
    return (
        <div>
            <h3>Просмотреть документы</h3>
            <PhotoProvider>
                <div>
                    {id_images.map((item, index) => (
                        <PhotoView key={index} src={'http://localhost:5000/getImage' + item.toString()}>
                            <img src={'http://localhost:5000/getImage' + item.toString()} alt={'document'}
                                 className='image_preview'/>
                        </PhotoView>
                    ))}
                    {id_images.map((item, index) => (
                        <PhotoView key={index} src={'http://localhost:5000/getImage' + item.toString()}>
                            <img src={'http://localhost:5000/getImage' + item.toString()} alt={'document'}
                                 className='image_preview'/>
                        </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
        </div>
    );
};

export default Search;