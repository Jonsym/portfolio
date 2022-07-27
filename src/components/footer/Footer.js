import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Jonathan Zamudio</h1>
            <p>Hi!</p>
        </div>
        <div className='footer-contact'>
             <h3>Contact me</h3>
             <p>Let's work</p>
        </div>
        <div className='sns'>
            <div className='design-by'>
                Designed by Jonathan Zamudio
            </div>
            <div className='sns-links'>
                <a href='https://twitter.com/JonsymZ' target="_blank"  rel="noreferrer">
                    <i className='fab fa-twitter twitter'></i>
                </a>
                <a href='https://github.com/Jonsym' target="_blank"  rel="noreferrer">
                    <i className='fab fa-github github'></i>
                </a>
                <a href='https://www.instagram.com/jonsym_zs/?hl=en' target="_blank"  rel="noreferrer">
                    <i className='fab fa-instagram instagram'></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer