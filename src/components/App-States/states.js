import { atom } from "recoil";

export const locState = atom({
  key: "locState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
