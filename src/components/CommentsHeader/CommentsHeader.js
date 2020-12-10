import React from 'react'
import './CommentsHeader.css'

function CommentsHeader () {
  return (
    <div className="CommentsHeader">
    <div className="Comments">
      <p className="LastComments">Последние отзывы</p>
      <p className="AllComments">Все отзывы</p>
    </div>

    <div className="AllNumbers">
    <i className="fas fa-heart"></i>
      <p className="Numbers">131</p>
      <i className="fas fa-comment-alt"></i>
      <p className="Numbers">14</p>
    </div>
    </div>
  )  
}

export default CommentsHeader