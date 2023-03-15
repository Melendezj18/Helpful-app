import { getToken } from "./users-service"

const BASE_URL = 'http://127.0.0.1:8000/helpful_app/' || 'http://localhost:8000/helpful_app/'


export async function signUp(userData) {

    return sendRequest(BASE_URL + "sign-up/", "POST", userData)
}

export async function logIn(credentials) {

    return sendRequest(BASE_URL + "sign-in/", "POST", credentials)
}

export default async function sendRequest(url, method="GET", payload=null) {
    const options = { method }
    if (payload){
        options.headers = { "Content-Type": "application/json" }
        options.body = JSON.stringify(payload)
    }
    const token = getToken()
    if(token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Token ${token}`
    }
    const res = await fetch(url, options)
    if(res.ok) {
        return res.json()
    } else {
        throw new Error("Bad Request")
    }
}