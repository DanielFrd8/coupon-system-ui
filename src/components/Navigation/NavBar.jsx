import { Button } from '@material-ui/core'
import React from 'react'
import { Link, Router, useHistory } from 'react-router-dom'
import { jwtStorage, typeStorage, } from '../../api/storage'

export default function NavBar({ items }) {

    const history = useHistory()

    return (
        <div style={{ backgroundColor: '#d9d9d9' }}>
            <Router history={history} >
                {items.map((value, key) =>
                    <Link to={`/${typeStorage.get()}/${value}`} key={key}>
                        <Button>{value}</Button>
                    </Link>
                )}
                <Link to="/">
                    <Button onClick={() => jwtStorage.remove()}>log out</Button>
                </Link>
            </Router>
        </div >
    )
}
