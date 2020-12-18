import React from 'react'
import './Nav.css';
import Logo from '../img/thumbnail.png'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';




function Nav() {
  return (
      <div>
           <img src={Logo} alt='logo' id="logo" height="500px" width="405px"/>
           <nav>
            <ul>
                <Link to='/'>
                <li>
                    <Button variant="contained" color="primary" id='butt'>
                        Home
                    </Button>
                </li>
                </Link>
                <Link to= '/about'>
                <li>
                    <Button variant="contained" color="primary" id='butt'>
                        About
                    </Button>
                </li>
                </Link>
                <Link to= "/order">
                <li>
                    <Button variant="contained" color="primary" id='butt'>
                        Order
                    </Button>
                </li>
                </Link>
                <Link to= "/customer">
                <li>
                    <Button variant="contained" color="primary" id="myO" id='butt' style= {{width:"105px"}}>
                        My Order
                    </Button>
                </li>
                </Link>
            </ul>
           </nav>

      </div>
    

  );
}

export default Nav;