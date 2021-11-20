import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
//import styles
import './index.css'

//import all of the images
import phones from '../../images/phones.jpeg'
import iphone from '../../images/iphone.jpeg'
import samsung from '../../images/samsung.jpeg'
import pixel from '../../images/pixel.jpeg'
import ipad from '../../images/ipad.jpeg'


export default function Home() {
    return (

        <div>
            <header>
                <NavBar/>
            </header>
            <div id="home" className="mainDiv">
                <div >
                    <div className="firstHeader">

                    </div>
                    <div className="hero-content">
                       <h1 class="hero-title">

                            Sell your devices to us.
                        </h1>
                        <h2 class="hero-subtitle">
                            We offer the best prices in the market on a reliable platform.
                            If you get a better price we will match it.
                        </h2>
                        <div className="button-sell-div">
                        <a href="#sell">
                            <Button className='button-sell' variant="contained">
                                    Sell Your Phone
                            </Button>
                        </a>
                        </div>
                    </div>
                </div>

                <div id="sell">

                    <section className="phoneListDescription">
                        <h1>Choose a phone brand.</h1>
                        <p>Follow the steps after choosing 
                        which phone brand you would like to sell.</p>
                    </section>

                    <section className="phoneList">
                        <div>
                            <img className="devicesStyle" src={iphone} alt="all of the phone images" />
                            <Link to='/iphone'>
                                <Button 
                                   className='button-sell-phone'
                                    variant="contained"> 
                                    iPhone
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <img className="devicesStyle" src={samsung} alt="all of the phone images" />
                            <Link to='/samsung'>
                                <Button  className='button-sell-phone' variant="contained"> 
                                    Samsung 
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <img className="devicesStyle" src={pixel} alt="all of the phone images" />
                            <Link to='/pixel'>
                                <Button  className='button-sell-phone' variant="contained"> 
                                    Pixel 
                                </Button> 
                            </Link>
                        </div>
                        <div>
                            <img className="devicesStyle" src={ipad} alt="all of the phone images" />
                            <Link to='/ipad'>
                                <Button  className='button-sell-phone' variant="contained">
                                    iPad
                                </Button>
                            </Link>
                        </div>
                    </section>

                </div>
                <Footer/>
            </div>
            
        </div>
    )
}
