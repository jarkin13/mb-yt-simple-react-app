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
      <img src={videoButtonIcon} alt="" />
      <h1>{videoButtonText}</h1>
    </div>
  )
}

export default VideoButton
