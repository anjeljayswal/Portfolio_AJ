import React from 'react'
import "./FooterStyles.css";
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'> 
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:
                    "#fff", marginRight:"2rem"}} />
                    <div>
                        <p>123 Housing Society.</p>
                        <p>Nepal</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: '#fff', marginRight:"2rem"}}/>
                    9279890613</h4>
                    
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: '#fff', marginRight:"2rem"}}/>
                    anjeljayswal@gmail.com</h4>
                    
                </div>
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>I'm a react front-end developer. I create responsive secure website for my clients.</p>
                <div className="social">
                    <FaLinkedin size={20}
                        style={{color:'#fff',
                        marginRight:"2rem"}}
                    /> 
                    <FaGithub size={20}
                        style={{color:'#fff',
                        marginRight:"2rem"}}
                    /> 
                    <FaFacebook size={20}
                        style={{color:'#fff',
                        marginRight:"2rem"}}
                    />    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
