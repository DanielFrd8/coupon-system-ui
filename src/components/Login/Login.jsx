import React from 'react'
import { typeStorage, jwtStorage, } from "../../api/storage";
import { fetchWithBody } from '../../api/fetch';
import { useHistory } from 'react-router-dom';

export default function Login() {

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
            <div style={{display:'flex',flexDirection: 'column',width:'160px'}}>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <select
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
                    disabled={!email && !password}
                    onClick={() => {
                        console.log({ email, password })
                        fetchWithBody(`http://localhost:8080/${type}/authenticate`, { email, password },false)('POST')
                            .then(({ success, content, }) => {
                                if (success) {
                                    console.log({ success, content, })
                                    jwtStorage.set(content)
                                    history.push(`/${type}`)
                                } else {
                                    console.log({ success, content, })
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
