import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import HomePage from "./pages/HomePage";
import BrandPage from "./pages/BrandPage";
import ModelPage from "./pages/ModelPage";
import CategoryPage from "./pages/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import OrderHistoryPages from "./pages/OrderHistoryPages";
import UserProfilePage from "./pages/UserProfilePage";
import PageNotFound from "./pages/PageNotFound";
import ProductsPage from "./pages/ProductsPage";
import CollectionPage from "./pages/CollectionPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import ShippingPolicy from "./pages/ShippingPolicy";
import Faq from "./pages/Faq";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import CreateNewUserPage from "./pages/CreateNewUserPage";
import ModelProductsPage from "./pages/ModelProductsPage";
import SubCategoryProductsPage from "./pages/SubCategoryProductsPage";

import AppLayout from "./ui/AppLayout";
import AuthLayout from "./ui/AuthLayout";
import CartPage from "./pages/CartPage";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import OrderSummary from "./ui/OrderSummary";
import CustomerContactDetailsPage from "./pages/CustomerContactDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route element={<AppLayout />}>
            <Route path="collection" element={<CollectionPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:product" element={<ProductDetailPage />} />

            <Route path="brands">
              <Route index element={<BrandPage />} />
              <Route
                path=":brand"
                element={<Navigate to="/brands" replace />}
              />
              <Route path=":brand/models" element={<ModelPage />} />
              <Route
                path=":brand/models/:model"
                element={<ModelProductsPage />}
              />
            </Route>
            <Route path="categories">
              <Route index element={<CategoryPage />} />
              <Route
                path=":category"
                element={<Navigate to="/categories" replace />}
              />
              <Route
                path=":category/subcategories"
                element={<SubCategoryPage />}
              />
              <Route
                path=":category/subcategories/:subcategory"
                element={<SubCategoryProductsPage />}
              />
            </Route>
            <Route path="cart" element={<CartPage />} />

            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="contact-us" element={<ContactUsPage />} />

            <Route path="faq" element={<Faq />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="shipping-policy" element={<ShippingPolicy />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="profile" element={<UserProfilePage />} />
              <Route
                path="contact-details"
                element={<CustomerContactDetailsPage />}
              />
              <Route path="order-summary" element={<OrderSummary />} />

              <Route path="orders">
                <Route index element={<OrderHistoryPages />} />
                <Route path=":orderId" element={<OrderStatusPage />} />
              </Route>
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="forgot-password" element={<ForgotPasswordPage />} />
              <Route
                path="reset-password/:resetToken"
                element={<ResetPasswordPage />}
              />
              <Route
                path="reset-password"
                element={<Navigate to="/forgot-password" replace />}
              />
              <Route path="new-customer" element={<CreateNewUserPage />} />

              <Route path="login" element={<LoginPage />} />
            </Route>
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        postion="top-center"
        gutter={12}
        containerStyle={{ margin: ".8rem" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          className:
            "text-xl max-w-3xl py-6 px-10 bg-primary-200 text-black gap-4 items-center",
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
