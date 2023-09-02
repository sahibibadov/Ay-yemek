import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import  ErrorBoundary  from "./components/Errorboundary/ErrorBoundary";
import  Layout from './components/Layout/Layout'
import  PrivateRoute from './components/PrivateRoute/PrivateRoute'

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
              const { default: About } = await import("./pages/About/About");
              return {
                Component: About,
              };
            }}
            errorElement={<ErrorBoundary />}
          />

          <Route
            path="category"
            lazy={async () => {
              const { default: Category } = await import("./pages/Category/Category");
              return {
                Component: Category,
              };
            }}
            errorElement={<ErrorBoundary />}
          />

          <Route
            path="category/:categoryUrl"
            lazy={async () => {
              const { default: CategoryProducts } = await import(
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
              const { default: DayProducts } = await import(
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
              const { default: SuccesPage } = await import("./pages/SuccesPage/SuccesPage");
              return {
                Component: SuccesPage,
              };
            }}
            errorElement={<ErrorBoundary />}
          />

          <Route
            path="contact"
            lazy={async () => {
              const { default: Contact } = await import("./pages/Contact/Contact");
              return {
                Component: Contact,
              };
            }}
            errorElement={<ErrorBoundary />}
          />

          <Route lazy={async () => {
                const { default: PrivateRoute } = await import("./components/PrivateRoute/PrivateRoute");
                return {
                  Component: PrivateRoute,
                };
              }}>
            <Route
              path="profile"
              lazy={async () => {
                const { default: Profile } = await import("./pages/Profile/Profile");
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
              const { default: Payment } = await import("./pages/Payment/Payment");
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
            const { default: Login } = await import("./pages/Login/Login");
            return {
              Component: Login,
            };
          }}
          errorElement={<ErrorBoundary />}
        />
        <Route
          path="register"
          lazy={async () => {
            const { default: Register } = await import("./pages/Register/Register");
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
