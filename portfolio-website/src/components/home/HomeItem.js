import React, { isValidElement } from 'react';
import Container from 'react-bootstrap/Container';
import {projects} from '../../constants.js';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Carousel from 'react-bootstrap/Carousel'
import img from '../../images/img.jpg' 

export default function HomeItem (props) {
    return (
        projects.map((project, i) => {
            const {projectName, pojectContext, introText, bulkText, processText, conclutionText, image1, image2, imageCarousel, id} = project;
            console.log(projectName)
            return (
                <div className='home' key={i}>
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
                            src={img}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 carousel__image"
                            src={img}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 carousel__image"
                            src={img}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            )
        })
    )
}