import React, { Component } from 'react'
import './Slide.css'
// import slideshow1 from '../img/slideshow1.jpg'
// import slideshow2 from '../img/slideshow2.jpg'
// import slideshow3 from '../img/slideshow3.jpg'
// import slideshow4 from '../img/slideshow4.jpg'

export default class Slider extends Component{

state={
  count:1,
  anim:false
}

handleLeft=()=>{
let newCount = this.state.count + 1;

this.setState({
  count: newCount,
  anim:true
})

this.timer();

if(this.state.count===4){
  this.setState({
    count:1
  })

}
console.log(this.state.count)
}

handleRight=()=>{
  let newCount = this.state.count - 1;

  this.setState({
    count: newCount,
    anim:true
  })

  this.timer();
  
  if(this.state.count===1){
    this.setState({
      count:4
    })
  }

  console.log(this.state.count)
}

componentDidMount(){
  this.intervalClear=this.timer()
}


timer=()=>{
  setTimeout(()=>{
    this.setState({
      anim:false
    })
  },100)
}

componentWillUnmount(){
  clearInterval(this.intervalClear)
}



  render() {
    return (
      <div className='central'>
        <div className={this.state.anim?'newPhotos photos': 'photos'}>
          <img src={`../img/slideshow${this.state.count}.jpg`} alt=''/>
        </div>

        <div className="btns">
          <i className="fas fa-chevron-left" onClick={this.handleLeft}></i>
          <i className="fas fa-chevron-right" onClick={this.handleRight}></i>

        </div>
      </div>
    )
  }
}