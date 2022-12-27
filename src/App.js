import "./App.css";
import { Routes, Route } from "react-router-dom";
import RoutesLink from "./components/RoutesLink";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import OrderPage from "./components/OrderPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RoutesLink />} />
        <Route path="/" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/orderpage" element={<Cart />} />
        <Route path="/cart" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
