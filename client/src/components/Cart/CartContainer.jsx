import React, { useState } from "react";
import CartPresentation from "./CartPresentation";

const CartContainer = () => {
    const localData = localStorage.getItem('cartItems')
    const cartItems = JSON.parse(localData)
    const [isChecked, setIsChecked] = useState(false);

    const totalPrice = cartItems.reduce((a,b) => a+  b.price, 0)
    
    const isClickCheckAll = () => {
        setIsChecked(!isChecked)
    }

    return <CartPresentation cartItems={cartItems} totalPrice={totalPrice} isChecked={isChecked} isClickCheckAll={isClickCheckAll}/>
}

export default CartContainer;