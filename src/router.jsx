import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, NotFound } from "./pages";
import App from "./App";
import { ErrorBoundary, Layout, PrivateRoute } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />}>
        {/* layout route start*/}
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
            path="category/:categoryUrl"
            lazy={async () => {
              const { CategoryProducts } = await import(
                "./pages/CategoryProducts/CategoryProducts"
              );
              return {
                Component: CategoryProducts,
              };
            }}
            errorElement={<ErrorBoundary />}
          />

          <Route
            path="category/:categoryUrl/:day"
            lazy={async () => {
              const { DayProducts } = await import(
                "./pages/DayProducts/DayProducts"
              );
              return {
                Component: DayProducts,
              };
            }}
            errorElement={<ErrorBoundary />}
          />

          <Route
            path="succespage"
            lazy={async () => {
              const { SuccesPage } = await import("./pages/SuccesPage/SuccesPage");
              return {
                Component: SuccesPage,
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

          <Route element={<PrivateRoute />}>
            <Route
              path="profile"
              lazy={async () => {
                const { Profile } = await import("./pages/Profile/Profile");
                return {
                  Component: Profile,
                };
              }}
              errorElement={<ErrorBoundary />}
            />
          </Route>
        </Route>
        {/* layout route end */}

        {/* payment route */}
        <Route element={<PrivateRoute />}>
          <Route
            path="payment"
            lazy={async () => {
              const { Payment } = await import("./pages/Payment/Payment");
              return {
                Component: Payment,
              };
            }}
            errorElement={<ErrorBoundary />}
          />
        </Route>

        {/* register ve login routlari */}

        <Route
          path="login"
          lazy={async () => {
            const { Login } = await import("./pages/Login/Login");
            return {
              Component: Login,
            };
          }}
          errorElement={<ErrorBoundary />}
        />
        <Route
          path="register"
          lazy={async () => {
            const { Register } = await import("./pages/Register/Register");
            return {
              Component: Register,
            };
          }}
          errorElement={<ErrorBoundary />}
        />
        {/*     <Route path="/login" element={<Login />} errorElement={<ErrorBoundary />} />
  
          <Route
            path="/register"
            element={<Register />}
            errorElement={<ErrorBoundary />}
          /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </>,
  ),
);
export default router;
