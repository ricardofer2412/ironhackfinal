import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/Color logo - no background.svg'
export default function Footer() {
    return (
        <footer>
                    <div className="footerContainer">
                        <Link to='/faq'>FAQ</Link>
                        <Link className="fontWidth" to='/track-order'>Track Order</Link>
                        <a className="footerLogo" href="/"><img  className="footerLogo" src={logo} alt="logo" /></a>    
                        <Link className="fontWidth" to='/contact-us'>Contact us</Link>
                        <Link className="fontWidth" to='/admin'>Admin</Link>
                    </div>
                   
                                
        </footer>
    )
}
