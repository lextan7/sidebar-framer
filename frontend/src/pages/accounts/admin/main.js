import React from 'react';

import {Container, Row, Col } from 'react-grid-system';
import './main.css' 

import Form from './form';
import Table from './table'

const CreateAdmin = () => {
  return (
    <>
        <div className='table-container'>
           
            <Row >
                {/*
                <Col xs={12} sm={12} md={8} lg={8}><Table/></Col>
                <Col xs={12} sm={12} md={4} lg={4}><Form /></Col> 
                */ }
                <Col lg={8}><Table/></Col>
                <Col lg={4}><Form /></Col> 
            </Row>
        </div>
    </>
  )
}

export default CreateAdmin