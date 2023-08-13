import axios from 'axios';
import { getAccessToken } from './AccessToken';

const accessToken = getAccessToken('accessToken')

export const axiosClient = axios.create({
    baseURL : process.env.REACT_APP_BASEURL,
    withCredentials: true,
    headers: { Authorization : accessToken ? `Bearer ${accessToken}` : ''}
})