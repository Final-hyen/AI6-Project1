import React from "react";
import BuyPresentaion from "./BuyPresentaion";
import { useRecoilState } from "recoil";
import { cartItemAtom, totalPriceAtom } from "../../recoil/atom";

const BuyContainer = () => {
    const [items, setItems] = useRecoilState(cartItemAtom)
    const [totalPrice, setTotalPrice] = useRecoilState(totalPriceAtom)
    const clickButton = () => {
        console.log(items)
        console.log(totalPrice)
    }
    return <BuyPresentaion cartItems={items} setItems={clickButton} totalPrice={totalPrice} />
}

export default BuyContainer;