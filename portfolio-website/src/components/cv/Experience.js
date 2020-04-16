import React from 'react';
import {CV} from '../../constants';
import Container from 'react-bootstrap/Container';

export default function Experience (props) {
    return (
        <Container className='cv__experience'>
            <h3 className='cv__header'>Experience</h3>
                {CV.CVExperiences.map((experience, i) => {
                    const {title, duration, employer, details} = experience;
                    return(
                        <Container className='cv__info-container' key={i}>
                            <p className='cv__title'>{title}</p>
                            <p className='cv__duration'>{duration}</p>
                            <p className='cv__employer'>{employer}</p>
                            <p className='cv__details'>{details}</p>
                        </Container>
                    );
                })}
        </Container>
    )
}