import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FigureImage from 'react-bootstrap/FigureImage'
import portrait from '../../images/port.jpg'
import {CV} from '../../constants'

export default function About (props) {
    console.log(CV)
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
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </Col>
            </Row>
        </Container>
    )
}