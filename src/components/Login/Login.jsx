import React from 'react'
import classes from './Login.module.css'
import { typeStorage, jwtStorage, } from "../../api/storage";
import { fetchWithBody } from '../../api/fetch';
import { useHistory } from 'react-router-dom';

export default function Login(props) {

    const history = useHistory()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [type, setType] = React.useState('admin')

    React.useEffect(() => {
        const userType = typeStorage.get()
        if (userType) {
            setType(userType)
        }
    }, [])

    return (
        <>
            <div className={classes.container}>
                <h1 className={classes.header}>Login</h1>
                <input
                    className={classes.email}
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className={classes.password}
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <select
                    className={classes.type}
                    value={type}
                    onChange={e => {
                        setType(e.target.value)
                        typeStorage.set(e.target.value)
                    }}>
                    <option value="company">Company</option>
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                </select>
                <button
                    className={classes.login}
                    disabled={!email && !password}
                    onClick={() => {
                        fetchWithBody(`http://localhost:8080/${type}/authenticate`, { email, password })('POST')
                            .then(({ success, content, }) => {
                                if (success) {
                                    jwtStorage.set(content)

                                    history.push(`/${type}`)
                                } else {
                                    history.push('/error')
                                }
                            })
                            .catch(error => console.error("!!!", error))
                    }}
                >
                    Login
                </button>
            </div>
        </>
    )
}
