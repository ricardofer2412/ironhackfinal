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
                <div className="firstHeader">
                    <img className="phonesHomePageImage" src={phones} alt="all of the phone images" />
                    <section className="sellYourDevicesSection">
                        <h1>
                            Sell your devices to us.
                        </h1>
                        <p>
                            We offer the best prices in the market on a reliable platform.
                            If you get a better price we will match it.
                        </p>
                        <a href="#sell">
                            <Button style={{
                                "borderColor": 'grey', 
                                "color": 'white', 
                                "backgroundColor":'grey',
                                }} variant="contained">
                                    Sell Your Phone
                            </Button>
                        </a>
                    </section>
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
                                    style={{"borderColor": 'grey',
                                            "color": 'grey'}} 
                                    variant="outlined"> 
                                    iPhone
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <img className="devicesStyle" src={samsung} alt="all of the phone images" />
                            <Link to='/samsung'>
                                <Button style={{"borderColor": 'grey', 
                                                "color": 'grey'}} variant="outlined"> 
                                    Samsung 
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <img className="devicesStyle" src={pixel} alt="all of the phone images" />
                            <Link to='/pixel'>
                                <Button style={{"borderColor": 'grey', 
                                                "color": 'grey'}} variant="outlined"> 
                                    Pixel 
                                </Button> 
                            </Link>
                        </div>
                        <div>
                            <img className="devicesStyle" src={ipad} alt="all of the phone images" />
                            <Link to='/ipad'>
                                <Button style={{"borderColor": 'grey', 
                                                "color": 'grey'}} variant="outlined">
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
