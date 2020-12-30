import React from 'react'
import Header from '../Header/Header'
import Login from '../Login/Login'
import { useRedirectByJwt } from '../../hooks/useAuth'
import Signup from '../Signup/Signup'

export default function Home() {

    useRedirectByJwt()
    const [toggle, setToggle] = React.useState(false)

    return (
        <>
            <Header />
            <button
                onClick={() => setToggle(prev => !prev)}
            >
                {!toggle ? "Signup" : "Login"}
            </button>
            {!toggle ? <Login /> : <Signup />}
            
        </>
    )
}
