import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PAGE_PATH } from "./utils/constants";
import Layout from "./components/layout/Layout";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import ForgotPass from "./pages/auth/forgotPass/ForgotPass";
import ResetPass from "./pages/auth/resetPass/ResetPass";
import Homepage from "./pages/homepage/Homepage";
import Detail from "./pages/detail/Detail";
import Shop from "./pages/shop/Shop";
import Page404 from "./pages/404/Page404";
import Page500 from "./pages/500/Page500";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import PaymentSuccess from "./pages/payment/announcement/PaymentSuccess";
import PaymentFail from "./pages/payment/announcement/PaymentFail";
import History from "./pages/history/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: PAGE_PATH.DETAIL, element: <Detail /> },
      { path: PAGE_PATH.SHOP, element: <Shop /> },
      { path: PAGE_PATH.CART, element: <Cart /> },
      { path: PAGE_PATH.CHECKOUT, element: <Checkout /> },
      { path: PAGE_PATH.PAYMENT.SUCCESS, element: <PaymentSuccess /> },
      { path: PAGE_PATH.PAYMENT.FAIL, element: <PaymentFail /> },
      { path: PAGE_PATH.HISTORY, element: <History /> },
    ],
  },
  { path: PAGE_PATH.REGISTER, element: <Register /> },
  { path: PAGE_PATH.LOGIN, element: <Login /> },
  { path: PAGE_PATH.FORGOT_PASS, element: <ForgotPass /> },
  { path: PAGE_PATH.RESET_PASS, element: <ResetPass /> },
  { path: PAGE_PATH.SERVER_ERROR, element: <Page500 /> },
  { path: "/*", element: <Page404 /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
