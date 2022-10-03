import React from 'react';
import "./UserIcons.scss";

const iconPaths = ['grid', 'play', 'user', 'video'].map(name => `icons/${name}.png`);

const UserIcons = () => {
    const getIconElements = () => {
        const iconElements = iconPaths.map((path, index) => {
            return <img className='icon' src={path} alt='grid' key={index}></img>
        })
        return iconElements;
    }

    return (
        <div className='user-icons'>
            {getIconElements()}
        </div>
    )
}

export default UserIcons;