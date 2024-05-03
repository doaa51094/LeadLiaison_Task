import {
  BrowserRouter as Router,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/home/Home";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import ProductDetails from "./components/productDetails/ProductDetails";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Route>
    )
  );
  return (
    <div className="flex justify-center items-center">
       <Provider store={store}>
      <RouterProvider router={router} />
       </Provider>
    </div>
  );
}

export default App;
