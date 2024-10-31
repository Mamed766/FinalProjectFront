import { atom } from "recoil";

interface Project {
  id: string;
  title: string;
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  pricing?: number;
  category: string;
  quantity: number;
}

export const cartState = atom<Project[]>({
  key: "cartState",
  default: [],
});
