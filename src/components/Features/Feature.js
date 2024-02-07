import React from 'react'
import './feature.css'
import iconOne from '../../assets/iconOne.png'
import iconTwo from '../../assets/iconTwo.png'
import iconThree from '../../assets/iconThree.png'
import iconFour from '../../assets/iconFour.png'
import iconFive from '../../assets/iconFive.png'
import iconSix from '../../assets/iconSix.png'
// import iconFour from '../../assets/iconFour.png'
function Feature() {
  return (
    <div className='feature'>
        <div className='feature-title'>
        Tailor-made features
        </div>
        <div className='feature-text'>Lorem ipsum is common placeholder text 
        used to demonstrate the graphic elements of a <br/>document or visual presentation.</div>
        <div className="wrap-feature">
          <div className='feature-section'>
            <div className="icons-feature"><img src={iconOne}/></div>
            <p className='title'>Robust workflow</p>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Sed erat nibh tristique ipsum.</p>
        </div>
        <div className='feature-section'>
            <div className="icons-feature"><img src={iconTwo}/></div>
            <p className='title'>Flexibility</p>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Sed erat nibh tristique ipsum.</p>
        </div>
        <div className='feature-section'>
            <div className="icons-feature"><img src={iconThree}/></div>
            <p className='title'>User Friendly</p>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Sed erat nibh tristique ipsum.</p>
        </div>
        <div className='feature-section'>
            <div className="icons-feature"><img src={iconFour}/></div>
            <p className='title'>Multiple Layouts</p>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Sed erat nibh tristique ipsum.</p>
        </div>
        <div className='feature-section'>
            <div className="icons-feature"><img src={iconFive}/></div>
            <p className='title'>Better Components</p>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Sed erat nibh tristique ipsum.</p>
        </div>
        <div className='feature-section'>
            <div className="icons-feature"><img src={iconSix}/></div>
            <p className='title'>Well Organized</p>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Sed erat nibh tristique ipsum.</p>
        </div>
        </div>
    </div>
  )
}

export default Feature