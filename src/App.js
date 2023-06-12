import { Route, Routes } from "react-router-dom";
import { MyContext } from "./utils/MainContext";

//Scss Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

//Scss Pages
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import "./assets/scss/index.scss";

const App = () => {
  return (
    <MyContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </MyContext>
  );
};

export default App;


