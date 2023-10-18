import React, { useEffect, useState } from 'react'

const Comments = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [movieComment, setMovieComment] = useState([])

  const addComment = () => {
    setMovieComment([...movieComment, { name, comment }])
    setName('')
    setComment('')
  }
  useEffect(() => {
    setMovieComment(window.localStorage.getItem('comment'))
    console.log(movieComment.length)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('comment', movieComment)
  }, [movieComment])
  return (
    <div className="comment-component">
      <div className="comment-form">
        <h1>Напишите комментарий:</h1>
        <div className="comment-input">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
          />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Ваш комментарий"
          />
          <button onClick={addComment}>Отправить</button>
        </div>
      </div>
      <hr />
      {!movieComment.length ? (
        <h2 className="no-comments">Комментариев пока нет</h2>
      ) : (
        <div className="comments">
          <h2>Комментарии:</h2>
          {movieComment.map((comment) => (
            <div className="comment" key={Math.random()}>
              <h2>{comment.name}</h2>
              <p>{comment.comment}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Comments
