import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "cartItemsPersist",
  storage: localStorage,
});

export const cartItemAtom = atom({
  key: "cartItems",
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const totalPriceAtom = atom({
  key: "totalprice",
  default: 0,
  effects_UNSTABLE: [persistAtom]
});
