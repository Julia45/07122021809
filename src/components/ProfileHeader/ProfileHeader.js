import React from 'react'
import './ProfileHeader.css'

function ProfileHeader({name, title, description }) {
  return (
    <div className="ProfileHeader">
      <div className="Image"/>
      <div className="AvatarInfoContainer">
        <div className="PersonName">{name}</div>
        <div className="PersonTitle">{title}</div>
        <div className="PersonDescription">{description}</div>
      </div>
    </div>
  )
}

export default ProfileHeader