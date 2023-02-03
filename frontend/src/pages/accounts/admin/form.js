import React, { useState, useEffect } from 'react';
import {Container, Row, Col } from 'react-grid-system';

import Button from '../../../shared/components/FormElements/Button';
import { useFetch } from '../../../shared/components/Hook/http_hook';


import './main.css';

const Form = () => {
    const { sendRequest } = useFetch();
    const [loggedMessage, setLoggeedMessage] = useState();

    const [isLoading, setLoading] = useState(false)

    const [formState, setFormState] = useState({
        firstName: {value: null, name: null, isValid: false},
        lastName: {value: null, name: null, isValid: false},
        contact: {value: null, name: null, isValid: false},
        email: {value: null, name: null, isValid: false},
        username: {value: null, name: null, isValid: false},
        password: {value: null, name: null, isValid: false},
        confirm: {value: null, name: null, isValid: false},
    });

    // LLT const [otp, setOTP] = useState()
    // alert('Lex');

    const inputHandler = (e) => {
        setFormState( formValue => {
            return {
                ...formValue,
                [e.target.name]: {value: e.target.value, name: e.target.value, isValid: true},
            }
        })
    }
    
    useEffect(() => {
        console.log(formState);
    }, [formState])

    const submitHandler = async() => {
          try{
            setLoading(true);
            const details = {
                firstName: formState.firstName.value,
                lastName: formState.lastName.value,
                contact: formState.contact.value,
                email: formState.email.value,
                username: formState.username.value,
                password: formState.password.value,
                confirm: formState.password.value,
            }

            if(details.password !== details.confirm) return setLoggeedMessage({error: 'Password not match'})

            const result = await sendRequest('/create/admin', 'POST', details);
            setLoading(false);

            if(result && result.error) return setLoggeedMessage({error: result.error})
        }catch(e){
            setLoading(false);
            console.log(e)
            setLoggeedMessage({error: e.message})
        }
    }


    return (
      <>
        <div className='card'>
          <div className='account-header'>Create Admin Account</div>
          {loggedMessage && loggedMessage.error}
          <Row>
            <Col>
              <input 
                  type='text'
                  className='input' 
                  name='firstName' 
                  placeholder='First Name'
                  onChange={inputHandler} 
                  autoComplete="off"
              />
            </Col>
            <Col>
              <input 
                  type='text'
                  className='input' 
                  name='lastName' 
                  placeholder='Last Name'
                  onChange={inputHandler} 
                  autoComplete="off"
              />
            </Col>

          </Row>
          <input 
              type='number'
              className='input' 
              name='contact' 
              placeholder='Contact Number'
              onChange={inputHandler} 
              autoComplete="off"
          />
          <input 
              type='text'
              className='input' 
              name='email' 
              placeholder='Email address'
              onChange={inputHandler} 
              autoComplete="off"
          />

          <input 
              type='text'
              className='input' 
              name='username' 
              placeholder='Username'
              onChange={inputHandler} 
              autoComplete="off"
          />

          <Row>
            <Col>
              <input 
                  type='password'
                  className='input' 
                  name='password' 
                  placeholder='Password'
                  onChange={inputHandler} 
                  autoComplete="off"
              />
            </Col>
            <Col>
              <input 
                  type='password'
                  className='input' 
                  name='confirm' 
                  placeholder='Confirm Password'
                  onChange={inputHandler} 
                  autoComplete="off"
              />
            </Col>
          </Row>
              
              
              <Button 
                  title='Register' 
                  onClick={submitHandler} 
                  isLoading={isLoading}
              />
        </div>
      </>
    )
}

export default Form