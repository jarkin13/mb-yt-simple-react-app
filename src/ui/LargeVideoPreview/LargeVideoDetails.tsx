import { ReactElement } from 'react'

interface LargeVideoDetailsProps {
  largeVideoTitle: string
  author: string
  verified: boolean
  numberOfViews: string
  timePostedAgo: string
}

const LargeVideoDetails = ({
  largeVideoTitle,
  author,
  verified,
  numberOfViews,
  timePostedAgo
}: LargeVideoDetailsProps): ReactElement => {
  return (
    <div className="video-details">
      <h1>{largeVideoTitle}</h1>
      <h2>
        {author} {verified && <span>✓</span>}
      </h2>
      <div className="posted-details">
        {numberOfViews} views - {timePostedAgo} ago
      </div>
    </div>
  )
}

export default LargeVideoDetails
