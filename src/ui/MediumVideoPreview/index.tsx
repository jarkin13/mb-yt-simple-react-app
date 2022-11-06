import { ReactElement } from 'react'
import MediumVideoDetails from './MediumVideoDetails'
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
  numberOfViews
}: MediumVideoPreviewProps): ReactElement => {
  return (
    <div className="shorts-preview">
      <div>
        <img src={shortsImage} alt={shortsTitle} />
      </div>
      <MediumVideoDetails
        shortsTitle={shortsTitle}
        numberOfViews={numberOfViews}
      />
    </div>
  )
}

export default MediumVideoPreview
