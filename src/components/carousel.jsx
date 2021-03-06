import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.jpg';
import logo from "../assets/logo.jpeg";

const HomeCarousel = () => {
    return ( 
        <Carousel interval={2000} fade={true}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider1}
                alt="Third slide"
                />
                <Carousel.Caption>
                <Row className="image-content">
                    <Col sm={1}><img src={logo} alt="logo" width="100px" height="30px"/></Col>
                    <Col sm={5}></Col>
                    <Col sm={6}>
                        <ul className="navbar">
                            <li>Home</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Login</li>
                            <li>Register</li>
                          </ul>
                    </Col>
                    <Col sm={12}><h1>FandeMart</h1></Col>
                </Row>
                <h1 className="gameplay">SHOP</h1><br/><br/><br/>
                <p>FandeMart - Best online shopping store for smartphones, 
                    led smart tv, mobiles & baby care products. Trustworthy 
                    online store for Fashion dresses in Kenya
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider2}
                alt="Third slide"
                />
                <Carousel.Caption>
                <Row className="image-content2">
                    <Col sm={1}><img src={logo} alt="logo" width="100px" height="30px"/></Col>
                    <Col sm={5}></Col>
                    <Col sm={6}>
                        <ul className="navbar">
                            <li>Home</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Login</li>
                            <li>Register</li>
                          </ul>
                    </Col>
                    <Col sm={12}><h1>FandeMart</h1></Col>
                </Row>
                <h1 className="gameplay2">SHOP</h1><br/><br/><br/>
                <p className="description">FandeMart - Best online shopping store for smartphones, 
                    led smart tv, mobiles & baby care products. Trustworthy 
                    online store for Fashion dresses in Kenya
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
     );
}
 
export default HomeCarousel;