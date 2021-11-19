import React from 'react'
import {Link} from 'react-router-dom'
import {useParams, useHistory} from 'react-router-dom'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './index.css'
import devices from '../../../phones.json'
import Footer from '../../Footer'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Carrier() {

    const history = useHistory()
    const path = useParams().deviceModel//returns device model path
    const model = path.split('-')[0]
    const fullPhone = path.split('-').join(' ')
    const device = devices[0].phone[0][model].models
                    .find((phone) => 
                    phone.name === fullPhone)
                
    const btnStyle = {
        'display': 'block', 
        'color': '#ef6c00', 
        'margin' : '10px',
    }
    //console.log(fullPhone)
    return (
        <div>
        <Button style={btnStyle} onClick={() => history.goBack()}><ArrowBackIcon/></Button>
            <div className="phonePickContainer">
                <div className="phonePick"> 
                    <img className="imageStyles" src={device.image} alt={device.name}/>
                    <h1>Great! You chose the {device.name} to sell.</h1>
                </div>
                <h3>Now pick which carrier is your device.</h3>
            </div>
            <div className="container-link">
                <Link className="verizon-styles styles" to={`${path}/att`}>    
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/AT%26T_logo_2016.svg/1200px-AT%26T_logo_2016.svg.png' alt='at&t logo'/>
                </Link>
                <Link className="verizon-styles styles" to={`${path}/verizon`}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/8/81/Verizon_2015_logo_-vector.svg' alt='verizon wireless logo'/>
                </Link>
                <Link className="tmobile-styles styles" to={`${path}/t-mobile`}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/T-Mobile_US_Logo_2020_RGB_Magenta_on_Transparent.svg/2880px-T-Mobile_US_Logo_2020_RGB_Magenta_on_Transparent.svg.png' alt='t mobile logo'/>
                </Link>
                <Link className="unlocked-styles styles" to={`${path}/unlocked`}>
                    <Button className="unlocked-styles styles" >
                        <LockOpenIcon style={{color: 'black'}}/>
                            <p>Unlocked</p>
                    </Button>
                </Link>
                <Link className="other-styles styles" to={`${path}/other`}>
                    <Button className="styles">
                        <MoreHorizIcon style={{color: 'black'}}/>
                        <p>Other Carrier</p>
                    </Button>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}
