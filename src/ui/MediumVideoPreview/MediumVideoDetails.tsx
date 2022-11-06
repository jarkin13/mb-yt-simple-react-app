import { ReactElement } from 'react'

interface MediumVideoDetailsProps {
  numberofViews: string
  shortsTitle: string
}

const MediumVideoDetails = ({
  numberofViews,
  shortsTitle
}: MediumVideoDetailsProps): ReactElement => {
  return (
    <div className="shorts-details">
      <h1>{shortsTitle}</h1>
      <div className="views">{numberofViews} views</div>
    </div>
  )
}

export default MediumVideoDetails
