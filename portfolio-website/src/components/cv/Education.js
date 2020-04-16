import React from 'react';
import Container from "react-bootstrap/Container";
import {CV} from '../../constants';

export default function Education (props) {
    return (
        <Container className='cv__education'>
            <h3 className='cv__header'>Education</h3>
                {CV.CVEducations.map((education, i) => {
                    const {title, duration, classDef, school} = education;
                    console.log(CV)
                    return(
                        <Container className='cv__info-container' key={i}>
                            <p className='cv__title'>{title}</p>
                            <p className='cv__duration'>{duration}</p>
                            <p className='cv__school'>{school}</p>
                            <p className='cv__class'>{classDef}</p>
                        </Container>
                    );
                })}
        </Container>
    )
}