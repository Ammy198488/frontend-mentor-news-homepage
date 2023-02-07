import React, {useState} from 'react'
import logo from '../images/logo.svg'
import { Icon } from '@iconify/react';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className='py-4'>
      <div className="nav_logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className={isOpen? 'nav_link_mobile' : 'nav_link'} onClick={() => setMobile(false)}>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
     {/* navbar toggle */}
      <div className='toggle' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
            <Icon icon="material-symbols:close-rounded" width="30" />
          ) : (
            <Icon icon="icon-park:hamburger-button" width="30"/>
        )}
      </div>
    </nav>
  )
}

export default Nav
