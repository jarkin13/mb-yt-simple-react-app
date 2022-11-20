import { ReactElement } from 'react'
import LargeVideoDetails from './LargeVideoDetails'
import './styles.css'

interface VideoPreviewProps {
  largevideoimage: string
  title: string
  author: string
  authorImage: string
  verified: boolean
  numberOfViews: string
  timePostedAgo: string
}

const VideoPreview = ({
  largevideoimage,
  title,
  authorImage,
  author,
  verified,
  numberOfViews,
  timePostedAgo
}: VideoPreviewProps): ReactElement => {
  return (
    <div className="large-video-preview">
      <img src={largevideoimage} alt={title} />
      <div className="large-video-content">
        <div className="author-image">
          <img src={authorImage} alt={author} />
        </div>
        <LargeVideoDetails
          largeVideoTitle={title}
          author={author}
          verified={verified}
          numberOfViews={numberOfViews}
          timePostedAgo={timePostedAgo}
        />
      </div>
    </div>
  )
}

export default VideoPreview
