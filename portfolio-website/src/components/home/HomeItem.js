import React, { isValidElement } from 'react';
import Container from 'react-bootstrap/Container';
import {projects} from '../../constants.js';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Carousel from 'react-bootstrap/Carousel'
import img from '../../images/img.jpg';
import project1Img1 from '../../images/project1-img1.png'
import project1Img2 from '../../images/project1-img2.png'
import project1Img3 from '../../images/project1-img3.png'
import project2Img1 from '../../images/project2-img1.png'
import project2Img2 from '../../images/project2-img2.png'
import project2Img3 from '../../images/project2-img3.png'
import project3Img1 from '../../images/project3-img1.png'
import project3Img2 from '../../images/project3-img2.png'
import project3Img3 from '../../images/project3-img3.png'


export default function HomeItem (props) {
    
    return (
        projects.map((project, i) => {
            const {projectName, pojectContext, introText, bulkText, processText, conclutionText, id} = project;
            const projectImg = [
                [
                    project1Img1,
                    project2Img1,
                    project3Img1
                ],
                [
                    project1Img2,
                    project2Img2,
                    project3Img2
                ],
                [
                    project1Img3,
                    project2Img3,
                    project3Img3
                ]
            ]
            return (
                <div className='home' key={i} id={id}>
                    <h3 className='home__header'>{projectName}</h3>
                    <p className='home__intro-text'>{introText}</p>
                    <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
                        <Tab className='home__tab' eventKey="general" title="General">
                            <p className='home__bulk-text'>{bulkText}</p>
                        </Tab>
                        <Tab className='home__tab' eventKey="Process" title="Process">
                            <p className='home__process-text'>{processText}</p>
                        </Tab>
                        <Tab className='home__tab' eventKey="Conclution" title="Conclution">
                            <p className='home__conclution-text'>{conclutionText}</p>
                        </Tab>
                    </Tabs>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 carousel__image"
                            src={projectImg[0][id - 1]}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 carousel__image"
                            src={projectImg[1][id - 1]}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 carousel__image"
                            src={projectImg[2][id - 1]}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            )
        })
    )
}