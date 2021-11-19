import React from 'react'
import {Link} from 'react-router-dom'
import {useParams, useHistory} from 'react-router-dom'
import devices from "../../phones.json"
import './index.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Footer from '../Footer'

export default function Devices() {

    const history = useHistory()
    let phonePath = useParams().phone
    let phoneName;
    const btnStyle = {
        'display': 'block', 
        'color': '#ef6c00', 
        'margin' : '10px',
    }

    if(phonePath.charAt(0) === 'i'){
       phoneName = phonePath.charAt(0) + phonePath.charAt(1).toUpperCase() + phonePath.slice(2) 
    }else{
        phoneName = phonePath.charAt(0).toUpperCase() + phonePath.slice(1)
    }
    
    return (
        <div>
            <Button style={btnStyle} onClick={() => history.goBack()}><ArrowBackIcon/></Button>
            <div className="body-div">
                
                {<h1>This is all {phoneName}  models we buy!</h1>}

                <div className="phone-listing">
                    {devices.map(phone => 
                    
                        phone.phone[0][phoneName].models.map(model => {
                            return (
                                <Link className="link-style" to={`/${phonePath}/${model.path}`}>
                                    <section className="device-box">
                                        <img className="iphone-images" src={model.image} alt={model.path}/>
                                        <p className="model-name">{model.name}</p>
                                    </section>
                                </Link>
                                
                            )
                        })  
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
