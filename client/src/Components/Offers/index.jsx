import React, { useState, useEffect} from 'react';
import Devices from '../../phones.json'
import {useParams, Link, useHistory, } from 'react-router-dom'
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import './index.css'
import Footer from '../Footer'


export default function Offers() {


    const [price, setPrice] = useState(0)
    let path = useParams()
    const history = useHistory()
    let phonePath = useParams().device //GETS THE PATH TO THE PHONE
    let phoneStorage = useParams().storage//GETS THE STORAGE
    let phoneCarrier = useParams().carrier
    let phoneName = useParams().device.split("-")[0] //TURNS THE PATH INTO THE PHONE NAME TO BE ABLE TO LOOK FOR IT
    let carrier;

    const btnStyle = {
        'display': 'block', 
        'color': '#ff9800', 
        'margin' : '10px',
        'marginTop': '15px'
    }

    if(useParams().carrier.charAt(0) === 't'){
        carrier = phoneCarrier.split("-")[0].toUpperCase() + '-' + phoneCarrier.split("-")[1].charAt(0).toUpperCase() + phoneCarrier.slice(3)
    }else if(phoneCarrier.charAt(0) === 'a'){
        carrier = phoneCarrier.toUpperCase()
    }else{
        carrier = phoneCarrier.charAt(0).toUpperCase() + phoneCarrier.slice(1)
    }

     const deviceDetails = Devices[0].phone[0][phoneName]
     .models
     .find((phone)=>
         phone.path === phonePath
     ) //RETUNRS THE DEVICE THAT MATCHES THE ONE ON PARAMS

 

     useEffect(() => {


        axios.post(`${process.env.REACT_APP_API_URL}/product/getprice` , 
        {carrier: phoneCarrier, memory: phoneStorage, model: deviceDetails.name, category: path.phone })
        .then((response) => {

            const phoneData = response.data
            // setPrice(phoneData[0].price)     
           
      
            if(phoneData.length === 0) {
                //  setPrice(0)  
       
            } 
            else {
                setPrice(phoneData[0].price)
            }
        })
    }
    )

    return (
        <div>
            <Button style={btnStyle} onClick={() => history.goBack()}><ArrowBackIcon/></Button>
            {
               <div className="final-offer">
                    <div className="product-info">
                        <div>
                            <img src={deviceDetails.image} alt={deviceDetails.name}/>
                        </div>
                        <div className="device-details">
                            <h2>Device Details</h2>
                            <p>Phone: {deviceDetails.name}</p>
                            <p>Carrier: {carrier}</p>
                            <p>Storage: {phoneStorage}</p> 
                        </div> 
                    </div>
                    <divs className='offer-div'>
                        <h1>Your BuyBack Offer</h1>
                        <h4 className='amount'>${price}</h4>
                        <h4>Perfect Condition</h4>
                        
                        <p>This is an estimate until inspection passes</p>
                            <Link 
                            style={{'textDecoration': 'none'}} 
                                    to={`/${path.phone}/${phonePath}/${phoneCarrier}/${phoneStorage}/userform`}
                                    >
                                <Button style={{'backgroundColor': '#ff9800',
                                                'width': '10vw',
                                                'boxShadow' : '2px 2px 2px grey',
                                                'color': 'white' 
                                                }}>
                               
                                    Get Paid
                                </Button>
                            </Link>
                    </divs>
               </div>
            }
            <Footer/>
        </div>
    )
}
