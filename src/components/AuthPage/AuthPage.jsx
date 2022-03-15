import { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import SignUpForm from '../SignUpForm/SignUpForm'

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <>

            {showLogin ?
            <div className="vertical">
                <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
                <LoginForm setUser={setUser} />
            </div>
            :
            <div className="vertical">
                <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
                <SignUpForm setUser={setUser} />
            </div>
            }
        </>
    )
}