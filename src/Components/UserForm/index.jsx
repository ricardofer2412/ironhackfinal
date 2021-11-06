import {React, useState} from 'react'
import states from '../../states.json'
import {useParams} from 'react-router-dom'
import  {Button} from '@mui/material';
import { Form, Field, useForm} from 'react-final-form'
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';

export default function UserForm() {

    let phone = useParams()
    let [selectedState, setSelectedState ]= useState('')
    

    const onChangeHandler = event => {
        let state = event.target.innerHTML
        setSelectedState(state)

    }

    return(
         <Form
        onSubmit={formObj=>{
            console.log(formObj)
            console.log(selectedState)
        }}
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
                <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            style={{marginTop:'3vh'}}
                            options={states.map((state, key) => state.name)}
                            sx={{ width: '20vw' }}
                            renderInput={(params)=> <Field name="state">{({input})=>(<TextField {...params} label='State' {...input}/>)}</Field> }
                            onChange={onChangeHandler}
                        />
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
                <Button style={{marginTop: '30px'}} variant='contained' type='submit'>Submit</Button>
            </form>
        )}
    </Form>
    )
   
       
}
