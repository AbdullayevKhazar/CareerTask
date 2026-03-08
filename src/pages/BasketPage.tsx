import { useContext } from "react";
import { BasketContext } from "../context/BasketProvider";
import Box from "../components/Box";

const BasketPage = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("Box component must be used within BasketProvider");
  }
  const { basketItem } = context;
  console.log(basketItem);
  return (
    <>
      <div className=" px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-3 mx-auto">
        {basketItem.length > 0 ? (
          basketItem.map((item) => (
            <Box
              image={item.image}
              name={item.name}
              price={item.price}
              id={item.id}
              count={item.count}
            />
          ))
        ) : (
          <p className="text-2xl text-center ">Sebetiniz Bosdur!!</p>
        )}
      </div>
    </>
  );
};

export default BasketPage;
