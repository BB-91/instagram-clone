import React from 'react';
import UserIcons from '../../components/UserIcons/UserIcons';
import UserStats from '../../components/UserStats/UserStats';
import ImageGallery from '../ImageGallery/ImageGallery';
import "./UserFeed.jsx";

const UserFeed = (props) => {
    const { user, userName } = props;



    return (
        <div className='user-feed'>
            <UserStats user={user} />
            <UserIcons />
            {/* <ImageGallery imagePaths={imagePaths} /> */}
            <ImageGallery userName={userName} />
        </div>
    )
}

export default UserFeed;