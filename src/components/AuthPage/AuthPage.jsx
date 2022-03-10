import { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import SignUpForm from '../SignUpForm/SignUpForm'

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <>

            <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
            {showLogin ?
                <LoginForm setUser={setUser} />
                :
                <SignUpForm setUser={setUser} />
            }
        </>
    )
}