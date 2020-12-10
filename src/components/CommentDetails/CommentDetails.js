import React from 'react'
import './CommentDetails.css'

function CommentDetails(props) {
  return (
    <div className="CommentDetails">
      <p className="SenderName">{props.senderName}</p>
      <p className="SenderDate">{props.senderDate}</p>
    </div>
  )
}

export default CommentDetails