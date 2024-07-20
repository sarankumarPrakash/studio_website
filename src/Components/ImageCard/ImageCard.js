import React from "react";

import './ImageCard.css'

const ImageCard = ({ data }) => {
    const { title, subTitle, description, image, type } = data
    return (
        <div className={`image-card ${type}`}>
            {image && <img className="image-card-image" src={image} alt={title}/>}
            <div className="image-card-content">
                {title && <div className="image-card-title">{title}</div>}
                {subTitle && <div className="image-card-sub-title">{subTitle}</div>}
                {description && <p className="image-card-description">{description}</p>}
            </div>
        </div>
    )
}

export { ImageCard }