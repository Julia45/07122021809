import './App.css';
import React from 'react'
import { useState } from 'react'
import SendMessage from "./components/SendMessage/SendMessage"
import CommentBody from './components/CommentBody/CommentBody'
import CommentsHeader from "./components/CommentsHeader/CommentsHeader"
import ProfileHeader from './components/ProfileHeader/ProfileHeader'
import TableOfServices from './components/TableOfServices/TableOfServices'

function App() {
  const [comments, setComments] = useState([
    {
      sender: "Самуил",
      date: "13 октября 2011",
      text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
    },
    {
      sender: "Лилия Семёновна",
      date: "14 октября 2011",
      text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"
    },
    {
      sender: "Лилия Семёновна",
      date: "14 октября 2011",
      text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"
    }
  ])

  function sendMessage(value) {
    let updatedArrayOfComments = [...comments]
    const now = new Date()
    const day = now.getDate()
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const month = months[now.getMonth()];
    const year = now.getFullYear()
    const convertedDate = (`${day} ${month} ${year}`).toString()

    let newMessage = {
      sender: "Вася Петров",
      date: convertedDate,
      text: value
    }

    if (value) {
      updatedArrayOfComments.push(newMessage);
      setComments(updatedArrayOfComments)
    }
  }

  return (
    <div className="App">
      <div className="ProfileHeaderContainer">
        <ProfileHeader
          description="Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны"
          name="Вероника Ростова"
          title="Менеджер по продажам"
        />
      </div>
      <div className="ContainerServiceTable">
        <TableOfServices />
      </div>
      <div className="CommentsContainer">
        <CommentsHeader />
        {comments.map((comment, index) => {
          return (
            <CommentBody
              senderName={comment.sender}
              senderDate={comment.date}
              text={comment.text}
              key={index}
            />
          )
        })}
      </div>
      <SendMessage
        buttonName="Написать консультанту"
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default App;
