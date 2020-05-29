import axios from 'axios'

export function request (config){
    const instance = axios.create({
        // baseURL: ''
    })

    instance.interceptors.request.use(
        (config) =>{
            return config;
        }, (err) => {
            //console.log(err)
        }
    )

    instance.interceptors.response.use(
        (response) => {
            return response.data;
        }, (err) => {
            //console.log(err);
        }
    )

    return config ? instance(config) : instance;
}