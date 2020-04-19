import React from 'react';
import Container from "react-bootstrap/Container";
import HomeItem from './HomeItem.js'

export default function Home (props) {
    return (
        <Container className='page'>
            <h1 className='page__header'>My Projects</h1>
            <p className='page__text'>This is a list conataining some of the projects I have done in the last 2 years. They are all school projects, and are presented here to showcase some of the most important skills I have obtained during the eduacation at Noroff</p>
            <HomeItem></HomeItem>
        </Container>
        
    )
}