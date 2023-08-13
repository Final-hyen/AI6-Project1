export const setAccessToken = (key, access_token) => localStorage.setItem(key, access_token);

export const getAccessToken = (key) => localStorage.getItem(key);