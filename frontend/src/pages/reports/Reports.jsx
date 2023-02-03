
import {Container, Row, Col } from 'react-grid-system';
import './Reports.css';

const Reports = () => {
  return (
    <>
            <Row >
                <Col className='report-title' xs={12} sm={12} md={12} lg={12}>Reports</Col>
            </Row>           
               
            <Row >
               
                <Col className='left-side' xs={12} sm={12} md={6} lg={6}>Left</Col>
                <Col className='left-side' xs={12} sm={12} md={6} lg={6}>Right</Col> 
            </Row>
    </>
  )
}

export default Reports;



