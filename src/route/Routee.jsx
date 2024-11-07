import Products from "./../components/Products.jsx";
import Cart from "./../components/Cart.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./../layout/Layout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
const Routee = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <Products /> },
            { path: "/cart", element: <Cart /> },
          ],
        },
      ]);
      return(
        <RouterProvider router={router} />
      )   
}

export default Routee
