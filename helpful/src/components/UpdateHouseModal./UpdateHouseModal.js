import { Button, Modal, Form } from "react-bootstrap"
import * as housesAPI from '../../utilities/houses-api'
import { useState, useEffect } from "react"

export default function UpdateHouseModal({ show, handleClose, onHousesUpdated, userId, house }) {
    const [state, setState] = useState({
        bedroom: house ? house.bedroom : 0,
        bathroom: house ? house.bathroom : 0,
        error: '',
    })

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log("House object:", house)
        try {
            await housesAPI.updateHouse(house.id, { ...state, owner: userId })
            handleClose()
            onHousesUpdated()
        } catch {
            setState({
                error: 'Update House Failed - Try Again',
            })
        }
    }

    return house ? (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update House</Modal.Title>
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
                        Update House
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    ) : null
}
