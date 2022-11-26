import { ReactElement } from 'react'

interface SmallVideoDetailsProps {
  smallVideoTitle: string
  author: string
  verified: boolean
  numberOfViews: string
  timePostedAgo: string
}

const SmallVideoDetails = ({
  smallVideoTitle,
  author,
  verified,
  numberOfViews,
  timePostedAgo
}: SmallVideoDetailsProps): ReactElement => {
  return (
    <div className="small-video-details">
      <h1>{smallVideoTitle}</h1>
      <h2>
        {author} {verified && <span>✓</span>}
      </h2>
      <div className="posted-details">
        {numberOfViews} views - {timePostedAgo} ago
      </div>
    </div>
  )
}

export default SmallVideoDetails
