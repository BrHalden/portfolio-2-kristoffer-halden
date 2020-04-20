import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CV} from '../../constants';

export default function Skills(props) {
    return (
        <Container>
            <h3 className='cv__header'>Skills</h3>
            <Container>
                <Row>
                    <Col>
                        <p className='cv__title cv__title--pd-bot'>Known Languages:</p>
                        <div>
                            <Container>
                                <Row>
                                    {CV.languages.map((language, i) => {
                                        return (
                                            <Col md='5' key={i + 'language'}>
                                                <p  className='cv__skill-item'>{language}</p>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Container>
                        </div>
                    </Col>
                    <Col>
                        <p className='cv__title cv__title--pd-bot'>Technical skills:</p>
                        <div>
                        <Container>
                            <Row>
                                {CV.technicalSkills.map((skills, i) => {
                                    return (
                                        <Col md='5' key={i + 'tech'}>
                                            <p  className='cv__skill-item'>{skills}</p> 
                                        </Col>
                                    )
                                })}
                                
                            </Row>
                        </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
