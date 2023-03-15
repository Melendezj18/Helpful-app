import HouseModal from "../../components/HouseModal/HouseModal"
import { useState, useEffect } from "react"
import { Button, Table } from "react-bootstrap"
import * as housesAPI from '../../utilities/houses-api'

export default function Homes() {
    const [showAddHouseModal, setShowAddHouseModal] = useState(false)
    const [houses, setHouses] = useState([])

    // Load all houses on component mount
    useEffect(() => {
        async function getHouses() {
            const response = await housesAPI.getAll()
            const houses = response.houses
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

    async function handleUpdateClick(house) {
        const updatedHouse = await housesAPI.updateHouse(house)
        const newHousesArray = houses.map(h => h.id === updatedHouse.id ? updatedHouse : h)
        setHouses(newHousesArray)
    }

    async function handleDeleteClick(house) {
        await housesAPI.deleteHouse(house)
        setHouses(houses.filter(h => h.id !== house.id))
    }


    return (
        <div>
            <h1>YourHomes Page</h1>
            <Button onClick={handleShowAddHouseModal}>Add a New House</Button>
            <HouseModal
                show={showAddHouseModal}
                handleClose={handleCloseAddHouseModal}
            />
            <Table>
                <thead>
                    <tr>
                        <th>Bedroom</th>
                        <th>Bathroom</th>
                        <th>Owner</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(houses)}
                    {houses.map((house) => (
                        <tr key={house.id}>
                            <td>{house.bedroom}</td>
                            <td>{house.bathroom}</td>
                            <td>{house.owner}</td>
                            <td>
                                <Button onClick={() => handleUpdateClick(house)}>Update</Button>{" "}
                                <Button variant="danger" onClick={() => handleDeleteClick(house)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}