export const emailVaildation = (email) => {
    return !(/.*@.*/.test(email))
}

export const passwordValidation = (password) => {
    return password.length >= 8
}