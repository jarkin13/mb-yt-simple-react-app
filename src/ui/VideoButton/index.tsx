import { ReactElement } from 'react'
import './styles.css'

interface VideoButtonProps {
  videoButtonIcon: string
  videoButtonText: string
}

const VideoButton = ({
  videoButtonIcon,
  videoButtonText
}: VideoButtonProps): ReactElement => {
  return (
    <div className="video-buttons-details">
      <button>
        <img src={videoButtonIcon} alt="" />
        {videoButtonText}
      </button>
    </div>
  )
}

export default VideoButton
