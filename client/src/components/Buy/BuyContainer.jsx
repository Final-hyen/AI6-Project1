import React from "react";
import BuyPresentaion from "./BuyPresentaion";
import { useRecoilState } from "recoil";
import cartItemAtom from "../../recoil/atom";

const BuyContainer = () => {
    const [items, setItems] = useRecoilState(cartItemAtom)
    const clickButton = () => {
        console.log(items)
    }
    return <BuyPresentaion cartItems={items} setItems={clickButton} />
}

export default BuyContainer;