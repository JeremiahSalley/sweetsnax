import React from "react";
import './Home.css'
import slideshow1 from '../img/slideshow1.jpg'
import slideshow2 from '../img/slideshow2.jpg'
import slideshow3 from '../img/slideshow3.jpg'
import slideshow4 from '../img/slideshow4.jpg'


// import candyapple1 from './img/candyapple1'
import './App.css';
import Slider from "./Slide";
// import Card from "./Card"



function Home() {
  return (
    <div>
      <Slider /> 
      <div className ="images">
        <div className = 'slideshow1'>
          <img alt="" src={slideshow1} height="300" width="200" />
        </div>
        <div className ="slideshow2">
          <img alt="" src={slideshow2} height="300" width="200"/>
        </div>
        <div className="slideshow3">
          <img alt="" src={slideshow3} height="300" width="200"/>
        </div>
        <div className="slideshow4">
          <img alt="" src={slideshow4} height="300" width="200"/>
        </div>
        
      </div>
      
    </div>

  );
}

export default Home;

