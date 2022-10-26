import { useState, MouseEvent } from 'react'
import { ReactComponent as MenuIcon } from './icons/menu.svg'
import { ReactComponent as SearchIcon } from './icons/search.svg'
import { ReactComponent as VideoCameraIcon } from './icons/video-camera.svg'
import { ReactComponent as BellIcon } from './icons/bell.svg'
import { ReactComponent as MicIcon } from './icons/mic.svg'
import { ReactComponent as LogoIcon } from './icons/logo.svg'
import userIcon from './icons/user-icon.jpg'
import './index.css'

const Header = () => {
  const [menuShow, setMenuShow] = useState(false)
  const [notificationsShow, setNotificationsShow] = useState(false)
  const [userMenuShow, setUserMenuShow] = useState(false)

  const onMenuClick = (e: MouseEvent) => {
    setMenuShow(!menuShow)
  }

  const onNotificationsClick = () => {
    setNotificationsShow(!notificationsShow)
  }

  const onUserMenuClick = () => {
    setUserMenuShow(!userMenuShow)
  }

  return (
    <header>
      <div className="column column-start">
        <div className="menu">
          <div className="icon" onClick={(e) => onMenuClick(e)}>
            <MenuIcon />
          </div>
        </div>
        {menuShow && <div>Show sidebar here</div>}
        <div className="logo">
          <LogoIcon />
        </div>
      </div>
      <div className="column column-center">
        <div className="search-bar">
          <input
            placeholder="search"
            type="search"
            name="search"
            id="search"
            autoComplete="off"
          />
          <div className="search">
            <div className="icon search-icon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="mic">
          <div className="icon mic-icon">
            <MicIcon />
          </div>
        </div>
      </div>
      <div className="column column-end">
        <div className="create-video">
          <div className="icon">
            <VideoCameraIcon />
          </div>
        </div>
        <div className="notifications" onClick={onNotificationsClick}>
          <div className="icon">
            <BellIcon />
            {notificationsShow && (
              <div className="notifications-nav">
                This is the Notification Bell
              </div>
            )}
          </div>
        </div>
        <div className="user-menu" onClick={onUserMenuClick}>
          <img src={userIcon} alt="user icon" />
          {userMenuShow && (
            <div className="user-menu-nav">this is the user menu.</div>
          )}
        </div>
      </div>
    </header>
  )
}
export default Header
