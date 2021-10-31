import React from 'react'
import {Link} from 'react-router-dom'
import device from "../../phones.json"

export default function iPad() {
    return (
        <div>
            <h1>This is all iPad models we buy!</h1>
            
            <div className="phone-listing">
                {device.map(ipad => 
                    ipad.other[0].ipad.models.map(model => {
                        return (
                        <section>
                            <img className="ipad-images" src={model.image} alt={model.path}/>
                            <Link to={`${model.path}`}>{model.name}</Link>
                            
                        </section>
                        )
                    })
                )}
            </div>
        </div>
    )
}
