import { useContext } from "react";
import { BasketContext } from "../context/BasketProvider";
import { Trash } from "lucide-react";

const Box = ({
  image,
  id,
  name,
  price,
  count,
}: {
  image: string;
  id: number;
  name: string;
  price: number | string;
  count?: number;
}) => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("Box component must be used within BasketProvider");
  }
  const { addBasketItem, increaseCount, decreaseCount, deleteBasketItem } =
    context;
  return (
    <>
      <div
        id={String(id)}
        className="w-full max-w-xs md:max-w-sm mx-auto rounded overflow-hidden shadow-lg p-3 md:p-4"
      >
        <img
          className="w-full h-40 md:h-48 object-cover"
          src={image}
          alt="Product Name"
        />
        <div className="px-4 py-3 md:px-6 md:py-4">
          <div className="font-bold text-lg md:text-xl mb-1 md:mb-2">
            {name}
          </div>
          <p className="text-gray-700 text-sm md:text-base">
            Short description of the product goes here.
          </p>
        </div>
        <div className="px-4 pb-2 md:px-6 md:pb-4 flex justify-between items-center">
          <span className="text-base md:text-lg font-semibold text-gray-900">
            ${price}
          </span>
          {count ? (
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => decreaseCount(id)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-l-md transition"
              >
                -
              </button>
              <span className="px-4 font-semibold text-gray-800">{count}</span>
              <button
                onClick={() => increaseCount(id)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-r-md transition"
              >
                +
              </button>
              <button onClick={() => deleteBasketItem(id)}>
                <Trash />
              </button>
            </div>
          ) : (
            <button
              onClick={() =>
                addBasketItem({
                  id: id,
                  name,
                  price,
                  image,
                  count: count ?? 1,
                })
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-base transition"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Box;
