import "./AuthPage.css"
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpModal from "../../components/SignUpModal/SignUpModal"
import { Button } from 'react-bootstrap'
import { useState } from "react"

export default function AuthPage({ user, setUser }) {
    const [showSignupModal, setShowSignupModal] = useState(false)

    const handleCloseSignupModal = () => setShowSignupModal(false)
    const handleShowSignupModal = () => setShowSignupModal(true)



    return (
        <div className="AuthPage">
            <h1 className="Landing Title">Helpful Services</h1>
            <LoginForm setUser={setUser} />
            <Button className="SignUpButton"variant="primary" onClick={handleShowSignupModal}>
            Sign up
            </Button>
            <SignUpModal show={showSignupModal} handleClose={handleCloseSignupModal} setUser={setUser} />
        </div>
    )

}