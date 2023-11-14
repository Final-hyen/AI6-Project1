import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "cartItems",
  storage: localStorage,
});

export const cartItemAtom = atom({
  key: "Items",
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const totalPriceAtom = atom({
  key: "totalPrice",
  default: 0,
  effects_UNSTABLE: [persistAtom,
  ({onSet}) => {
    onSet(newValue => {
      console.log(newValue)
    })
  }
  ]
});
