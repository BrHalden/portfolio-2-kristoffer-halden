import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeItem from './HomeItem.js';
import {projects} from '../../constants'
import Proj1Teaser from '../../images/project1-teaser.png';
import Proj2Teaser from '../../images/project2-teaser.png';
import Proj3Teaser from '../../images/project3-teaser.png';




export default function Home (props) {
    return (
        <Container className='page'>
            <h1 className='page__header'>My Projects</h1>
            <p className='page__text'>This is a list conataining some of the projects I have done in the last 2 years. They are all school projects, and are presented here to showcase some of the most important skills I have obtained during the eduacation at Noroff</p>
            <Row className='page__row'>
                <Col md='4'>
                    <div className='page__img-hover-zoom page__img-hover-zoom--colorize'>
                        <a href='#1'><img className='page__project-img' src={Proj1Teaser} /></a>
                    </div>
                    <div className='page__project-info'>
                        <h4>{projects[0].projectName}</h4>
                        <p className='page__project-count'>Project 1</p>
                        <p className='page__project-context'>{projects[0].projectContext}</p>
                    </div>
                </Col>
                <Col md='4'>
                    <div className='page__img-hover-zoom page__img-hover-zoom--colorize'>
                        <a href='#2'><img className='page__project-img' src={Proj2Teaser} /></a>
                    </div>
                    <div className='page__project-info'>
                        <h4>{projects[1].projectName}</h4>
                        <p className='page__project-count'>Project 2</p>
                        <p className='page__project-context'>{projects[1].projectContext}</p>
                    </div>
                </Col>
                <Col md='4'>
                    <div className='page__img-hover-zoom page__img-hover-zoom--colorize page__img3-hover-zoom--colorize'>
                        <a href='#3'><img className='page__project-img' src={Proj3Teaser} /></a>
                    </div>
                    <div className='page__project-info'>
                        <h4>{projects[2].projectName}</h4>
                        <p className='page__project-count'>Project 3</p>
                        <p className='page__project-context'>{projects[2].projectContext}</p>
                    </div>
                </Col>
            </Row>
            <HomeItem></HomeItem>
        </Container>
        
    )
}