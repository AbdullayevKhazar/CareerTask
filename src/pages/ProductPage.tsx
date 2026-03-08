import { useState } from "react";
import Box from "../components/Box";

export const MockData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    image: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 80,
    image: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 220,
    image: "https://picsum.photos/200?random=3",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 60,
    image: "https://picsum.photos/200?random=4",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 150,
    image: "https://picsum.photos/200?random=5",
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 40,
    image: "https://picsum.photos/200?random=6",
  },
];

const ProductPage = () => {
  const [sortOrder, setSortOrder] = useState<"default" | "asc" | "desc">(
    "default",
  );

  const sortedProducts = [...MockData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex justify-end mb-6">
        <select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value as "default" | "asc" | "desc")
          }
          className="p-2 border border-gray-300 rounded-md shadow-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition cursor-pointer"
        >
          <option value="default">Sıralama: Standart</option>
          <option value="asc">Qiymət: Ucuzdan bahaya</option>
          <option value="desc">Qiymət: Bahadan ucuza</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts && sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <Box
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-xl text-gray-500">
            Productlar yoxdur
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
