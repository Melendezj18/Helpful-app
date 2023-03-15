import React, { Component } from 'react'
import { signUp } from '../../utilities/users-service'
import { Modal, Button, Form } from 'react-bootstrap'

export default class SignUpModal extends Component {

    state = {
        email: "",
        password: "",
        password_confirmation: "",
        error: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: "",
        }, () => this.validateForm())
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        if (this.state.password !== this.state.password_confirmation) {
            this.setState({
                error: "Passwords do not match",
            })
            return
        }
        try {
            await signUp(this.state)
            this.props.handleSignUpOrLogin()
        } catch {
            this.setState({
                error: "Sign Up Failed - Try Again",
            })
        }
    }

    validateForm = () => {
        const { email, password, password_confirmation } = this.state
        this.setState({
            validForm: email && password && (password === password_confirmation),
        })
    }

    render() {
        const { show, handleClose } = this.props
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form autoComplete="off" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password_confirmation"
                                value={this.state.password_confirmation}
                                onChange={this.handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={!this.state.validForm}>
                            Sign Up
                        </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.hide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
