import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { handlePath } from "./utils/handlePath";
import { NAVBAR, PAGE_PATH } from "./utils/constants";
import Layout from "./components/layout/Layout";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import ForgotPass from "./pages/auth/forgotPass/ForgotPass";
import ResetPass from "./pages/auth/resetPass/ResetPass";

const router = createBrowserRouter([
  {
    // path: handlePath(NAVBAR_MAIN, "DASHBOARD"),
    element: <Layout />,
    children: [
      { index: true, element: <Register /> },
      // { path: handlePath(NAVBAR_NEW, "ADD_PRODUCT"), element: <AddProduct /> },
    ],
  },
  { path: handlePath(NAVBAR, "REGISTER"), element: <Register /> },
  { path: handlePath(NAVBAR, "LOGIN"), element: <Login /> },
  { path: PAGE_PATH.FORGOT_PASS, element: <ForgotPass /> },
  { path: PAGE_PATH.RESET_PASS, element: <ResetPass /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
