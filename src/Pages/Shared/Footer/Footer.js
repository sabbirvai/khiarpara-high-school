import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../Images/logo/logo.png'
import { BsBadgeCc, BsGithub, BsGlobe, BsPenFill, BsLinkedin } from 'react-icons/bs';
import footer from '../../../Images/logo/footer.png'
import './Footer.css';


const Footer = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    return (
        <div className='bg-dark text-light p-1' style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <Container className='py-5 px-5'>
                <Row className='mx-auto'>
                    <Col md="3">
                        <h2 className='mx-auto text-center fs-3'>QUICK LINKS</h2>
                            <hr className='hr2'/>
                        <div className='mx-auto text-center'>
                            <a className='menu-link' href="#home"><h5 className='mx-2 nav-link text-secondary'>Home</h5>
                            </a>

                            <a className='menu-link' href="#about"><h5 className='mx-2 nav-link text-secondary'>About</h5>
                            </a>

                            <a className='menu-link' href="#skills"><h5 className='mx-2 nav-link text-secondary'>Skills</h5>
                            </a>

                            <a className='menu-link' href="#projects"><h5 className='mx-2 nav-link text-secondary'>Projects</h5>
                            </a>

                            <a className='menu-link' href="#blogs"><h5 className='mx-2 nav-link text-secondary'>Blogs</h5>
                            </a>
                            
                            <a className='menu-link' href="#contact"><h5 className='mx-2 nav-link text-secondary'>Contact</h5>
                            </a>
                            <a href="sabbir-hossain.pdf" download='sabbir-hossain.pdf'><button type='submit' className='btn btn-sm btn-warning mx-2 my-1 fs-5 menu-link'>Resume</button></a>
                        </div>      
                    </Col>
                    <Col md="3">
                        <h2 className='mx-auto text-center fs-3'>Contact Us</h2>
                        <hr className='hr2'/>
                        <div className='mx-auto text-center'>
                            <p className='fs-5 text-secondary'>+8801888559287</p>
                            <p className='fs-5 text-secondary'>+8801719228487</p>
                            <p className='fs-5 text-secondary'>mdsabbir477470@gmail.com</p>
                        </div>
                    </Col>
                    <Col md="3">
                        <div>
                            <h4 className='mx-auto text-center fs-3'>We Are Provide</h4>
                            <hr className='hr2'/>
                            <div className='mx-auto text-center'>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>JavasScript</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>UI Design</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>React</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>Node JS</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>MongoDB</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>Express</h3></a>
                            </div>
                        </div>
                    </Col>
                    <Col md="3" className='mx-auto text-center'>
                        <h2 className='mx-auto text-center'>KPHS</h2>
                        <hr className='hr2'/>
                        <img src={logo} alt="aws" className='img-fluid rounded kphs' />
                        <div className='social-link mx-5 text-center mt-3'>
                                <h2 className='social-h2'><a href="https://dev-sabbir.web.app"><BsGlobe className='text-primary'/></a></h2>

                                <h2 className='social-h2'><a href="https://github.com/sabbirvai"><BsGithub className='text-secondary'/></a></h2> 

                                <h2 className='social-h2'><a href="https://www.linkedin.com/in/md-sabbir-hossain-18300b244/"><BsLinkedin className='text-primary'/></a></h2>
                            </div>
                    </Col>
                </Row>
                <div className='text-light text-center mt-3'>
                    <h5>Created By Khiar Para High School    <BsBadgeCc className='text-warning mx-1'/> <span className='text-primary mx-2'>{formattedToday}</span>  All rights reserved {new Date().getFullYear()}. <BsPenFill className='text-success'/></h5>
                </div>
            </Container>
        </div>
    );
};

export default Footer;