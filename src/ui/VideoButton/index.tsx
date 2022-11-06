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
    <div>
      {videoButtonIcon}
      {videoButtonText}
    </div>
  )
}

export default VideoButton
