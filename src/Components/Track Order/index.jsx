import {React, useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Form, Field, } from 'react-final-form'
import { TextField, Button} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../Footer'

import axios from 'axios';
import './index.css'

export default function TrackOrder() {

    const history = useHistory()

    let [infoForDisplay, setInfoForDisplay] = useState(
        {
            message : '',
            device: '',
            carrier: '',
            storage: '',
        }
    )

    const btnStyle = {
        'display': 'block', 
        'color': '#ff9800', 
        'margin' : '10px',
        'marginTop': '15px'
    }
    
    
    return (
        <div className='mainContainer'>
            
        <Button style={btnStyle} onClick={() => history.goBack()}><ArrowBackIcon/></Button>
            <div className="track-orderDiv">
                <Form
                onSubmit={(formObj) =>{     
                    let orderNumber = formObj.trackingNumber;  
                    
                    axios
                        .get(`http://localhost:5000/api/track-order/${orderNumber}` )
                        .then((order) =>{
                            const orderStatus = order.data[0].orderStatus;
                            const orderPhone = order.data[0].product;
                            const vendor = order.data[0].vendor;

                            setInfoForDisplay({...infoForDisplay,
                                message : `Hello ${vendor.name} right under are the details of your order.`,
                                device: `Device: ${orderPhone.device}`,
                                carrier: `Carrier: ${orderPhone.carrier.toUpperCase()}`,
                                storage: `Storage: ${orderPhone.storage}`,
                                status: `Status: ${orderStatus}`,
                            })
                        }
                        )
                        .catch((error) => console.log(error))   

                }}>
                {({handleSubmit})=>(
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field  name="trackingNumber" >
                                {({input})=>(
                                    <div> 
                                        <TextField 
                                        label="Tracking Number" 
                                        variant="outlined" 
                                        {...input}/>
                                    </div>
                                )}
                            </Field>
                            <Button style={{marginTop: '20px'}} variant='contained' type='POST' >Search</Button>
                        </div>
                    </form>
                )}
                </Form>
                <div className="update-message">
                    <h5>{infoForDisplay.message}</h5> 
                    <p>{infoForDisplay.device}</p>
                    <p>{infoForDisplay.carrier}</p>
                    <p>{infoForDisplay.storage}</p>  
                    <p>{infoForDisplay.status}</p>            
                </div>
            </div>
            <Footer/>
        </div>
    )
}
