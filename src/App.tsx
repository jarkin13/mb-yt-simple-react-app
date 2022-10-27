import { ReactElement } from 'react'
import Header from './ui/Header'
import VideoPreview from './ui/VideoPreview'
import './App.css'

const App = (): ReactElement => (
  <div className="app">
    <Header />
    <div className="video-previews">
      <VideoPreview
        image="https://i.ytimg.com/vi/esFyZ-eOKQc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXrVUEmbyniOIJO11l2VtoZpNu9A"
        title="Travis Hunter's First College Football Game"
        author="Travis Hunter"
        verified={true}
        numberOfViews="303k"
        timePostedAgo="1 day"
        authorImage="https://yt3.ggpht.com/Gxul2Nz7A8OauCRq-NENnBQ400XnQmNEthwn9s2GtnMAg32kj7G0tjHgbY-wgvIPMrcep7-m=s68-c-k-c0x00ffffff-no-rj"
      />
      <VideoPreview
        image="https://i.ytimg.com/vi/C6Ni9rH6VmA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBunz8-hEWgyhxkvuigiLb8MYMT4A"
        title="The New iPad is Weird!"
        author="Marques Brownlee"
        verified={true}
        numberOfViews="2.7M"
        timePostedAgo="20 hours"
        authorImage="https://yt3.ggpht.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s68-c-k-c0x00ffffff-no-rj"
      />
    </div>
  </div>
)

export default App
