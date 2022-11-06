import { ReactElement } from 'react'

interface ShortsDetailsProps {
  numberOfViews?: string
  shortsTitle: string
}

const ShortsDetails = ({
  numberOfViews,
  shortsTitle
}: ShortsDetailsProps): ReactElement => {
  return (
    <div className="shorts-details">
      <h1>{shortsTitle}</h1>
      <div className="views">{numberOfViews} views</div>
    </div>
  )
}

export default ShortsDetails
