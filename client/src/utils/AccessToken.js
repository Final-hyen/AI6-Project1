export const getCookie = () => {
    const cookies = Object.fromEntries(
        document.cookie.split(';').map((cookie) => cookie.trim().split('=')),
    );
    // const isAdminCookie = Object.prototype.hasOwnProperty.call(cookies, 'admin_access_token')
    // const isUserCookie = Object.prototype.hasOwnProperty.call(cookies,'user_access_token')
    return { cookies }
}
