import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Header from '@/components/Header'
import Comments from '@/components/Comments'
import { useRouter } from 'next/router'
import Rating from '@/components/Rating/Rating'

const Movie = ({ data }) => {
  const route = useRouter()
  const movie = data.find((movie) => movie.id == route.query.id)

  if (!movie) return <h1>Loading...</h1>
  return (
    <Header title={movie.title}>
      <div className="movie">
        <div className="movie-flex">
          <img src={movie.image} alt={movie.id} />
          <div className="creators">
            <h2>
              {movie.title}, {movie.year}
            </h2>
            <h3>Режиссер: {movie.director}</h3>
            <h3>В главных ролях: {movie.actors}</h3>
            <div>{movie.genre}</div>
            <Rating />
          </div>
        </div>
        <div className="description">{movie.description}</div>
      </div>

      <Comments />
    </Header>
  )
}

export default Movie

export async function getServerSideProps() {
  const options = {
    method: 'GET',
    url: 'http://localhost:3000/api/movies-api',
  }
  const response = await axios.request(options)
  const data = await response.data
  return { props: { data } }
}
