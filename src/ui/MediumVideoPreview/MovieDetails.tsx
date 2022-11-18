import { ReactElement } from 'react'

interface MovieDetailsProps {
  movieTitle: string
  genre?: string
  year?: number
  movieRating?: 'G' | 'PG' | 'PG-13' | 'R' | 'NR'
  buy?: boolean
  rent?: boolean
}

const MovieDetails = ({
  movieTitle,
  genre,
  year,
  movieRating,
  buy,
  rent
}: MovieDetailsProps): ReactElement => {
  return (
    <div className="movie-details">
      <h1>{movieTitle}</h1>
      <div>
        {genre} • {year}
      </div>
      <div>
        <span className="purchase-options">
          {rent === true && buy === true
            ? 'Buy or Rent'
            : rent === true
            ? 'Rent'
            : 'Buy'}
        </span>
        <span className="movie-rating">{movieRating}</span>
      </div>
    </div>
  )
}

export default MovieDetails
