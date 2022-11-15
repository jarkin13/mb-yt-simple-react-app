import { ReactElement } from 'react'

interface VideoDetailsProps {
  title: string
  author: string
  verified: boolean
  numberOfViews: string
  timePostedAgo: string
}

const VideoDetails = ({
  title,
  author,
  verified,
  numberOfViews,
  timePostedAgo
}: VideoDetailsProps): ReactElement => {
  return (
    <div className="video-details">
      <h1>{title}</h1>
      <h2>
        {author} {verified && <span>✓</span>}
      </h2>
      <div className="posted-details">
        {numberOfViews} views - {timePostedAgo} ago
      </div>
    </div>
  )
}

export default VideoDetails
