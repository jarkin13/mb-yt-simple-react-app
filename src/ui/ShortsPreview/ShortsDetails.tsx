import { ReactElement } from 'react'

interface ShortsDetailsProps {
  viewsCurrent: string
  shortsTitle: string
}

const ShortsDetails = ({
  viewsCurrent,
  shortsTitle
}: ShortsDetailsProps): ReactElement => {
  return (
    <div className="shorts-Details">
      <h1>{shortsTitle}</h1>
      <div className="views">{viewsCurrent} views</div>
    </div>
  )
}

export default ShortsDetails
