import React from 'react';
import "./ImageGallery.scss";
// import


const ImageGallery = (props) => {
    const { imagePaths } = props;

    const imageElements = imagePaths.map((imagePath, index) => {
        // const imagePath = `/images/${imageName}`;
        // console.log("imagePath:", imagePath);

        return (
            <div className='img-div' style={{ backgroundImage: `url(${imagePath})`}} key={index}></div>
        )
    })

    return (
        <div className='image-gallery'>
            {imageElements}
        </div>
    )
}

export default ImageGallery;