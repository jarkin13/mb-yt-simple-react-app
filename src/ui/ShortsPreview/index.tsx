import { ReactElement } from 'react'
import ShortsDetails from './ShortsDetails'
import './styles.css'

interface ShortsPreviewProps {
  shortsimage: string
  shortsTitle: string
  viewsCurrent: string
}

const ShortsPreview = ({
  shortsimage,
  shortsTitle,
  viewsCurrent
}: ShortsPreviewProps): ReactElement => {
  return (
    <div className="shorts-Preview">
      <div>
        <img src={shortsimage} alt={shortsTitle} />
      </div>
      <ShortsDetails shortsTitle={shortsTitle} viewsCurrent={viewsCurrent} />
    </div>
  )
}

export default ShortsPreview
