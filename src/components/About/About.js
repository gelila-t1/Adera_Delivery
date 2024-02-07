import React from 'react'
import './about.css'
import iconOne from '../../assets/iconOne.png'
// import iconTwo from '../../assets/iconTwo.png'
import iconThree from '../../assets/iconThree.png'
import iconFour from '../../assets/iconFour.png'
import iconFive from '../../assets/iconFive.png'
import phoneOne from '../../assets/phoneOne.png'
import phoneTwo from '../../assets/phoneTwo.png'
import playStore from '../../assets/playStore.png'
import appStore from '../../assets/appStore.png'
function About() {
  return (
    <div>   
        <div className='counter-section'>
      <div className='counter'>
        <p className='counter-title'>Lorem ipsum dolor sit<br/> amet consectetur. Lectus.</p>
        <p className='counter-text'>With our super powers we have reached this</p>
    </div>
    <div className='about-numbers'>
        <div className='grid'>
        <div>
    <img src={iconOne} className="counter-icon"/>
    </div>
    <div className='number'>10,000+ <br/><span className='counter-text'>Downloads per day</span></div>
        </div>
        <div className='grid'>
        <div>
    <img src={iconThree} className="counter-icon"/>
    </div>
    <div className='number'>500+ <br/><span className='counter-text'>Users</span></div>
        </div>
    </div>
    <div className='about-numbersTwo'>
    <div className='grid'>
        <div>
    <img src={iconFive} className="counter-icon"/>
    </div>
    <div className='number'> 2 Million<br/><span className='counter-text'>Clients</span></div>
        </div>
        <div className='grid'>
        <div>
    <img src={iconFour} className="counter-icon"/>
    </div>
    <div className='number'>140 <br/><span className='counter-text'>Countries</span></div>
        </div>
    </div>
     </div>
     <div className="about">
     <div className="about-section">
    <div className='text-section'>
    <p className='about-title'>Lorem ipsum dolor sit<br/> amet consectetur. Lectus.</p>
    <p className='counter-text' id="section-text">Lorem ipsum dolor sit amet consectetur. Quis eu elementum condimentum aliquam consectetur.
   Dignissim morbi velit elit at sed. Ullamcorper augue amet tellus nisl.</p>
    <div className='about-app'>
      <p className='footer-links'>Get the App</p>
              <img src={playStore} className="appstore"/>
             <img src={appStore} />
            </div>
    </div>
    <div>
    <img src={phoneOne} className="phoneOne"/>
    </div>
    <div>
    <img src={phoneTwo} className="phoneTwo"/>
    </div>
     </div>
     </div>
     </div>
  )
}

export default About