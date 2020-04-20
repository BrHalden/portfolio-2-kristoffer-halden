import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FigureImage from 'react-bootstrap/FigureImage'
import portrait from '../../images/portrait.jpg';
import {aboutInfo} from '../../constants'


export default function About (props) {
    const {name, age, origin, city, job} = aboutInfo;
    return (
        <Container className='about'>
            <h3 className='header'>About me</h3>
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
                    <Row>
                        <Col md='6'>
                        <p className='about__text'>My name is {name}. I'm {age} years old and grew up in {origin} Norway, currently located in {city}, and have been for close to 4 years. I'm studying frontend development and working part time as {job}. Soon to finish my education as front-end developer at Noroff, I'm looking forward to applying for jobs in the web industry. </p>
                        </Col>
                        <Col md='6'>
                        <p className='about__text'>I have always been drawn to the computer and the thought of one shared platform that connects the world like the World Wide Web does. It is and will continue to be the way of the future. I was intrigued and would like to contribute to this platform. So starting my education at Noroff seemed like the right first step.</p>
                        </Col>
                        <Col md='6'>
                        <p className='about__text'>Where I grew up, there are alot of smaller privately owned companies. Most of these companies have either no website, outdated websites or simple template websites. The tought of being able to travel home and be able to provide these local companies with personalized, well functioning websites that make their everyday easier to manage, has been a very motivating factor these last years.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}