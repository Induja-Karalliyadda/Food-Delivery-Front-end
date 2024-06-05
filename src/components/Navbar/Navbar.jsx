import { assets } from '../../assets/assets'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo'/>
        <ul className="navbar-menu">
            <li>home</li>
            <li>menu</li>
            <li>mobile-app</li>
            <li>contact us</li>
        </ul>
        <div className="navbar-right"></div>
        </div>
  )
}

export default Navbar