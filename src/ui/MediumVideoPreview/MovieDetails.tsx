import { ReactElement, useState } from 'react'

interface MovieDetailsProps {
  shortsTitle: string
  genre?: string
  year?: number
  movieRating?: 'G' | 'PG' | 'PG-13' | 'R' | 'NR'
  buy?: boolean
  rent?: boolean
}

const MovieDetails = ({
  shortsTitle,
  genre,
  year,
  movieRating,
  buy,
  rent
}: MovieDetailsProps): ReactElement => {
  return (
    <div className="movie-details">
      <h1>{shortsTitle}</h1>
      <div>
        {genre} • {year}
      </div>
      <div>
        <span className="purchase-options">
          {rent === true ? 'Buy or Rent' : 'buy'}
        </span>
        <span className="movie-rating">{movieRating}</span>
      </div>
    </div>
  )
}

export default MovieDetails
