import { useContext } from "react";
import { BasketContext } from "../context/BasketProvider";
import Box from "../components/Box";

const BasketPage = () => {
  const context = useContext(BasketContext);

  if (!context) {
    throw new Error("BasketPage must be used within BasketProvider");
  }

  const { basketItem, calculateTotal } = context;
  const total = calculateTotal();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Sizin Səbətiniz</h1>

      {basketItem.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-fit">
            {basketItem.map((item) => (
              <Box
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                id={item.id}
                count={item.count}
              />
            ))}
          </div>

          <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 h-fit sticky top-4">
            <h2 className="text-xl font-bold mb-4 border-b border-gray-200 pb-3">
              Sifarişin xülasəsi
            </h2>

            <div className="flex justify-between items-center text-lg font-semibold text-gray-800 mb-6">
              <span>Ümumi Məbləğ:</span>
              <span>{total.toFixed()} ₼</span>{" "}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Səbətiniz boşdur!
          </h2>
          <p className="text-gray-500 max-w-md mb-8">
            Görünür, hələ heç nə seçməmisiniz. İstədiyiniz məhsulları tapmaq
            üçün mağazaya göz atın.
          </p>

          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition duration-200">
            Mağazaya Qayıt
          </button>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
