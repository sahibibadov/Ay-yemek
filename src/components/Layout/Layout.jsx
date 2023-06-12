import { Outlet } from "react-router-dom";
import { Header, HideDiv, HeaderContact, Footer, ScrollTop } from "../";

export const Layout = () => {
  return (
    <>
      <HeaderContact />
      <Header />
      <HideDiv />

      <main>
        <Outlet />
      </main>

      <Footer />

      <ScrollTop />
    </>
  );
};
