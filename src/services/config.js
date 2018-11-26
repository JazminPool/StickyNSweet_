import axios from 'axios'

var headers = {
    'Content-Type': 'application/json',
}
export const http =  axios.create({
    baseURL:'http://localhost:2500/api/', data:{},headers})