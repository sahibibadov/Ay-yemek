import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { About, Category, Home, NotFound } from "./pages";
import App from "./App";
import { Layout } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </>
  )
);
export default router;
