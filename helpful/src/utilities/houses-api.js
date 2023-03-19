import sendRequest from "./users-api";

// const BASE_URL = 'http://127.0.0.1:8000/helpful_app/houses/'
const BASE_URL ='https://helpful-server.onrender.com/helpful_app/houses/'

export async function getAll() {
    return sendRequest(BASE_URL)
}

export async function createHouse(house) {
    console.log(house)
    const res = await sendRequest(`${BASE_URL}`, 'POST', house)
    console.log(house)
    if (res.status === 201) {
        return res.json()
    } else {
        throw new Error('Creating a house failed')
    }
}

export async function updateHouse(houseid,house) {
    console.log(house)
    console.log(houseid)
    return sendRequest(`${BASE_URL}${houseid}/`, 'PATCH', house)
}

export async function deleteHouse(house) {
    return sendRequest(`${BASE_URL}${house.id}`, 'DELETE')
}

export default async function showHouse(id) {
    return sendRequest(`${BASE_URL}${id}`)
}