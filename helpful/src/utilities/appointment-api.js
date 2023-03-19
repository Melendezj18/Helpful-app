import sendRequest from "./users-api"

// const BASE_URL = 'http://127.0.0.1:8000/helpful_app/appointments/'
const BASE_URL ='https://helpful-server.onrender.com/helpful_app/appointments/'

export async function getAppointments() {
    return sendRequest(BASE_URL)
}

export async function createAppointment(appointment) {
    return sendRequest(BASE_URL, 'POST', appointment)
}

export async function updateAppointment(appointment) {
    return sendRequest(`${BASE_URL}${appointment.id}`, 'PATCH', appointment)
}

export async function deleteAppointment(appointment) {
    return sendRequest(`${BASE_URL}${appointment.id}`, 'DELETE')
}
