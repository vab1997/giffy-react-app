import React, { useState, useEffect } from 'react';
import getGifs from '../services/getGifs';
import Gif from './Gif';

const ListOfGifs = ({params}) => {
    const {keyword} = params;
    const [ gifs, setGifs ] = useState([]);

    useEffect(() => {
        getGifs({keyword}).then(gifs => setGifs(gifs))
    }, [keyword]);

    return ( 
        gifs.map(({id, title, url}) => (
            <Gif 
                key={id}
                id={id}
                title={title}
                url={url}
            />
        ))
        );
}
 
export default ListOfGifs;