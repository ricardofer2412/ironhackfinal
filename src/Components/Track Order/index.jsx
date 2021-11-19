import {React, useEffect, useState} from 'react'
import { Form, Field, } from 'react-final-form'
import { TextField, Button} from '@mui/material';
import axios from 'axios';
import { AssignmentReturnTwoTone } from '@mui/icons-material';
import './index.css'

export default function TrackOrder() {
    // let [orderNumber, setOrderNumber] = useState();
    // console.log(orderNumber)


    let [orderInfo, setOrderInfo] = useState({
        status : '',
        phone: '',
        vendor: '',
        paymentMethod: '',
    });

  
    
    

    return (
        <div className="track-orderDiv">
            <Form
            onSubmit={(formObj) =>{     
                let orderNumber = formObj.trackingNumber;  
                
                axios
                    .get(`http://localhost:5000/api/track-order/${orderNumber}` )
                    .then((order) =>
                    {
                        const orderStatus = order.data[0].orderStatus;
                        const orderPhone = order.data[0].product;
                        const vendor = order.data[0].vendor;
                        const payment = order.data[0].paymentMethod
                        setOrderInfo({...orderInfo,
                            status : orderStatus,
                            phone: orderPhone,
                            vendor: vendor,
                            paymentMethod: payment,
                            })
            
                            console.log(orderInfo)
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
                        <Button variant='contained' type='POST' >Search</Button>
                    </div>
                </form>
            )}
            </Form>
            <h4>Hello {orderInfo.vendor.name} right under you can see the status of your order.</h4> 
            <p>Device: {orderInfo.phone.device}</p>
            <p>Carrier: {orderInfo.phone.carrier.toUpperCase()}</p>
            <p>Storage: {orderInfo.phone.storage}</p>              
            <p>Status: {orderInfo.status}</p>
        </div>
    )
}
