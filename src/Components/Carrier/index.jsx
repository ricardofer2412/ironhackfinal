import React from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Devices from '../../phones.json'

export default function Storage  () {

        let params = useParams() //GET THE PHONE NAME FROM SEARCHBAR
        let carrier = useParams().carrier
     

        const deviceName = params.device.split("-")[0]//GETS PATH AND COLLECTS THE FIRST NAME WHICH IS THE PRODUCT NAME

        const deviceDetails = Devices[0].phone[0][deviceName]
        .models
        .find((phone)=>
            phone.path === params.device
        ) //RETUNRS THE DEVICE THAT MATCHES THE ONE ON PARAMS

        return (
            <div className="storage-listing">
              {
                  deviceDetails.storage.map(storage => {
                      return (
                          <div>
                            <img className="storage-img" src={deviceDetails.image} alt={deviceDetails.name}/>
                             <h2> {deviceDetails.name}</h2>
                             <h4>{storage}</h4>
                             <button><Link to={`${carrier}/${storage}`}>Get an Offer</Link></button>
                          </div>
                      )
                  })
              }
            </div>
        )
}
