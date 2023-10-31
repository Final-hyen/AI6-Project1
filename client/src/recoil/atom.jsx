import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const localData = JSON.parse(localStorage.getItem('cartItems'));

const { persistAtom } = recoilPersist({
  key: "cartItemsPersist",
  storage: localStorage,
});

export const cartItemAtom = atom({
  key: "Items",
  default: [localData],
  effects_UNSTABLE: [persistAtom]
});

export const totalPriceAtom = atom({
  key: "totalprice",
  default: 0,
  effects_UNSTABLE: [persistAtom]
});
