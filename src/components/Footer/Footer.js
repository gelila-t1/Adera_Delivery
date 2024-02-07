import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import playStore from '../../assets/playStore.png'
import appStore from '../../assets/appStore.png'
function Footer() {
  return (
    <div>
        <div className='footer'>
        <div className='footer-section'>
            <div>
        <img src={logo}/> 
        <div className='link-footer'>
            <a href='' className='decoration'><div className='footer-links'>Download Now</div></a>
            <a href='' className='decoration'><div className='footer-links'>Licence</div></a>
        </div>
        <div className='linkFooterTwo'>
            <div className='footer-links'>About</div>
            <div className='footer-links'>Features</div>
            <div className='footer-links'>Pricing</div>
            <div className='footer-links'>Careers</div>
            <div className='footer-links'>Help</div>
            <div className='footer-links'>Privacy Policy</div>
        </div>
            </div>
            <div>
             <p className='footer-links'>Get the App</p>
              <img src={appStore} /><br/>
             <img src={playStore} className="playstore"/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer