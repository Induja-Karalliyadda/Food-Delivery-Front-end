import { assets } from '../../assets/assets'
import './AppDownloard.css'

const AppDownloard = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experiance Download <br />Tomato App</p>
    <div className='app-download-platfoems'>
    <img src={assets.play_store} alt="" />
    <img src={assets.app_store} alt="" />
    </div>
    </div>
  )
}

export default AppDownloard
