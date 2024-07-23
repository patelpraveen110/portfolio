import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu-open.png'
import menu_close from '../../assets/menu-close.png'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0"
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px"
  }
  return (
    <div className="navbar">
        <img src={logo} alt="" className='logo-image'/>
        <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>My Skills</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
