import sendRequest from "./users-api";

const BASE_URL = 'http://127.0.0.1:8000/helpful_app/houses/'

export async function getAll() {
    return sendRequest(BASE_URL)
}

export async function createHouse(house) {
    return sendRequest(`${BASE_URL}`, 'POST', house)
}

export async function updateHouse(house) {
    return sendRequest(`${BASE_URL}${house.id}`, 'PATCH', house)
}

export async function deleteHouse(house) {
    return sendRequest(`${BASE_URL}${house.id}`, 'DELETE')
}

export default async function showHouse(id) {
    return sendRequest(`${BASE_URL}${id}`)
}