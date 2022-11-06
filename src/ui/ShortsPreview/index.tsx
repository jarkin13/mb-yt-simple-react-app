import { ReactElement } from 'react'
import ShortsDetails from './ShortsDetails'
import './styles.css'

interface ShortsPreviewProps {
  shortsimage: string
  shortsTitle: string
  numberofViews: string
}

const ShortsPreview = ({
  shortsimage,
  shortsTitle,
  numberofViews
}: ShortsPreviewProps): ReactElement => {
  return (
    <div className="shorts-preview">
      <div>
        <img src={shortsimage} alt={shortsTitle} />
      </div>
      <ShortsDetails shortsTitle={shortsTitle} numberofViews={numberofViews} />
    </div>
  )
}

export default ShortsPreview
