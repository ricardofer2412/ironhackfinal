import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import logo from '../../images/WLnobackground.svg'

export default function NavBar() {
    return (
       <header className="navBar">
          <img className="logo" src={logo} alt="logo"/>
          <div className="navDiv">
            <div className="navItems">
                <a href="#sell">Sell</a>
                <Link to='/faq'>FAQ</Link>
                <Link className="fontWidth" to='/track-order'>Track Order</Link>
                <Link className="fontWidth" to='/contact-us'>Contact Us</Link>
                <Link className="fontWidth" to='/admin'>Admin</Link>
            </div>
          </div>
      </header>
    )
  }
  
  
  
