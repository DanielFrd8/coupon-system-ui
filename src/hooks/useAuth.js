import React from 'react'
import jwtDecode from 'jwt-decode'
import { jwtStorage } from '../api/storage'
import { useHistory } from 'react-router-dom'
import { fetchWithBody } from '../api/fetch'

export function useRedirectByJwt() {
    const history = useHistory()
    React.useEffect(() => {
        const jwt = jwtStorage.get()
        if (!jwt) {
            history.push("/")
            return
        }
        const { scope, name, password } = jwtDecode(jwt)
        history.push(`/${scope}`)
        fetchWithBody(`http://localhost:8080/${scope.toLowerCase()}/login`, { email:name, password })('POST')
            .then((res) => {
                if (res) {
                    console.log('logged in ',res)
                }})
            .catch(error => console.log('!!! in login', error))
    }, [])
}
