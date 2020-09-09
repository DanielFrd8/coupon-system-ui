import React from 'react'
import classes from './Home.module.css'
import Header from '../Header/Header'
import Login from '../Login/Login'
import { useHistory } from 'react-router-dom'
import { useRedirectByJwt } from '../../hooks/useAuth'

export default function Home() {

    useRedirectByJwt()

    return (
        <>
            <Header/>
            <Login/>
        </>
    )
}
