import { Header } from "./components/Header";
import { MainPage } from './components/MainPage';
import { Footer } from "./components/Footer";
import { LoginForm } from "./components/LoginForm";
import { Products } from "./components/Products";
import { ProductCard } from "./components/ProductCard";
import { ProductInCart } from "./components/ProductInCart";
import { Cart } from "./components/Cart";
import { CartPage } from "./components/CartPage";
import { OrderCard } from "./components/OrderCard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
  );
}

export default App;
