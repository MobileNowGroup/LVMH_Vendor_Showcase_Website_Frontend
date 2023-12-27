import axios,{AxiosInstance,AxiosRequestConfig,AxiosResponse} from "axios";
import { authStore } from '@/stores/authStore'
interface requestType{
    url: string
    params?:any
}

const handleCode =async (code: number,msg: string) => {
    switch (code) {
        case 401:
            localStorage.removeItem('token')            
            break;
    
        default:
            break;
    }
}
const service:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout:30000,
    headers:{'Content-Type':'application/json'}
})

service.interceptors.request.use((config:any)=>{
    const { method, params} = config
    const headers:any = {
        Authorization: authStore().accessToken ?? "",
        ContentType:'application/json'
    }
    if (method === 'get') {
        headers['Cache-Control'] = 'no-cache'
    }
    if(method === 'delete'){
        headers['Content-type'] = 'application/json;'
        Object.assign(config,{
            data:params,
            params:{}
        })
    }
    return{...config,headers}
})

service.interceptors.response.use((response:AxiosResponse)=>{
    if (response.data.code === 401) {
        localStorage.removeItem('token')
        return response.data
    }
    if (response.status === 200) {
        return response.data
    }
    return Promise.reject(response)
},(error:any)=>{
    const { response } = error
    if (error.response && error.response.data) {
        const { status, data} = response
        handleCode(status,data.msg)
        return Promise.reject(error)
    }else{
        return Promise.reject(error)
    }
})

export default service
