import { useContext } from "react";
import { BasketContext } from "../context/BasketProvider";
import { Trash, Plus, Minus } from "lucide-react";

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
    <div
      id={String(id)}
      className="w-full max-w-70 sm:max-w-xs mx-auto rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 flex flex-col h-full"
    >
      <img
        className="w-full h-40 sm:h-48 object-cover rounded-t-2xl"
        src={image}
        alt={name}
      />

      <div className="px-4 py-4 flex flex-col grow">
        <div className="mb-auto">
          <h3 className="font-extrabold text-base sm:text-lg text-gray-900 mb-1 line-clamp-1">
            {name}
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
            Short description of the product goes here.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-between items-center pt-3 border-t border-gray-100">
          <span className="text-lg sm:text-xl font-bold text-gray-950">
            ${price}
          </span>

          {count ? (
            <div className="flex items-center gap-1 p-1 bg-gray-50 rounded-full border border-gray-200 shadow-inner">
              <button
                onClick={() => decreaseCount(id)}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm text-gray-800 hover:bg-gray-100 hover:border-gray-200 transition"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <span className="px-1.5 sm:px-2 font-semibold text-gray-800 text-sm">
                {count}
              </span>
              <button
                onClick={() => increaseCount(id)}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm text-gray-800 hover:bg-gray-100 hover:border-gray-200 transition"
                aria-label="Increase quantity"
              >
                <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={() => deleteBasketItem(id)}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition"
                aria-label="Remove item from cart"
              >
                <Trash className="w-3 h-3 sm:w-4 sm:h-4" />
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
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm transition duration-300 shadow-md hover:shadow-lg flex items-center gap-1.5"
            >
              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Box;
