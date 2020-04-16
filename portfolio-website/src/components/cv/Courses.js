import React from 'react';
import {CV} from '../../constants';
import Container from 'react-bootstrap/Container';

export default function Courses (props) {
    return (
        <Container className='cv__courses'>
            <h3 className='cv__header'>Courses</h3>
                {CV.courses.map((course, i) => {
                    const {title, supplier, details} = course;
                    return(
                        <Container className='cv__info-container' key={i}>
                            <p className='cv__title'>{title}</p>
                            <p className='cv__supplier cv__employer'>{supplier}</p>
                            <p className='cv__details'>{details}</p>
                        </Container>
                    );
                })}
        </Container>
    )
}