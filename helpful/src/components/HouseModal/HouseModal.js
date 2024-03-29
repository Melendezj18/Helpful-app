import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import * as housesAPI from '../../utilities/houses-api'

export default function HouseModal({ show, handleClose, onHousesUpdated, userId }) {
    const [state, setState] = useState({
        bedroom: 0,
        bathroom: 0,
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
            await housesAPI.createHouse({ ...state, owner: userId })
            handleClose()
            onHousesUpdated()
        } catch {
            setState({
                error: 'Create House Failed - Try Again',
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