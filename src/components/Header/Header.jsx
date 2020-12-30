import React from 'react'

export default function Header() {
    const [username,setUsername] =React.useState('')
    return (
        <div>
            <h1>Hello {!username ? "guest" : username}</h1>
        </div>
    )
}
