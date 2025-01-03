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
import ProductsPage from "./pages/ProductsPage";

import AppLayout from "./ui/AppLayout";
import ReturnPolicy from "./pages/ReturnPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<AppLayout />}>
          <Route path="products" element={<ProductsPage />} />
          <Route path="brands">
            <Route index element={<BrandPage />} />
            <Route path=":brand/models" element={<ModelPage />} />
          </Route>
          <Route path="categories">
            <Route index element={<CategoryPage />} />
            <Route
              path=":category/subcategories"
              element={<SubCategoryPage />}
            />
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
          <Route path="return-policy" element={<ReturnPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
