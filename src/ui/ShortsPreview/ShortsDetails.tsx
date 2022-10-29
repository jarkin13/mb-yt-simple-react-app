interface ShortsDetailsProps {
  viewsCurrent: string
  ShortsTitle: string
}

const ShortsDetails = ({ viewsCurrent, ShortsTitle }) => {
  ;<div className="shortsDelails">
    <h1>{ShortsTitle}</h1>
    <div>{viewsCurrent} views</div>
  </div>
}

export default ShortsDetails
