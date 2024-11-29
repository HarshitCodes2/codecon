import { atom } from "recoil";

export const loadingSignState = atom({
  key: "loadingSignState",
  default: false,
});

export const showSideBarState = atom({
  key: "showSideBarState",
  default: true,
});
