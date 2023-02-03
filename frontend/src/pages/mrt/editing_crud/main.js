
import React from 'react';

import {Container, Row, Col } from 'react-grid-system';
import './main.css' 

import Table from './table'

const EditingCrud = () => {
  return (
    <>
        <div className='table-container'>
           
            <Row >
                <Col lg={12}><Table/></Col>
            </Row>
        </div>
    </>
  )
}

export default EditingCrud
