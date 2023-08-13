const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const checkValidation = (email, password) => {
    return emailRegex.test(email) && password.length >= 8 
}