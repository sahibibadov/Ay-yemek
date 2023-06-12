import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, NotFound } from "./pages";
import App from "./App";
import { ErrorBoundary, Layout } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
          <Route
            path="about"
            lazy={async () => {
              const { About } = await import("./pages/About/About");
              return {
                Component: About,
              };
            }}
            errorElement={<ErrorBoundary />}
          />
          <Route
            path="category"
            lazy={async () => {
              const { Category } = await import("./pages/Category/Category");
              return {
                Component: Category,
              };
            }}
            errorElement={<ErrorBoundary />}
          />
          <Route
            path="contact"
            lazy={async () => {
              const { Contact } = await import("./pages/Contact/Contact");
              return {
                Component: Contact,
              };
            }}
            errorElement={<ErrorBoundary />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </>
  )
);
export default router;
