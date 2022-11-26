import { ReactElement } from 'react'
import './styles.css'
import SmallVideoDetails from '../SmallVideoPreview/SmallVideoDetails'

interface SmallVideoPreviewProps {
  smallVideoImage: string
  title: string
  author: string
  verified: boolean
  numberOfViews: string
  timePostedAgo: string
}

const SmallVideoPreview = ({
  smallVideoImage,
  title,
  author,
  verified,
  numberOfViews,
  timePostedAgo
}: SmallVideoPreviewProps): ReactElement => {
  return (
    <div className="small-video-preview">
      <img src={smallVideoImage} alt={title} />
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
