import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import { BsFillTelephoneInboundFill, BsFillEnvelopeOpenFill, BsCursorFill, BsFacebook, BsInstagram, BsLinkedin, BsGlobe, BsChatDotsFill} from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';


const Contact = () => {

    const addSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const addInfo = {
            name, email, subject, message
        }
        // console.log('addInfo', addInfo);

        fetch(`https://dev-sabbir-server.vercel.app/submit`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(addInfo)
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            toast.success('Message sand.😮 please check your email your answer will be given after a few minutes later📝 Thank you !🥰');
            form.reset('');
        })
    }

    return (
        <div className='p-1 contact-container' id='contact'>
            <h1 className='text-center my-4'><span className='text-success'>যোগাযোগ </span>করুন</h1>
                <hr className='hr1'/>
                <hr className='hr2'/>
            <Container className='my-5'>
                <Row className='mt-5'>
                    <Col md='5' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className='phone'>
                            <h2 className='mt-3'>
                                <span className='text-primary'><BsFillTelephoneInboundFill /></span>
                            </h2>
                            <div>
                                <h2 className='fs-2'>ফোন</h2>
                                <h5 className='text-secondary fs-4'>+8801888-559287</h5>
                            </div>
                        </div>

                        <div className='email'>
                            <h2 className='mt-3'>
                                <span className='text-warning'><BsFillEnvelopeOpenFill /></span>
                            </h2>
                            <div>
                                <h2 className='fs-2'>ইমেইল</h2>
                                <h5 className='text-secondary fs-4'>kp-high-school@gmail.com</h5>
                            </div>
                        </div>

                        <div className='location'>
                            <h2 className='mt-3'>
                                <span className='text-success'><BsCursorFill /></span>
                            </h2>
                            <div>
                                <h2 className='fs-2'>অবস্থান</h2>
                                <h5 className='text-secondary fs-4'>বদরগঞ্জ, রংপুর</h5>
                            </div>
                        </div>

                        <div className='social-link text-center my-2'>
                                <h2 className='social-h2'><a href="#home"><BsGlobe className='text-primary'/></a></h2>

                                <h2 className='social-h2'><a href="https://www.linkedin.com/in/md-sabbir-hossain-18300b244/"><BsLinkedin className='text-primary'/></a></h2>
                                   
                                <h2 className='social-h2'><a href="https://www.facebook.com/misty.sabbir.3/"><BsFacebook className='text-primary'/></a></h2>

                                <h2 className='social-h2'><a href="https://www.instagram.com/dev__sabbir/?fbclid=IwAR0cozEZJSlO_1JIYXtcbxKAPDnTkJ2NDZR9VZCO4m0K8SyknAL3Se-7mqs"><BsInstagram className='text-danger'/></a></h2>
                            </div>
                    </Col>

                    <Col md='7' className='mt-2'>
                    <Form onSubmit={addSubmit}> 
                        <Row>
                            <Col md="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fs-5'>নাম</Form.Label>
                                    <Form.Control name='name' type="text" placeholder="আপনার নাম প্রবেশ করুন..." required/>
                                </Form.Group>
                            </Col>
                            <Col md="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fs-5'>ইমেইল *</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="আপনার ইমেইল প্রবেশ করুন..." required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='fs-5'>বিষয়</Form.Label>
                            <Form.Control name='subject' type="text" placeholder="আপনার বিষয় প্রবেশ করুন..." required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='fs-5'>মেসেজ *</Form.Label>
                            <Form.Control as="textarea" rows={3} name='message' placeholder="আমাদেরকে মেসেজ করুন..." required/>
                        </Form.Group>
                        
                        <button type="submit" className='my-3 btn outline btn-primary'>মেসেজ পাঠান <BsChatDotsFill className='text-warning'/></button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;