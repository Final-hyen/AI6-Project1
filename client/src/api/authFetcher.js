import { axiosClient } from "../utils/axiosClient";

export const signUp = async(email, password, name) => {
    return await axiosClient.post('/signup', {email, password, name})
}

export const signIn = async(email, password) => {
    return await axiosClient.post('/signin', {email, password})
}