import { useEffect, useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layout/Layout';
import Products from './components/Products';
import Cart from './components/Cart';
import Loader from './loading/Loader';


const App = () => {
  const [loading, setloading] = useState(true);
      // lets create loading functionality
    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false)
        }, 3000);
    }, []);
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

  return (
    <>
    {
      loading? (<Loader/>): (<RouterProvider router={router} />)
    }
    
    </>
  )
}

export default App
