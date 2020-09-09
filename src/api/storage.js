function storageApi(key){
    function get(){
        return localStorage.getItem(key)
    }

    function set(value){
        localStorage.setItem(key,value)
    }

    function getObject(){
        return JSON.parse(get())
    }

    function setObject(value){
        set(key,JSON.stringify(value))
    }
    
    return {
        get,
        set,
        getObject,
        setObject,
    }
}

export const jwtStorage = storageApi('jwt')
export const typeStorage = storageApi('type')