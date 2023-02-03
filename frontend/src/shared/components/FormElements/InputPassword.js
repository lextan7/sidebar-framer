import React, { useState } from 'react'

const InputPassword = props => {
    const {name, label} = props;

    const inputHandler = (e) => {
        console.log('value',e.target.value)
        console.log('name',e.target.name)
    }

    return (
        <>
            <input 
                type='password'
                className='input' 
                name='password' 
                onChange={inputHandler} 
                label={label}
                autoComplete="new-password"
            />
        </>
    )
}

export default InputPassword