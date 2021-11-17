import {React, useState, useEffect} from 'react'
import {useParams, useHistory, } from 'react-router-dom'
import { Form, Field} from 'react-final-form'
import { TextField, Button, Autocomplete, ToggleButton, ToggleButtonGroup} from '@mui/material';
import PhoneInput from 'react-phone-input-2'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../Footer'

import axios from 'axios';
import states from '../../states.json';
import Devices from '../../phones.json';

import './index.css'

import 'react-phone-input-2/lib/style.css';

export default function UserForm() {

    const [price, setPrice] = useState(0)
    const [payment, setPayment] = useState('Paypal');
    let [selectedState, setSelectedState ]= useState('')
    let [value, setValue] = useState()

    let path = useParams()
    let phone = useParams()
    let phoneCarrier = useParams().carrier
    let phoneStorage = useParams().storage
    let phonePath = useParams().device
    let phoneName = useParams().device.split("-")[0]
    let carrier;

    const history = useHistory()

    const today = new Date(); //gets the date
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
    const payDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+5)

    const btnStyle = {
        'display': 'block', 
        'color': 'black', 
        'margin' : '10px',
    }

    const deviceDetails = Devices[0].phone[0][phoneName]
    .models
    .find((phone)=>
        phone.path === phonePath
    )///finds the phone path to get the price

    const onChangeHandler = event => {
        let state = event.target.innerHTML
        setSelectedState(state)
    } //gets the selected state and sets it as usestate 
    const handleChange = (event, newPayment) => {
        setPayment(newPayment);
      };//gets the value of the selected payment method and sets it as usePayment

      if(useParams().carrier.charAt(0) === 't'){
        carrier = phoneCarrier.split("-")[0].toUpperCase() + '-' + phoneCarrier.split("-")[1].charAt(0).toUpperCase() + phoneCarrier.slice(3)
    }else if(phoneCarrier.charAt(0) === 'a'){
        carrier = phoneCarrier.toUpperCase()
    }else{
        carrier = phoneCarrier.charAt(0).toUpperCase() + phoneCarrier.slice(1)
    }

    useEffect(() => {

        axios.post('http://localhost:5000/api/product/getprice' , 
        {carrier: phoneCarrier, memory: phoneStorage, model: deviceDetails.name, category: path.phone }).then((response) => {
            console.log('executed')
            console.log(response.data)
            const phoneData = response.data
            setPrice(phoneData[0].price)     
           
        })
    }
    )
    
    return(
        <div>
            <Button style={btnStyle} onClick={() => history.goBack()}><ArrowBackIcon/></Button>
            <div className="top-container">
                <div className="order-container">
                    <h2>This is your order:</h2>
                    <div className="order-details">
                        <img src={deviceDetails.image} alt={deviceDetails.name}/>
                        <div>
                            <h3>Device Details:</h3>
                            <p>Phone: {deviceDetails.name}</p>
                            <p>Carrier: {carrier}</p>
                            <p>Storage: {phoneStorage}</p> 
                            <h4>Price: ${price}</h4>
                        </div>
                    </div>
                </div>
                <Form
                        onSubmit={(formObj) =>{            
                        
                        formObj.state = selectedState;
                        const newOrder = {
                            "product": phone,
                            "vendor": formObj,
                            "orderNumber": '',
                            "orderDate": date,
                            "paymentDate": payDate,
                            "paymentMethod": formObj.payment,
                            "orderStatus": "Submitted",
                        }
                        console.log({newOrder, formObj})




                        const {name, payment, email} = formObj
                    

                        console.log(phone)

                        axios({
                            method: "POST", 
                            url:"http://localhost:5000/api/sendConfirmation", 
                            data: {
                                name: name,   
                                email: email,
                                model:phone

                            
                            }
                        }).then((response)=>{
                            if (response.data.msg === 'success'){
                                alert("Message Sent."); 
                                
                            }else if(response.data.msg === 'fail'){
                                alert("Message failed to send.")
                            }
                        })
                        
                        history.push('/thankyou')
                        }
                        }
                        
                    >
                    {({handleSubmit})=>(
                    <form className="user-form" onSubmit={handleSubmit}>
                        <div className="form-div">
                                <Field  name="name" >
                                        {({input})=>(
                                            <div className="box-sizing"> 
                                                <TextField 
                                                    label="Full Name" 
                                                    variant="standard" 
                                                    {...input}/>
                                            </div>
                                        )}
                                        
                                    </Field>
                                    <Field name="email">
                                        {({input})=>(
                                            <div className="box-sizing">
                                            <TextField 
                                                    label="Email" 
                                                    variant="standard" 
                                                    {...input}/> 
                                            </div>
                                            )}
                                    </Field>
                                    <Field name="phoneNumber">
                                        {({input})=>(
                                            <div className="box-sizing">
                                                    <PhoneInput
                                                        style={{ 
                                                            width:'21vw',
                                                            marginBottom: '0.5vh'
                                                        }}
                                                        country={'us'}
                                                        placeholder="Enter phone number"
                                                        value={value}
                                                        onChange={setValue}
                                                        {...input}
                                                        inputProps={{
                                                            name: 'phoneNumber',
                                                            required: true,
                                                        }}
                                                    />
                                            </div>
                                            )}
                                    </Field>
                                
                                    <Field name="address">
                                    {({input})=>(
                                        <div className="box-sizing">
                                            <TextField 
                                                label="Address 1" 
                                                variant="standard" 
                                                {...input}/> 
                                        </div>
                                        )}
                                    </Field>
                                    <Field name="address2">
                                        {({input})=>(
                                                <div  className="box-sizing">
                                                    <TextField 
                                                        label="Address 2" 
                                                        variant="standard" 
                                                        {...input}/> 
                                                </div>
                                            )}
                                    </Field>
                                    <Field name="city">
                                        {({input})=>(
                                                <div className="box-sizing">
                                                    <TextField 
                                                        label="City" 
                                                        variant="standard" 
                                                        {...input}/>
                                                </div>
                                            )}
                                    </Field>
                                    <Field className="state-style" name="state">
                                        {({input})=>(
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                style={{marginTop:'3vh', marginLeft:'7vw'}}
                                                options={states.map((state, key) => state.name)}
                                                sx={{ width: '20vw' }}
                                                renderInput={({...props})=><TextField label='State' {...props}/>}
                                                onChange={onChangeHandler}
                                            />
                                        )}  
                                    </Field>
                                
                                    <Field name="zipcode">
                                        {({input})=>(
                                                <div  className="box-sizing">
                                                    <TextField 
                                                        label="Zip Code" 
                                                        variant="standard" 
                                                        {...input}/>
                                                </div>
                                            )}
                                    </Field>
                            </div>
                    
                        <div class="payment-div">
                        <Field className="payment" name="payment">
                            {({input})=>(
                                    <div  className="box-sizing">
                                        <ToggleButtonGroup
                                            color="primary"
                                            value={payment}
                                            exclusive
                                        onChange={handleChange}
                                        {...input}
                                        >
                                            <ToggleButton value="Check">Check</ToggleButton>
                                            <ToggleButton value="Paypal">Paypal</ToggleButton>
                                            <ToggleButton value="Amazon">Amazon</ToggleButton>
                                            <ToggleButton value="Debit">Debit</ToggleButton>
                                        </ToggleButtonGroup>
                                    </div>
                                )}
                        </Field>
                        <Button style={{marginTop: '30px'}} variant='contained' type='POST' >Submit</Button>
                        </div>
                    </form>
                    )}
                </Form>
            </div>
            <Footer/>
        </div>
    )
}
