export const getCookie = () => {
    const cookies = Object.fromEntries(
        document.cookie.split(';').map((cookie) => cookie.trim().split('=')),
    );
    
    const isCookie = Object.prototype.hasOwnProperty.call(cookies, 'refresh_token')

    return isCookie
}