import { Outlet } from "react-router-dom";
import {
  Header,
  HideDiv,
  HeaderContact,
  Footer,
  ScrollTop,
  ScrollToTop,
} from "../";

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      {/* yeni sehifeye kecende en usten baslamasi */}
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
