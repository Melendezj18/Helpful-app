import HouseModal from "../../components/HouseModal/HouseModal"
import UpdateHouseModal from "../../components/UpdateHouseModal./UpdateHouseModal"
import { useState, useEffect } from "react"
import { Button, Table } from "react-bootstrap"
import * as housesAPI from '../../utilities/houses-api'

export default function Homes({ userId, userName }) {
    const [showAddHouseModal, setShowAddHouseModal] = useState(false)
    const [houses, setHouses] = useState([])
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [selectedHouse, setSelectedHouse] = useState(null)

    useEffect(() => {
        async function getHouses() {
            const response = await housesAPI.getAll()
            const houses = response.houses
            console.log("Single house object:", houses[0])
            setHouses(houses)
        }
        getHouses()
    }, [])


    function handleCloseAddHouseModal() {
        setShowAddHouseModal(false)
    }

    function handleShowAddHouseModal() {
        setShowAddHouseModal(true)
    }

    function handleShowUpdateModal(house) {
        setSelectedHouse(house)
        setShowUpdateModal(true)
    }
    async function handleDeleteClick(house) {
        try {
            const response = await housesAPI.deleteHouse(house)
            reloadHouses()
            if (response === null) {
                console.warn("Server responded with a empty content")
            } else {
                reloadHouses()
            }
        } catch (error) {
            console.error("Error in handleDeleteClick:", error)
        }
    }


    async function reloadHouses() {
        const response = await housesAPI.getAll()
        const houses = response.houses
        setHouses(houses)
    }


    return (
        <div>
            <h1>YourHomes Page</h1>
            <Button onClick={handleShowAddHouseModal}>Add a New House</Button>
            <HouseModal
                show={showAddHouseModal}
                handleClose={handleCloseAddHouseModal}
                onHousesUpdated={reloadHouses}
                userId={userId}
            />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Bedroom</th>
                        <th>Bathroom</th>
                        <th>Owner</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((house) => (
                        <tr key={house.id}>
                            <td>{house.bedroom}</td>
                            <td>{house.bathroom}</td>
                            <td>{house.owner}</td>
                            <td>
                                <Button onClick={() => handleShowUpdateModal(house)}>Update</Button>
                                <UpdateHouseModal
                                    show={showUpdateModal}
                                    handleClose={handleShowUpdateModal}
                                    house={selectedHouse}
                                    onHousesUpdated={reloadHouses}
                                    userId={userId}
                                />
                                <Button variant="danger" onClick={() => handleDeleteClick(house)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}