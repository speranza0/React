import { atom } from "recoil";

export const indexState = atom({
  key: "indexState",
  default: 1,
});

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const filterListState = atom({
  key: "filterListState",
  default: [],
});
