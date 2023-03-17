import { useState } from 'react'
import { logIn } from '../../utilities/users-service'
import './LoginForm.css'

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
        <div className="form-container">
            <h1 className='LogIn Header'>Log In</h1>
            <form autoComplete="off" onSubmit={handleSubmit}>
                    <label className='login-labels'>Email</label>
                    <input
                        type="email"
                        value={credentials.email}
                        onChange={e => setCredentials(c => ({ ...c, email: e.target.value }))}
                        required
                    />
                    <label className='login-labels'>Password</label>
                    <input
                        type="password"
                        value={credentials.password}
                        onChange={e => setCredentials(c => ({ ...c, password: e.target.value }))}
                        required
                    />
                <div>
                    <button type="submit">Log In</button>
                </div>
            </form>
            <p className='error-message'>{error}</p>
        </div>
    )
}