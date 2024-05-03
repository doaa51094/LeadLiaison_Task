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
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
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
