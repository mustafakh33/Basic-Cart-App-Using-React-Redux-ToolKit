import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Products from "./components/Products.jsx";
// import Cart from "./components/Cart.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./layout/Layout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./rtk/store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <Products /> },
//       { path: "/cart", element: <Cart /> },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
