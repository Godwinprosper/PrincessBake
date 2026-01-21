import { useState } from "react"
import { NavLink } from "react-router"
import logo from '../assets/logo/logo.svg'
import menuIcon from '../assets/icons/menu.svg'

import './Header.css'

export function Header() {
  const [display, setDisplay] = useState(false)
  
  const displayMenu = ()=>{
    setDisplay(true)
  }
  const dontDisplayMenu = ()=>{
    setDisplay(false)
  }
  return (
    <header>
      <div className="header-Top">
        <div>
          <img src={logo} alt="cake" /> <span>Princess Bakes</span>
        </div>
        <div className="menuIcone" onClick={displayMenu}>
            <img src={menuIcon} alt="menuIcone" />
        </div>
      </div>

      <div className="header-bottom">
        <nav>
          <ul>
            
            <li><NavLink to="#" className='link'>Home</NavLink></li>
            <li><NavLink to="#">About</NavLink></li>
            <li><NavLink to="#">Shop</NavLink></li>
            <li><NavLink to="#">Pages</NavLink></li>
            <li><NavLink to="#">Blog</NavLink></li>
            <li><NavLink to="#">Contact</NavLink></li>
          </ul>
        </nav>
      </div>

      {/* side bar */}
      <div className={`side-bar ${display ? 'display-menu': ''}`}>
        <div className="logo-ctn">
          <img src={logo} alt="cake" /> <span>Princess Bakes</span>
        </div>
        <nav>
          <ul>
            <li><div className="close-sidebar" onClick={dontDisplayMenu}>X</div></li>
            <li><NavLink to="#" className='link'>Home</NavLink></li>
            <li><NavLink to="#">About</NavLink></li>
            <li><NavLink to="#">Shop</NavLink></li>
            <li><NavLink to="#">Pages</NavLink></li>
            <li><NavLink to="#">Blog</NavLink></li>
            <li><NavLink to="#">Contact</NavLink></li>
          </ul>
        </nav>
      </div>

    </header>

  )
}