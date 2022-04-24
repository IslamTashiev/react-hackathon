import React from "react";
import './ProfileSideBar.css'

const ProfileSideBar = ({ profileList }) => {

    const renderedProfileList = profileList.map(profileLis => {
        return <li key={profileLis.title}>{profileLis.title}</li>
    })

    return (
        <>
            <ul className="profileList">
                <li className='profileList__items'>
                    {renderedProfileList}
                </li>
            </ul>
        </>
    )
}

export default ProfileSideBar