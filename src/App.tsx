import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import BasketPage from "./pages/BasketPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ProductPage />} />
            <Route path="/basket" element={<BasketPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
