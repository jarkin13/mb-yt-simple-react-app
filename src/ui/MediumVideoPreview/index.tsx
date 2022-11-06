import { ReactElement } from 'react'
import MediumVideoDetails from './MediumVideoDetails'
import './styles.css'

interface MediumVideoPreviewProps {
  shortsimage: string
  shortsTitle: string
  numberofViews: string
}

const MediumVideoPreview = ({
  shortsimage,
  shortsTitle,
  numberofViews
}: MediumVideoPreviewProps): ReactElement => {
  return (
    <div className="shorts-preview">
      <div>
        <img src={shortsimage} alt={shortsTitle} />
      </div>
      <MediumVideoDetails
        shortsTitle={shortsTitle}
        numberofViews={numberofViews}
      />
    </div>
  )
}

export default MediumVideoPreview
