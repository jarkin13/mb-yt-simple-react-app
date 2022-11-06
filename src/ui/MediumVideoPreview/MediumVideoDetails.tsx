import { ReactElement } from 'react'

interface MediumVideoDetailsProps {
  numberOfViews?: string
  shortsTitle: string
}

const MediumVideoDetails = ({
  numberOfViews,
  shortsTitle
}: MediumVideoDetailsProps): ReactElement => {
  return (
    <div className="shorts-details">
      <h1>{shortsTitle}</h1>
      <div className="views">{numberOfViews} views</div>
    </div>
  )
}

export default MediumVideoDetails
