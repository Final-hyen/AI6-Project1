const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const checkValidation = (email, password) => {
    return emailRegex.test(email) && password.length >= 8 
}

export const isCart = (cartItems) => {
    if(cartItems.length > 0){
        return true
    }else{
        return false
    }
}

export const isInfo = (address, address2, phoneNumber) => {
    return (address && address2 && phoneNumber)
;}