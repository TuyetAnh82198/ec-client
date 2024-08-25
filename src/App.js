import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PAGE_PATH } from "./utils/constants";
import Layout from "./components/layout/Layout";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import ForgotPass from "./pages/auth/forgotPass/ForgotPass";
import ResetPass from "./pages/auth/resetPass/ResetPass";
import Homepage from "./pages/homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Homepage /> }],
  },
  { path: PAGE_PATH.REGISTER, element: <Register /> },
  { path: PAGE_PATH.LOGIN, element: <Login /> },
  { path: PAGE_PATH.FORGOT_PASS, element: <ForgotPass /> },
  { path: PAGE_PATH.RESET_PASS, element: <ResetPass /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
