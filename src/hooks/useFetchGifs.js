import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (index) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(index)
        .then( img => {
            setState({ 
                data: img,
                loading: false });
        })
    }, [index])


    return state;
}