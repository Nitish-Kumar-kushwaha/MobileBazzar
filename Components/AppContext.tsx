import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { brandData } from "@/Typess/Typess";

type Brands = {
  name: string;
  checked: boolean;
};

type Ram = {
  name: string;
  checked: boolean;
};

type NavSearch = {
  name: string;
};

type Cart = {
  cartItems: brandData[];
  cartItemCount: number;
};


export type BrandContextType = {
  brand: Brands;
  setBrand: Dispatch<SetStateAction<Brands>>;

  ram: Ram;
  setRam: Dispatch<SetStateAction<Ram>>;

  navSearch: NavSearch;
  setNavSearch: Dispatch<SetStateAction<NavSearch>>;

  cart: Cart;
  setCart: Dispatch<SetStateAction<Cart>>;

};

const defaultSate = {
  brand: {
    name: "",
    checked: false,
  },
  setBrand: (brand: Brands) => {},

  ram: {
    name: "",
    checked: false,
  },
  setRam: (ram: Ram) => {},

  navSearch: {
    name: "",
  },
  setNavSearch: (navSearch: NavSearch) => {},

  cart: {
    cartItems: [],
    cartItemCount: 0,
  },
  setCart: (cart: Cart) => {},

} as BrandContextType;

export const AppContext = createContext<BrandContextType>(defaultSate);

type appPropviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: appPropviderProps) => {
  const [brand, setBrand] = useState({
    name: "",
    checked: false,
  });

  const [ram, setRam] = useState({
    name: "",
    checked: false,
  });

  const [navSearch, setNavSearch] = useState({
    name: "",
  });

  const [cart, setCart] = useState({
    cartItems: [] as brandData[],
    cartItemCount: 0,
  });

  

  return (
    <AppContext.Provider
      value={{
        brand,
        setBrand,
        ram,
        setRam,
        navSearch,
        setNavSearch,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
