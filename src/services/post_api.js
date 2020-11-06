import axios from 'axios';
import '../mock/menudata.js'

export function getPost() {
    // return axios.get('./Mock.json')
    return axios.get('/getdata1')
}