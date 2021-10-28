import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // const [ images, setImage, ] = useState([])

    const {data: images, loading} = useFetchGifs(category);

    return (
    <div className="card-grid">
        <h3 className="animate__animated animate__fadein">{category}</h3>

        {loading && <p className="animate__animated animate__flash">Leyendo...</p>}

        <div>
            { 
                images.map( img => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                        />
                ))
            }
        </div>
        
    </div>
    )

}
