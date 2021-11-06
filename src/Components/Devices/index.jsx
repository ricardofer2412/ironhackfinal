import React from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import devices from "../../phones.json"


export default function Devices() {

    
    let phonePath = useParams().phone
    let phoneName;

    if(phonePath.charAt(0) === 'i'){
       phoneName = phonePath.charAt(0) + phonePath.charAt(1).toUpperCase() + phonePath.slice(2) 
    }else{
        phoneName = phonePath.charAt(0).toUpperCase() + phonePath.slice(1)
    }
    
    return (
        <div>
            {/* {<h1>This is all {phoneName}  models we buy!</h1>}
            <div className="phone-listing">
                {devices.map(phone => 
                 
                     phone.phone[0][phoneName].models.map(model => {
                        return (
                        <section>
                            <img className="iphone-images" src={model.image} alt={model.path}/>
                            <Link to={`/${phonePath}/${model.path}`}>{model.name}</Link>
                            
                        </section>
                        )
                    }) 
                )} */}
            {/* </div> */}
        </div>
    )
}
