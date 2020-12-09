import React from 'react'
// import './App.css';
import Logo from '../img/Logo.PNG'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



function Nav() {
  return (
      <div>
           <img src={Logo} alt='logo'/>
           <nav>
            <ul>
                <Link to='/'>
                <li>
                    <Button variant="outlined" color="primary">
                        Home
                    </Button>
                </li>
                </Link>
                <Link to= '/about'>
                <li>
                    <Button variant="outlined" color="primary">
                        About
                    </Button>
                </li>
                </Link>
                <Link to= "/order">
                <li>
                    <Button variant="outlined" color="primary">
                        Order
                    </Button>
                </li>
                </Link>
                <Link to= "/contact">
                <li>
                    <Button variant="outlined" color="primary">
                        Contact
                    </Button>
                </li>
                </Link>
            </ul>
           </nav>

      </div>
    

  );
}

export default Nav;