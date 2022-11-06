import { ReactElement } from 'react'

interface ShortsDetailsProps {
  numberofViews: string
  shortsTitle: string
}

const ShortsDetails = ({
  numberofViews,
  shortsTitle
}: ShortsDetailsProps): ReactElement => {
  return (
    <div className="shorts-details">
      <h1>{shortsTitle}</h1>
      <div className="views">{numberofViews} views</div>
    </div>
  )
}

export default ShortsDetails
