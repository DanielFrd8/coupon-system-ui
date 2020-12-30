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

    function remove(){
        localStorage.removeItem(key)
    }
    
    return {
        get,
        set,
        getObject,
        setObject,
        remove
    }
}

export const jwtStorage = storageApi('jwt')
export const typeStorage = storageApi('type')