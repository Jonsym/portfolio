import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Let me tell you something about me</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias et eius quasi quas neque debitis voluptates quod consequuntur ratione, eos sint consequatur earum mollitia, ut consectetur possimus? Ipsum, iusto.</p>
        </div>
        <div className='about.img'>
            <img src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_960_720.jpg" 
            alt="about"/>
        </div>
    </div>
  )
}

export default About