import React from 'react'
import "./AboutContentStyles.css"
import { Link } from 'react-router-dom'
import React1 from '../assets/react4.jpg'
import React2 from '../assets/react2.webp'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>
            Hello there! I'm Anjali, a passionate frontend developer ready to make a mark in the world of web development. With a solid foundation in HTML, CSS, JavaScript and ReactJS, I have a strong desire to create captivating and user-friendly web experiences. My journey as a frontend developer is driven by my curiosity and eagerness to explore the latest technologies and industry best practices. I am constantly expanding my skills and staying up-to-date to ensure I can deliver the most cutting-edge solutions.
            </p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>            
        </div>
        <div className="right">
            <div className='img-container'>
                <div className="img-stack top">
                    <img src={React1} alt="true" className='img' />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} alt="true" className='img' />
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
