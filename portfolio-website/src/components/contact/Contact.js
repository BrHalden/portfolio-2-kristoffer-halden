import React from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import $ from 'jquery';

const schema = yup.object().shape({
	fullName: yup.string().min(2).required("Name is required"),
    email: yup.string().email().required("Valid Email is required"),
    message: yup.string().min(10).required("Message must be 10 or more characters long"),
});

export default function Contact (props) {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
        $('.form__accepted').removeClass('hidden');
    }
    return (
        <Container className='contact'>
            <h1 className='contact__header'>Get in Touch</h1>
            <Col>
                    <Form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='header'>Send a message</h3>
                        <Container>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Name:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control name='fullName' placeholder="Write your name here...." ref={register({ required: true })}/>
                                {errors.fullName && <p className="form__error">Name is required</p>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Email:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control name="email" placeholder="Write your email here...." ref={register({ required: true })}/>
                                {errors.email && <p className="form__error">Email is required</p>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Message:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control as='textarea' rows='3' name="message" size='sm' placeholder="Write your message here...." ref={register({ required: true })}/>
                                {errors.message && <p className="form__error">Your message has to be 10 or more characters long.</p>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            
                            </Form.Label>
                            <Col sm={10} className='form__submit'>
                                <Button variant="secondary" type="submit">Submit</Button>
                                <span className="hidden form__accepted">Your message was sent</span>
                            </Col>
                        </Form.Group>
                        </Container>
                    </Form>
                        <h3 className='header'>Contact Information</h3>
                        <Container className='contact__info-container'>
                            <ListGroup variant='flush' className='contact__info'>
                                <ListGroup.Item>kris-b.h@hotmail.com</ListGroup.Item>
                                <ListGroup.Item>Phone: +47 941 95 061</ListGroup.Item>
                                <ListGroup.Item><a href='https://www.facebook.com/kristoffer.halden' className='social-link'>Facebook</a></ListGroup.Item>
                                <ListGroup.Item><a href='https://www.linkedin.com/in/kristoffer-halden-254698193/' className='social-link'>LinkdIn</a></ListGroup.Item>
                                <ListGroup.Item><a href='https://twitter.com/halden_b' className='social-link'>Twitter</a></ListGroup.Item>
                            </ListGroup>
                        </Container>
                </Col>
        </Container>
    )
}