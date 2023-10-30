import React from "react";
import BuyPresentaion from "./BuyPresentaion";
import { useRecoilValue } from "recoil";
import { cartItemAtom, totalPriceAtom } from "../../recoil/atom";

const BuyContainer = () => {
    const items = useRecoilValue(cartItemAtom);
    const totalPrice = useRecoilValue(totalPriceAtom);

    const clickButton = () => {
        console.log(items)
        console.log(totalPrice)
    }
    return <BuyPresentaion items={items} setItems={clickButton} totalPrice={totalPrice} />
}

export default BuyContainer;