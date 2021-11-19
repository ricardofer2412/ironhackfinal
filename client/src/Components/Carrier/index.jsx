import React from 'react'
import {Link} from 'react-router-dom'
import {useParams, useHistory} from 'react-router-dom'
import Devices from '../../phones.json'
import Footer from '../Footer'
import './index.css'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Storage  () {
        
        const history = useHistory()
        let params = useParams() //GET THE PHONE NAME FROM SEARCHBAR
        let carrier = useParams().carrier
             
        const btnStyle = {
            'display': 'block', 
            'color': '#ef6c00', 
            'margin' : '10px',
        }
        const deviceName = params.device.split("-")[0]//GETS PATH AND COLLECTS THE FIRST NAME WHICH IS THE PRODUCT NAME

        const deviceDetails = Devices[0].phone[0][deviceName]
        .models
        .find((phone)=>
            phone.path === params.device
        ) //RETUNRS THE DEVICE THAT MATCHES THE ONE ON PARAMS

        return (
            <div className="main-container">
                    <Button style={btnStyle} onClick={() => history.goBack()}><ArrowBackIcon/></Button>
                    <div className='position-container'>
                        <div className='order-styles'>
                            <img className='device-img' src={deviceDetails.image} alt={deviceDetails.name}/>
                            <div className='device-details'>
                                    <h3>Device Details: </h3>
                                    <div>Device: {deviceDetails.name}</div>
                                    <div>Carrier: {carrier.toUpperCase()}</div>
                            </div>
                            
                        </div>
                        <div className="storage-listing">
                        {
                            deviceDetails.storage.map(storage => {
                                return (
                                    <div className="device-div" key={`${deviceDetails.name}${storage}`}>
                                        <img className="storage-img" src={deviceDetails.image} alt={deviceDetails.name}/>
                                        <h2> {deviceDetails.name}</h2>
                                        <h4>{storage}</h4>
                                            <Link style={{'textDecoration':'none', 
                                                        'backgroundColor': '#ff9800',
                                                        'color': 'white'}} 
                                                to={`${carrier}/${storage}`}>
                                        <Button className='btn-style' 
                                                style={{'backgroundColor':'#ff9800'}} 
                                                variant='contained'>
                                                Get an Offer
                                        </Button>
                                            </Link>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
            <Footer/>
                </div>
         )
}
