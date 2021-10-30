import React from 'react'
import {Link} from 'react-router-dom'
import phones from "../../../phones.json"

export default function iPhone() {
    return (
        <div>
            <h1>This is all iPhone models we buy!</h1>
            <div className="phone-listing">
                {phones.map(phone => 
                    phone.phone[0].iPhone.models.map(model => {
                        return (
                        <section>
                            <img className="iphone-images" src={model.image} alt={model.path}/>
                            <Link to={model.path}>{model.name}</Link>
                            
                        </section>
                        )
                    })
                )}
            </div>
        </div>
    )
}
