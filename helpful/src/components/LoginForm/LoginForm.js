import { useState } from 'react'
import { logIn } from '../../utilities/users-service'

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const user = await logIn(credentials)
            setUser(user)
        } catch {
            setError('Log In Failed - Try Again')
        }
    }

    return (
        <div className="LoginForm">
            <h1>Log In</h1>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={credentials.email}
                        onChange={e => setCredentials(c => ({ ...c, email: e.target.value }))}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={credentials.password}
                        onChange={e => setCredentials(c => ({ ...c, password: e.target.value }))}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Log In</button>
                </div>
            </form>
            <p>{error}</p>
        </div>
    )
}