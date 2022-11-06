import { ReactElement } from 'react'
import ShortsDetails from './ShortsDetails'
import MovieDetails from './MovieDetails'
import './styles.css'

interface MediumVideoPreviewProps {
  shortsImage: string
  shortsTitle: string
  numberOfViews?: string
  type: 'movie' | 'short'
  genre?: string
  year?: number
  movieRating?: 'G' | 'PG' | 'PG-13' | 'R' | 'NR'
  buy?: boolean
  rent?: boolean
}

const MediumVideoPreview = ({
  shortsImage,
  shortsTitle,
  numberOfViews,
  type,
  genre,
  year,
  movieRating,
  buy,
  rent
}: MediumVideoPreviewProps): ReactElement => {
  return type === 'short' ? (
    <div className="shorts-preview">
      <div>
        <img src={shortsImage} alt={shortsTitle} />
      </div>
      <ShortsDetails shortsTitle={shortsTitle} numberOfViews={numberOfViews} />
    </div>
  ) : (
    <div className="movie-preview">
      <div>
        <img src={shortsImage} alt={shortsTitle} />
      </div>
      <MovieDetails
        shortsTitle={shortsTitle}
        genre={genre}
        movieRating={movieRating}
        year={year}
        buy={buy}
        rent={rent}
      />
    </div>
  )
}

export default MediumVideoPreview
