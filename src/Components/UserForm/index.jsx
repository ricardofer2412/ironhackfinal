import {React, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { Form, Field} from 'react-final-form'
import { TextField, Button, Autocomplete, ToggleButton, ToggleButtonGroup} from '@mui/material';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'
import states from '../../states.json'

export default function UserForm() {

    const history = useHistory()
    const today = new Date(); //gets the date

    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
    const payDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+5)
    let phone = useParams()
    let [selectedState, setSelectedState ]= useState('')
    let [value, setValue] = useState()
    const [payment, setPayment] = useState('Paypal');
    

    
    const onChangeHandler = event => {
        let state = event.target.innerHTML
        setSelectedState(state)
    } //gets the selected state and sets it as usestate 
    const handleChange = (event, newPayment) => {
        setPayment(newPayment);
      };//gets the value of the selected payment method and sets it as usePayment
    
    // const arrOfOrders = [1];
    // let orderNumber;

    // const doesItExist = () =>{
    //     let randomNumber = Math.floor(100000 + Math.random() * 900000)
    //     if(arrOfOrders.includes(randomNumber)){
    //         return doesItExist()
    //     }else{
    //         console.log('does not exist', arrOfOrders)
    //         orderNumber = randomNumber;
    //         arrOfOrders.push(randomNumber)
    //     }
    // }

    
    return(
         <Form
            onSubmit={(formObj) =>{
            // doesItExist();
       
            
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
            console.log(email)
            // axios
            //     .post('http://localhost:5000/api/newOrder', newOrder)
            //     .then(response =>{
            //         console.log(response);
                    
            //     })
            // .catch(err => console.log(err))

            
            axios({
                method: "POST", 
                url:"http://localhost:5000/api/sendConfirmation", 
                data: {
                    name: name,   
                    email: email,  
                   
                }
            }).then((response)=>{
                if (response.data.msg === 'success'){
                    alert("Message Sent."); 
                    this.resetForm()
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
                <Field name="state">
                      {({input})=>(
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            style={{marginTop:'3vh'}}
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
                <Field name="payment">
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
            </form>
        )}
    </Form>
    )
}
