import React from 'react'
import Stars from './Stars'

const Rating = () => {
  const [rating, setRating] = React.useState(0)
  return (
    <div className="rating">
      <h3>Ваша оценка:</h3>
      <Stars
        count={5}
        value={rating}
        edit={true}
        onChange={(value) => setRating(value)}
      />
      <p>
        <b>Оценка: </b>
        {rating} звезды
      </p>
    </div>
  )
}

export default Rating
