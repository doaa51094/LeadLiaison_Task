import {
  BrowserRouter as Router,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/home/Home";
import "./index.css";
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
