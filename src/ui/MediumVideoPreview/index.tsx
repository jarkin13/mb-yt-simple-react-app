import { ReactElement } from 'react'
import ShortsDetails from './ShortsDetails'
import MovieDetails from './MovieDetails'
import './styles.css'

interface MediumVideoPreviewProps {
  videoImage: string
  videoTitle: string
  numberOfViews?: string
  type: 'movie' | 'short'
  genre?: string
  year?: number
  movieRating?: 'G' | 'PG' | 'PG-13' | 'R' | 'NR'
  buy?: boolean
  rent?: boolean
}

const MediumVideoPreview = ({
  videoImage,
  videoTitle,
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
        <img src={videoImage} alt={videoTitle} />
      </div>
      <ShortsDetails shortsTitle={videoTitle} numberOfViews={numberOfViews} />
    </div>
  ) : (
    <div className="movie-preview">
      <div className="movie-image">
        <img src={videoImage} alt={videoTitle} />
      </div>
      <MovieDetails
        movieTitle={videoTitle}
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
