import React, { createContext, useState } from "react";
import type { BasketItem } from "../types/types";

interface BasketContextType {
  basketItem: BasketItem[];
  setBasketItem: React.Dispatch<React.SetStateAction<BasketItem[]>>;
}

const BasketContext = createContext<BasketContextType | null>(null);
const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [basketItem, setBasketItem] = useState<BasketItem[]>([]);

  return (
    <BasketContext.Provider value={{ basketItem, setBasketItem }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
