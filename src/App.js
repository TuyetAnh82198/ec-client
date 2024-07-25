import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Register from "./pages/registerLogin/register/Register";

const router = createBrowserRouter([
  {
    // path: handlePath(NAVBAR_MAIN, "DASHBOARD"),
    element: <Layout />,
    children: [
      { index: true, element: <Register /> },
      // { path: handlePath(NAVBAR_USER, "REGISTER"), element: <Register /> },
      // { path: handlePath(NAVBAR_USER, "LOGIN"), element: <Login /> },
      // { path: handlePath(NAVBAR_NEW, "ADD_PRODUCT"), element: <AddProduct /> },
    ],
  },
  { path: "/register", element: <Register /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
