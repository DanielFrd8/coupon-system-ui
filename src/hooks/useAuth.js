import React from 'react'
import jwtDecode from 'jwt-decode'
import { jwtStorage } from '../api/storage'
import { useHistory } from 'react-router-dom'

export function useRedirectByJwt() {
    const history = useHistory()
    React.useEffect(() => {
        const jwt = jwtStorage.get()
        if (!jwt) {
            history.push("/")
            return
        }
        const { scope, } = jwtDecode(jwt)
        history.push(`/${scope}`)
    }, [])
}
