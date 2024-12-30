import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BrandPage from "./pages/BrandPage";
import ModelPage from "./pages/ModelPage";
import CategoryPage from "./pages/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";
import CheckOutPage from "./pages/CheckOutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import OrderHistoryPages from "./pages/OrderHistoryPages";
import UserProfilePage from "./pages/UserProfilePage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="brands">
          <Route index element={<BrandPage />} />
          <Route path=":brand/models" element={<ModelPage />} />
        </Route>
        <Route path="categories">
          <Route index element={<CategoryPage />} />
          <Route path=":category/subcategories" element={<SubCategoryPage />} />
        </Route>
        <Route path="about" element={<AboutUsPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="checkout" element={<CheckOutPage />} />
        <Route path="productdp/:product" element={<ProductDetailPage />} />
        <Route path="orders">
          <Route index element={<OrderHistoryPages />} />
          <Route path=":orderId" element={<OrderStatusPage />} />
        </Route>
        <Route path="profile" element={<UserProfilePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
