import React from 'react'
import classes from './Header.module.css'

export default function Header() {
    const [username,setUsername] =React.useState('')
    return (
        <div className={classes.header}>
            <h1>Hello {!username ? "guest" : username}</h1>
        </div>
    )
}
