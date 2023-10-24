import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persisAtom } = recoilPersist()

export const cartItemAtom = atom({
    key: 'cartItems',
    default: {
        imgUrl: '',
        title: 'title',
        count: 1,
        price : 1,
    },
    effects_UNSTABLE: [persisAtom]
})

export const totalPriceAtom = atom({
    key: 'totalprice',
    default: 0,
    effects_UNSTABLE: [persisAtom]
})