import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/Black logo - no background.svg'
export default function Footer() {
    return (
        <footer>
                    <div className="footerContainer">
                        <Link to='/faq'>FAQ</Link>
                        <Link className="fontWidth" to='/track-order'>Track Order</Link>
                        <Link className="fontWidth" to='/contact-us'>Contact us</Link>
                    </div>
                    <a className="footerLogo" href="#home"><img  className="footerLogo" src={logo} alt="logo" /></a>
                    <div className="secondFooterContainer">
                        <Link to='/iphone'>
                            Sell iPhone
                        </Link>
                       <Link to='/samsung'>
                            Sell Samsung
                       </Link>
                       <Link to='/pixel'>

                            Sell Pixel
                       </Link>
                        <Link to='ipad'>
                            Sell iPad
                        </Link>
                       
                    </div>
                                
        </footer>
    )
}
