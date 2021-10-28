import React from 'react'

export const GifGridItem = ({ title, url, alt }) => {
    return (
        <div className="card">
            <img src={url} alt={alt} />
            <p>{title}</p>
        </div>
    )
}