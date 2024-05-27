import axios from "axios"

export const POSTAPI = (endpoint, data, success, error) => {
    axios.post(endpoint, data).then((resp) => {
        if(resp.status==200){
            success(resp.data)
        }
    }).catch(err=>error(err))
}