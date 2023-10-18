import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { Spinner } from 'react-bootstrap'

const MoviesList = ({ data }) => {
  const [movies, setMovies] = useState()
  const genres = ['драма', 'комедия', 'фантастика', 'фэнтези', 'триллер']
  useEffect(() => {
    setMovies(data)
  }, [])
  const resetSort = () => {
    setMovies(data)
  }
  const sort = async (item) => {
    setMovies(data)
    setMovies(movies.filter((movie) => movie.genre == item))
  }
  if (!movies) return <Spinner />
  return (
    <div className="movies-list">
      <div className="sort">
        {genres.map((item) => (
          <button onClick={() => sort(item)}>{item}</button>
        ))}
        <button onClick={() => resetSort()}>Отменить сортировку</button>
      </div>
      {movies.map((movie) => (
        <Link className="movie-li" href={`movie/${movie.id}`} key={movie.id}>
          <img className="image" src={movie.image} alt={movie.id} />
          <div className="li-description">
            <h2 className="title">
              {movie.title}, {movie.year}
            </h2>
            <h3 className="director">{movie.director}</h3>
            <h3 className="actors">{movie.actors}</h3>
            <p className="genre">{movie.genre}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MoviesList
