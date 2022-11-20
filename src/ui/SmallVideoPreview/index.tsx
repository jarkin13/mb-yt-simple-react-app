import { ReactElement } from 'react'
import './styles.css'
import SmallVideoDetails from '../SmallVideoPreview/SmallVideoDetails'

interface VideoPreviewProps {
  smallvideoimage: string
  title: string
  author: string
  verified: boolean
  numberOfViews: string
  timePostedAgo: string
}

const SmallVideoPreview = ({
  smallvideoimage,
  title,
  author,
  verified,
  numberOfViews,
  timePostedAgo
}: VideoPreviewProps): ReactElement => {
  return (
    <div className="small-video-preview">
      <img src={smallvideoimage} alt={title} />
      <div className="small-video-content">
        <SmallVideoDetails
          smallVideoTitle={title}
          author={author}
          verified={verified}
          numberOfViews={numberOfViews}
          timePostedAgo={timePostedAgo}
        />
      </div>
    </div>
  )
}

export default SmallVideoPreview
