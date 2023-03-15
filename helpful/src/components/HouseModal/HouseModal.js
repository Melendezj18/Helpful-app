import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import * as housesAPI from '../../utilities/houses-api'

export default function HouseModal({ show, handleClose, reloadHouses }) {
    const [state, setState] = useState({
        bedroom: '',
        bathroom: '',
        error: ''
    })

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const newHouse = await housesAPI.createHouse(state)
            reloadHouses()
            handleClose()
        } catch {
            setState({
                ...state,
                error: 'Create House Failed'
            })
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create a New House</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicBedroom">
                        <Form.Label>Bedrooms</Form.Label>
                        <Form.Control
                            type="number"
                            name="bedroom"
                            min={0}
                            value={state.bedroom}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicBathroom">
                        <Form.Label>Bathrooms</Form.Label>
                        <Form.Control
                            type="number"
                            name="bathroom"
                            min={0}
                            value={state.bathroom}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

