import React from 'react';

import './Button.css';

const Button = props => {
    const {title, onClick, isLoading} = props;

    return (
        <>
            <button className='button' onClick={onClick}>{isLoading ? 'loading' : title}</button>
        </>
    )
}

export default Button;