import { ReactElement } from 'react'
import VideoDetails from './VideoDetails'
import './styles.css'

interface VideoPreviewProps {
  image: string
  title: string
  author: string
  authorImage: string
  verified: boolean
  numberOfViews: string
  timePostedAgo: string
}

const VideoPreview = ({
  image,
  title,
  author,
  authorImage,
  verified,
  numberOfViews,
  timePostedAgo
}: VideoPreviewProps): ReactElement => {
  return (
    <div className="video-preview">
      <img src={image} alt={title} />
      <div className="video-content">
        <div className="author-image">
          <img src={authorImage} alt={author} />
        </div>
        <VideoDetails
          title={title}
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
