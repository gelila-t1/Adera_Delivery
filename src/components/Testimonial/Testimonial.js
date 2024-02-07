import React from 'react'
import './testimonial.css'
import testimonial from '../../assets/testimonial.png'
import test from '../../assets/test.png'
function Testimonial() {
  return (
    <div className='Testimonial'>
      <div className='real'>
      <div><img src={testimonial} className="testimonial-symbol"/></div>
        <div>
        <p className='testimonial-title'>Real Stories from Real <br/>Customers</p>
        <p className='testimonial-text'>Get inspired by these stories.</p>
        </div>
      
      </div>
     
        <div className='wrap-testimonials'>
        <div className='testimonial-section background'>  
        <img src={test} className="symbol"/> 
<p className='test-text'> Lorem ipsum dolor sit amet consectetur. Quis eu elementum condimentum aliquam consectetur.
   Dignissim morbi velit elit at sed. Ullamcorper augue amet tellus nisl. Ipsum mus massa sed vitae. Morbi integer.</p>
   <p className='test-name'>Floyd Miles</p>
   <p className='test-position'>Vice President, GoPro</p>
</div>
<div className='wrap-sections'>
<div className='testimonial-sectionOne background'>
<div><img src={test} className="symbol"/></div>
<p className='test-text'>Lorem ipsum dolor sit amet consectetur. Pretium sed eget pretium mi dolor. 
Tortor pellentesque in lacinia nam sed. Vitae cras in lorem sem natoque malesuada malesuada.</p>
   <p className='test-name'>Jane Cooper</p>
   <p className='test-position'>CEO, Airbnb</p>
        </div>
        <div className='testimonial-sectionTwo background'>
        <img src={test} className="symbol"/>
<p className='test-text'>Lorem ipsum dolor sit amet consectetur. Vulputate aliquet ut.</p>
   <p className='test-name'>Kristin Watson</p>
   <p className='test-position'>Co-Founder, Strapi</p>
        </div>
       
</div>

        </div>
     
    </div>
  )
}

export default Testimonial