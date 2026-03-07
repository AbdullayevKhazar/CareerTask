import Box from "../components/Box";

const MockData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    image: "image-url",
  },
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    image: "image-url",
  },
];
const ProductPage = () => {
  return (
    <div>
      {MockData ? (
        MockData.map((product) => (
          <Box
            name={product.name}
            image={product.image}
            key={product.id}
            price={product.price}
          />
        ))
      ) : (
        <div>Productlar yoxdur</div>
      )}
    </div>
  );
};

export default ProductPage;
