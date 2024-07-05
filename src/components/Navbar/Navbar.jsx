import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu,setMenu] =useState("menu"); 
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo'/>
        <ul className="navbar-menu">
            <Link onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
            <a href='' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>
        <div className="navbar-right"></div>
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
        </div>
  )
}

export default Navbar