import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Product from "./pages/Product";
import ProductInfo from "./pages/ProductInfo";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signout from "./pages/Signout";
import { ToastContainer } from 'react-toastify';
import Cart from './pages/Cart';
import Orders from './pages/Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/:id/info",
        element: <ProductInfo />,
      },
      {
        path: "cart",
        element: <ProtectedRoute><Cart /></ProtectedRoute>,
      },
      {
        path: "orders",
        element: <ProtectedRoute><Orders /></ProtectedRoute>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signout",
    element: <Signout />,
  }
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <ToastContainer />
    </>
  );
}

export default App;
