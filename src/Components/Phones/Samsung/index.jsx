import React from 'react'
import {Link} from 'react-router-dom'
import phones from "../../../phones.json"

export default function Samsung() {
    return (
        <div>
            <h1>This is all Samsung models we buy!</h1>
            <div className="phone-listing">
                {phones.map(phone => 
                    phone.phone[0].Samsung.models.map(model => {
                        return (
                        <section>
                            <img className="samsung-images" src={model.image} alt={model.path}/>
                            <Link to={model.path}>{model.name}</Link>
                            
                        </section>
                        )
                    })
                )}
            </div>
        </div>
    )
}