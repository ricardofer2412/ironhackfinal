import React from 'react'
import Devices from '../../phones.json'
import {useParams, Link} from 'react-router-dom'

export default function Offers() {
    




    let path = useParams()
  
    let phonePath = useParams().device //GETS THE PATH TO THE PHONE
    let phoneStorage = useParams().storage//GETS THE STORAGE
    let phoneCarrier = useParams().carrier
    let phoneName = useParams().device.split("-")[0] //TURNS THE PATH INTO THE PHONE NAME TO BE ABLE TO LOOK FOR IT
    let carrier;


    console.log(phoneStorage)
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
                        <h4 className='amount'>$400</h4>
                        <p>This is an estimate until inspection passes</p>
                   
                        <button className='get-paid-btn'><Link to={`/${path.phone}/${phonePath}/${phoneCarrier}/${phoneStorage}/userform`}>Get Paid</Link></button>
                    </div>
               </div>
            }
        </div>
    )
}
