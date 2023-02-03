import React from 'react';

import {Container, Row, Col } from 'react-grid-system';
import './main.css' 

import Table from './table'

const EnableEditingRow = () => {
  return (
    <>
        <div className='table-container'>
           
            <Row >
                {/*
                <Col xs={12} sm={12} md={8} lg={8}><Table/></Col>
                <Col xs={12} sm={12} md={4} lg={4}><Form /></Col> 
                */ }
                <Col lg={12}><Table/></Col>
            </Row>
        </div>
    </>
  )
}

export default EnableEditingRow