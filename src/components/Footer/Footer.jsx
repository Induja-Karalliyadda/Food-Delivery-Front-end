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
        </div>
        <div className="footer-content-center">
            
        </div>
        <div className="footer-content-right">

        </div>
        
      </div>
    </div>
  )
}

export default Footer
