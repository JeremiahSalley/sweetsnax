import React from 'react'
import './about.css';
import Logo from '../img/thumbnail.png'

function About() {
  return (
    <div className='border'>
        <img alt="" src={Logo} height="300" width="200" id="aboutimg" />
        <h1>About Page</h1>
        <p>Sweet Snax was established in 2019. <br/>Each treat is made with love.<br/>I pride myself with taking each <br/>event as if it was my own giving you all of <br/>my attention to every little detail, making every detail <br/>unique. Every treat is Distinctively Delicious and made just for you.</p>
        
    </div>

  );
}

export default About;
