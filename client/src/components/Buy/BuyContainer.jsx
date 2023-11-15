import React from "react";
import BuyPresentaion from "./BuyPresentaion";
import { useRecoilValue } from "recoil";
import { cartItemAtom, totalPriceAtom } from "../../recoil/atom";
import { useNavigate } from "react-router-dom";

const BuyContainer = () => {
    const items = useRecoilValue(cartItemAtom);
    const totalPrice = useRecoilValue(totalPriceAtom);
    const buyItem = JSON.parse(localStorage.getItem('buyItem'));
    const navigate = useNavigate();
    
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
    
    const clickCompleteButton = () => {
        navigate('/ordercompletepage')
    }
    return <BuyPresentaion items={item} setItems={clickCompleteButton} totalPrice={price} href={href}/>
}

export default BuyContainer;