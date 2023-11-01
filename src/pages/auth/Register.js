import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from '../../styles/Register.module.css'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

const Register = () => {
  return (
    <Row className={styles.Register}>
        <Col className=" py-2 p-md-2" md={5}>
            <Container className='p-4'>
                <h1>Sign up and listen</h1>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label className="d-none">Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" />
                    </Form.Group>
                    <Form.Group controlId="username">
                        <Form.Label className="d-none">Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" name="username" />
                    </Form.Group>
                    <Form.Group controlId="password1">
                        <Form.Label className="d-none">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password1" />
                    </Form.Group>
                    <Form.Group controlId="password2">
                        <Form.Label className="d-none">Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" name="password2" />
                    </Form.Group>
                    <Button type='submit' className={`${styles.RegisterBtn} ${styles.RegisterBtnShape}`}>
                        Register
                    </Button>
                </Form>
            </Container>
            <Container className={styles.alreadyLogin}>
                <Link to='/login' style={{textDecoration: 'none'}}>
                    <h6>Already have an account? <span>Sign in</span></h6>
                </Link>
            </Container>
        </Col>
        <Col md={6} className="my-auto d-none d-md-block p-2">

        </Col>
    </Row>
  )
}

export default Register