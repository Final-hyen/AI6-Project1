import React from "react";
import BuyPresentaion from "./BuyPresentaion";
import { useRecoilValue } from "recoil";
import { cartItemAtom, totalPriceAtom } from "../../recoil/atom";

const BuyContainer = () => {
    const items = useRecoilValue(cartItemAtom);
    const totalPrice = useRecoilValue(totalPriceAtom);
    const buyItem = JSON.parse(localStorage.getItem('buyItem'));
    
    let href = localStorage.getItem('href').split('/');
    href = href[href.length-1];
    
    let item;
    let price;
    if( href === 'cart'){
        item = items;
        price = totalPrice;
    }else{
        item = buyItem;
        price = item.price;
    }
    
    console.log(item.price);
    const clickButton = () => {
        console.log(item)
        console.log(totalPrice)
    }
    return <BuyPresentaion items={item} setItems={clickButton} totalPrice={price} href={href}/>
}

export default BuyContainer;