import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
    key: "cartItems",
    storage: localStorage
})

export const cartItemAtom = atom({
    key: 'cartItems',
    default: {
        imgUrl: '',
        title: 'title',
        count: 1,
        price : 1,
    },
    effects_UNSTABLE: [persistAtom]
})

export const totalPriceAtom = atom({
    key: 'totalprice',
    default: 0,
})
