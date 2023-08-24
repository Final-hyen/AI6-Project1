import axios from 'axios';
import { getCookie } from './AccessToken';

const accessToken = Object.values(getCookie().cookies)[0];

export const axiosClient = axios.create({
    baseURL : process.env.REACT_APP_BASEURL,
    withCredentials: true,
    headers: {
        'Content-Type' : 'application/json',
        Authorization: accessToken ? `Bearer ${accessToken}` : '',},
})