import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './Contact.css'
import * as emailjs from 'emailjs-com'
import {Modal} from 'react-bootstrap'

class Contact extends React.Component{
    
        constructor(props){
            super(props);
            this.state = {
                name: '',
                email: '',
                subject: '',
                message: '',
                show_modal: false,
                message_valid: false,
            }
        }

        handleChange = (param, e) => {
            this.setState({ [param]: e.target.value })
        }
    
        handleModalClose = () => {
            this.setState({show_modal: false})
        }
        
        handleModalShow = () => {
            this.setState({show_modal: true})
        }

    handleSubmit(e){
        e.preventDefault()

        const {name, email, subject, message} = this.state

        let templateParams = {
            from_name: email,
            to_name: 'zweyannaing101@gmail.com',
            subject: subject,
            message: message,
        }

        if(
            this.state.name.trim() != "" &&
            this.state.email.trim() != "" &&
            this.state.subject.trim() != "" &&
            this.state.message.trim() != ""
            ){
                emailjs.send(
                    'service_ra98z1y',
                    'template_mi821c6',
                    templateParams,
                    'user_UDHvEzf6GB71qn2PlU0aD'
                ).then(function(response){
                    console.log('SUCCESS', response.status, response.text);
                }, function(error){
                    console.log('FAILED', error)
                })
                this.handleModalShow()
                this.resetForm()
            }
        else{
            alert("Please fill the form.")
        }
        

    }

    resetForm(){
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }
    
    render(){

        return(
            <div className="contact-box shadow">
                <h3 align="center">Contact&ensp;Me</h3>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" value={this.state.name} type="text" placeholder="Enter Name" onChange={this.handleChange.bind(this, 'name')}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control name="email" value={this.state.email} type="email" placeholder="Enter Email" onChange={this.handleChange.bind(this, 'email')}/>
                        <Form.Text className="text-muted">
                            Your email will not be shared.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control name="subject" value={this.state.subject} type="text" placeholder="Enter Subject" onChange={this.handleChange.bind(this, 'subject')}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control name="message" value={this.state.message} as="textarea" rows={3} placeholder="Enter Message" onChange={this.handleChange.bind(this, 'message')} />
                    </Form.Group>
                    <Button variant="outline-dark" type="submit">
                        Submit
                    </Button>
                </Form>
                <Modal show={this.state.show_modal} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Message Sent</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thank you so much, Have a great day !.</Modal.Body>
                    <Modal.Footer>
                    <Button variant="dark" onClick={this.handleModalClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Contact