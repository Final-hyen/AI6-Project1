import React from "react";
import CartPresentation from "./CartPresentation";

const CartContainer = () => {
    const localData = localStorage.getItem('cartItems')
    const cartItems = JSON.parse(localData)

    return <CartPresentation cartItems={cartItems} />
}

export default CartContainer;