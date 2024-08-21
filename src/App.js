import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { handlePath } from "./utils/handlePath";
import { NAVBAR } from "./utils/constants";
import Layout from "./components/layout/Layout";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
