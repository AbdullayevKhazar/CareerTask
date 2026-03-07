import React, { createContext, useState } from "react";
import type { BasketItem } from "../types/types";

interface BasketContextType {
  basketItem: BasketItem[];
  setBasketItem: React.Dispatch<React.SetStateAction<BasketItem[]>>;
  addBasketItem: (product: BasketItem) => void;
  deleteBasketItem: (productId: number) => void;
  increaseCount: (productId: number) => void;
  decreaseCount: (productId: number) => void;
}

export const BasketContext = createContext<BasketContextType | null>(null);
const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [basketItem, setBasketItem] = useState<BasketItem[]>([]);
  const addBasketItem = (product: BasketItem) => {
    console.log("adding");
    setBasketItem((prevBasket) => {
      const existingItem = prevBasket.find((item) => item.id === product.id);

      if (existingItem) {
        return prevBasket.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item,
        );
      }
      return [...prevBasket, { ...product, count: 1 }];
    });
  };
  const deleteBasketItem = (productId: number) => {
    setBasketItem((prevBasket) =>
      prevBasket.filter((item) => item.id !== productId),
    );
  };
  const increaseCount = (productId: number) => {
    setBasketItem((prevBasket) =>
      prevBasket.map((item) =>
        item.id === productId ? { ...item, count: item.count + 1 } : item,
      ),
    );
  };
  const decreaseCount = (productId: number) => {
    setBasketItem((prevBasket) =>
      prevBasket.map((item) =>
        item.id === productId ? { ...item, count: item.count - 1 } : item,
      ),
    );
  };

  return (
    <BasketContext.Provider
      value={{
        basketItem,
        setBasketItem,
        addBasketItem,
        deleteBasketItem,
        increaseCount,
        decreaseCount,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
