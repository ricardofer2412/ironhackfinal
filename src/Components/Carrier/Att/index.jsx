import React, { Component } from 'react'

export default class Att extends Component {
    render() {
        
        const deviceID = this.props.location.pathname.slice(1, -4)
        const deviceArr  = deviceID.split("-")
        const deviceName = deviceArr[0]
        const deviceDetails = this.props.device[0].phone[0][deviceName]
        .models
        .find((phone)=>
            phone.path === deviceID
        )
        console.log(deviceDetails)


        return (
            <div className="storage-listing">
              {
                  deviceDetails.storage.map(storage => {
                      return (
                          <div>
                            <img className="storage-img" src={deviceDetails.image} alt={deviceDetails.name}/>
                             <h2> {deviceDetails.name}</h2>
                             <h4>{storage}</h4>
                             <button>Get an Offer</button>
                          </div>
                      )
                  }
                    
                  )
              }

            </div>
        )
    }
}
