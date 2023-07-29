export const isValidation = (email, password) => {
    return !(/.*@.*/.test(email) && password.lenght >= 8);
}