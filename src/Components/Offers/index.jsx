import React, { useState, useEffect } from 'react';
import Devices from '../../phones.json'
import {useParams, Link} from 'react-router-dom'
import axios from "axios";
export default function Offers() {


    const [price, setPrice] = useState(0)

    
    let path = useParams()
  
    let phonePath = useParams().device //GETS THE PATH TO THE PHONE
    let phoneStorage = useParams().storage//GETS THE STORAGE
    let phoneCarrier = useParams().carrier
    let phoneName = useParams().device.split("-")[0] //TURNS THE PATH INTO THE PHONE NAME TO BE ABLE TO LOOK FOR IT
    let carrier;


    console.log(path.phone)
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


        axios.post('http://localhost:5000/api/product/getprice' , 
        {carrier: phoneCarrier, memory: phoneStorage, model: deviceDetails.name, category: path.phone })
        .then((response) => {

            console.log('response data', response.data)
            const phoneData = response.data
      
            if(phoneData.length === 0) {
                //  setPrice(0)  
                console.log('executed')
                console.log('price null')
            } 
            else {
                setPrice(phoneData[0].price)
            }
        })
    })

    return (
        <div>
            {
               <div className="final-offer">
                    <div className="product-info">
                        <div>
                            <img src={deviceDetails.image} alt={deviceDetails.name}/>
                        </div>
                        <div>
                            <h2>Device Details:</h2>
                            <h3>Phone: {deviceDetails.name}</h3>
                            <h4>Carrier: {carrier}</h4>
                            <h4>Storage: {phoneStorage}</h4> 
                        </div> 
                    </div>
                    <div className='offer-div'>
                        <h1>Your BuyBack Offer</h1>
                        <h3>Perfect Condition</h3>
                        <h4 className='amount'>${price}</h4>
                        <p>This is an estimate until inspection passes</p>
                   
                        <button className='get-paid-btn'><Link to={`/${path.phone}/${phonePath}/${phoneCarrier}/${phoneStorage}/userform`}>Get Paid</Link></button>
                    </div>
               </div>
            }
        </div>
    )
}
