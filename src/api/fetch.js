import React from 'react'
import {jwtStorage} from './storage'

const responseObject = Object.freeze({
    data: null,
    loading: true,
    error: null,
})

function fetchData(url) {
    return async method => {
        const response = await fetch(url, {
            method,
            headers:{
                'Authorization' : `Bearer ${jwtStorage.get()}`,
                'Content-Type': 'application/json'
            },
  
        })
        return await response.json()
    }
}

function fetchWithBody(url, body, requireAuth) {
    return async method => {
        console.log(JSON.stringify(body))
        const response = await fetch(url, {
            method,
            headers:requireAuth ? {
                'Authorization' : `Bearer ${jwtStorage.get()}`,
                'Content-Type': 'application/json'
            }
            :{},
            body: JSON.stringify(body)
        })
        return await response.json()
    }
}

// first function 
function useFetch(method) {

    // second function 
    function FetchData(url) {
        const [response, setResponse,] = React.useState({ ...responseObject })

        React.useEffect(() => {
            async function sendRequest() {
                const data = await fetch(url, {
                    method
                })
                return await data.json()
            }

            sendRequest()
                .then(res => setResponse({ ...response, data: res, loading: false }))
                .catch(err => setResponse({ ...response, error: err, loading: false, }))

        }, [])

        return response
    }

    // return second
    return FetchData
}

function useBodyFetch(method) {

    function FetchData(url, body) {

        const [response, setResponse,] = React.useState({ ...responseObject, })

        React.useEffect(() => {
            async function sendRequest() {
                const data = await fetch(url, {
                    method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })

                return await data.json()
            }

            sendRequest()
                .then(res => setResponse({ ...response, data: res, loading: false, }))
                .catch(err => setResponse({ ...response, error: err, loading: false, }))

        }, [])

        return response
    }

    return FetchData
}

const useGet = useFetch('GET')
const useDelete = useFetch('DELETE')

const usePost = useBodyFetch('POST')
const usePut = useBodyFetch('PUT')

export{
    fetchData,
    fetchWithBody,
    useGet,
    useDelete,
    usePost,
    usePut
}