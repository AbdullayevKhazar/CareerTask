import { Link } from "react-router-dom";
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
  {
    id: 7,
    name: "USB-C Hub",
    price: 55,
    image: "https://picsum.photos/200?random=7",
  },
  {
    id: 8,
    name: "4K Monitor",
    price: 420,
    image: "https://picsum.photos/200?random=8",
  },
  {
    id: 9,
    name: "External SSD",
    price: 180,
    image: "https://picsum.photos/200?random=9",
  },
  {
    id: 10,
    name: "Gaming Chair",
    price: 350,
    image: "https://picsum.photos/200?random=10",
  },
  {
    id: 11,
    name: "Wireless Charger",
    price: 35,
    image: "https://picsum.photos/200?random=11",
  },
  {
    id: 12,
    name: "Tablet",
    price: 300,
    image: "https://picsum.photos/200?random=12",
  },
  {
    id: 13,
    name: "Noise Cancelling Earbuds",
    price: 140,
    image: "https://picsum.photos/200?random=13",
  },
  {
    id: 14,
    name: "Portable Power Bank",
    price: 45,
    image: "https://picsum.photos/200?random=14",
  },
  {
    id: 15,
    name: "Smartphone Gimbal",
    price: 110,
    image: "https://picsum.photos/200?random=15",
  },
];
const ProductPage = () => {
  return (
    <>
      <nav>
        <Link to={"/basket"}>Basket</Link>
      </nav>
      <div className=" px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-3 mx-auto">
        {MockData ? (
          MockData.map((product) => (
            <Box
              name={product.name}
              image={product.image}
              id={product.id}
              price={product.price}
            />
          ))
        ) : (
          <div>Productlar yoxdur</div>
        )}
      </div>
    </>
  );
};

export default ProductPage;
