import { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketProvider";
import { Home, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("Box component must be used within BasketProvider");
  }
  const { basketItem } = context;

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-sm">
      <Link to="/" className="text-xl font-bold text-gray-800">
        <Home />
      </Link>
      <Link to="/basket" className="relative">
        <ShoppingCart className="w-8 h-8 text-gray-700" />

        {basketItem.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {basketItem?.length}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
