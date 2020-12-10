import React, { Fragment } from 'react'
import './CommentBody.css'
import CommentDetails from '../CommentDetails/CommentDetails'

function CommentBody({ senderName, senderDate, text }) {
  return (
    <Fragment>
      <CommentDetails
        senderName={senderName}
        senderDate={senderDate} />
      <div className="CommentBodyWrapper">
        <div className="CommentBody">
          {text}
        </div>
      </div>
    </Fragment>
  )
}

export default CommentBody