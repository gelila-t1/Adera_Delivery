import React from 'react'
import homeImage from '../../assets/home-image.png'
import background from '../../assets/Background.png'
import Icon from '../../assets/Icon.png'
import './home.css'
import Nav from '../Nav/Nav'
function Home() {
  return (
    <div className='home-body'>
      <Nav/>
        <div
        className="Home-section"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          display: "flex",
        }}
      >
        <div className='section-one'>
        <div className='home-title'>
        The easiest way to<br/> Deliver 
        </div>
        <div className='home-text'>
        Lorem ipsum dolor sit amet consectetur. Ut adipiscing orci ac nisl.
         Varius tristique pellentesque felis pellentesque sed at. Urna et ullamcorper eget in.
        </div>
        <div className='home-buttons'>
        <a href='#' className='decoration'><div className='home-button'><p className='btn-text'>Get started</p></div></a>
        <a href='#' className='decoration'><div className=''><p className='btn-text'><img src={Icon} className="icon"/>Watch Video</p></div></a>
        </div>
        </div>

        <div className='section-two'>
            <img src={homeImage} className="home-image"/>
        </div>
      </div>
        
    </div>
  )
}

export default Home