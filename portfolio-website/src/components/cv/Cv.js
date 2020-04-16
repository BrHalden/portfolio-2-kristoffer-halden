import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Cv (props) {
    return (
        <Container>
            <h1>CV Kristoffer B. Halden</h1>
            <Row>
                <h3>Erfaring</h3>
                <div>
                    <h4>Resepsjonist, Kjøkkenassistent</h4><span>Juni 2019 - August 2019</span>
                    <p>Gol Campingsenter</p>
                </div>
            </Row>
        </Container>
    )
}