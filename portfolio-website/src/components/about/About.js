import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FigureImage from 'react-bootstrap/FigureImage'
import portrait from '../../images/port.jpg';
import {aboutInfo} from '../../constants'


export default function About (props) {
    const {name, age, origin, city, job} = aboutInfo;
    return (
        <Container className='about'>
            <Row>
                <Col sm={4} md={4} lg={4}>
                    <FigureImage 
                        width='auto'
                        height='100%'
                        src={portrait}
                        alt='Portrait'
                    />
                </Col>
                <Col sm={8} md={8} lg={8}>
                    <h1>About me</h1>
                    <p>My name is {name}. I'm {age} years old and grew up in {origin} Norway, currently located in {city}, and have been for close to 4 years. I'm studying frontend development and working part time as {job}. Soon to finish my education as front-end developer at Noroff, I'm looking forward to applying for jobs in the web industry. </p>
                </Col>
            </Row>
        </Container>
    )
}