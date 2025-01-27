import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import PageLoader from "./ui/PageLoader";

const HomePage = lazy(() => import("./pages/HomePage"));
const BrandPage = lazy(() => import("./pages/BrandPage"));
const ModelPage = lazy(() => import("./pages/ModelPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const SubCategoryPage = lazy(() => import("./pages/SubCategoryPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const OrderDetailPage = lazy(() => import("./pages/OrderDetailPage"));
const OrderHistoryPages = lazy(() => import("./pages/OrderHistoryPages"));
const UserProfilePage = lazy(() => import("./pages/UserProfilePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const Faq = lazy(() => import("./pages/Faq"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const CreateNewUserPage = lazy(() => import("./pages/CreateNewUserPage"));
const ModelProductsPage = lazy(() => import("./pages/ModelProductsPage"));
const SubCategoryProductsPage = lazy(
  () => import("./pages/SubCategoryProductsPage"),
);
const PageNotFoundFullPage = lazy(() => import("./pages/PageNotFoundFullPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckOutPage = lazy(() => import("./pages/CheckOutPage"));
const CustomerContactDetailsPage = lazy(
  () => import("./pages/CustomerContactDetailsPage"),
);

const AppLayout = lazy(() => import("./ui/AppLayout"));
const AuthLayout = lazy(() => import("./ui/AuthLayout"));
const ProtectedRoutes = lazy(() => import("./ui/ProtectedRoutes"));

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
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
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
                <Route path="checkout" element={<CheckOutPage />} />

                <Route path="orders">
                  <Route index element={<OrderHistoryPages />} />
                  <Route path=":orderId" element={<OrderDetailPage />} />
                </Route>
              </Route>

              <Route element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route
                  path="forgot-password"
                  element={<ForgotPasswordPage />}
                />
                <Route
                  path="reset-password/:resetToken"
                  element={<ResetPasswordPage />}
                />
                <Route
                  path="reset-password"
                  element={<Navigate to="/forgot-password" replace />}
                />
                <Route path="new-customer" element={<CreateNewUserPage />} />
              </Route>
            </Route>

            <Route path="*" element={<PageNotFoundFullPage />} />
          </Routes>
        </Suspense>
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
