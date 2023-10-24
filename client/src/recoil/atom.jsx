import { atom } from "recoil";

const cartItemAtom = atom({
    key: 'cartItems',
    default: {
        imgUrl: '',
        title: 'title',
        count: 1,
        price : 1,
    }
})

export default cartItemAtom;