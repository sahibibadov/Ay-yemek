import { Outlet } from "react-router-dom";
import { auth } from "./firebase/firebase";
import { setUsers } from "./redux/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const dispatch = useDispatch();

  // sehife ilk acildiginda userin yoxlanmasi
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(setUsers(user));
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [auth, dispatch]);

  return (
    <ReactLenis root>
      <Toaster />
      <Outlet />
    </ReactLenis>
  );
}

export default App;
