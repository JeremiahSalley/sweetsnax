import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Order from './Order'
import Footer from './Footer'
import CustomerOrder from './customerOrder'
import Receipt from './Receipt'

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          
          <Route path="/customer" component={CustomerOrder}/>
          <Route path="/order" component={Order}/>
          <Route path="/receipt/:email" component={Receipt}/>
          </Switch>
          <Footer />
          
      </div>
    </Router>
  );
}

export default App;
