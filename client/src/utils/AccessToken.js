export const setAccessToken = (key, accessToken) => localStorage.setItem(key, accessToken);

export const getAccessToken = (key) => localStorage.getItem(key);