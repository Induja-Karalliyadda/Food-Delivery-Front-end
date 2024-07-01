import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas error, expedita nisi assumenda tenetur quaerat ducimus aliquid vitae earum dicta ullam labore. Consequuntur reiciendis distinctio repudiandae voluptas enim aperiam recusandae.</p>
            <div className="footer-social-icons"></div>
        <div className="footer-social-icons">
          <img src={assets.facebook_icon} alt={assets.twitter_icon} /><img src={assets.linkedin_icon} alt=""  />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <li>+94(0) 77 81 21 808</li>
              <li>info@tomato.com</li>
        </div>
        
      </div>
      <hr />
     
      <div className="footer-copyright"> Copyright 2024 © Tomato.com - All Right Reserved </div>
    </div>
  )
}

export default Footer
