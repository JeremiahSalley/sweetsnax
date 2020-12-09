import React, { Component } from 'react'
import './Slide.css'

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
          <img src={`./img/slideshow${this.state.count}.jpg`} alt=''/>
        </div>

        <div className="btns">
          <i className="fas fa-chevron-left" onClick={this.handleLeft}></i>
          <i className="fas fa-chevron-right" onClick={this.handleRight}></i>

        </div>
      </div>
    )
  }
}