import React from 'react';
import Container from "react-bootstrap/Container";
import {CV} from '../../constants';
import Experience from '../cv/Experience';
import Education from '../cv/Education';
import Courses from '../cv/Courses';
import Skills from '../cv/Skills';

export default function Cv (props) {
    return (
        <Container className='cv'>
            <div className='cv__initial-info'>
                <h1>{CV.name}</h1>
                <p>{CV.adress}</p>
                <p>{CV.mobile} | {CV.email}</p>
                <p>{CV.born}</p>
            </div>
            <Experience />
            <Education />
            <Courses />
            <Skills />
        </Container>
    )
}