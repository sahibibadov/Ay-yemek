import { Container, HmButton, LnButton } from "../../components";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { map } from "lodash";
import logo from "../../../public/logo.png";

import { useDispatch, useSelector } from "react-redux";
import "./header.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { setUsers } from "../../redux/userSlice";
export const Header = () => {
  const ref = useRef(null);
  const [hide, setHide] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const parseUser = JSON.parse(users);

  // hamburgermenunun klikle acilmasi
  const handleToggleMenu = () => {
    setOpen((pre) => !pre);
  };
  // routlara klikde menunun baglanmasi ver hamburger butonun deyismesi
  const handleCloseMenu = () => {
    setOpen(false);
    const node = ref?.current;
    if (node) {
      node.checked = false;
    }
  };
  const hideHeaderContact = () => {
    let windowHeight = window.scrollY;
    windowHeight > 100 ? setHide(true) : setHide(false);
  };

  // logout butonuna klikde firebaseden sigout olmasi
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Oturum kapatma başarılı oldu.

      navigate("/login", { replace: true });
      dispatch(setUsers(null));
    } catch (error) {
      // Bir hata oluştu.
      console.log("Hata:", error);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", hideHeaderContact);
    return () => {
      window.removeEventListener("scroll", hideHeaderContact);
    };
  }, []);

  const navLink = [
    {
      title: "Ana səhifə",
      link: "/",
      id: 1,
    },
    {
      title: "Haqqımızda",
      link: "about",
      id: 2,
    },
    {
      title: "Paketlər",
      link: "category",
      id: 3,
    },
    {
      title: "Əlaqə",
      link: "contact",
      id: 4,
    },
  ];

  return (
    <header className={`header ${hide ? "scrollshadow" : ""}`}>
      <Container>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className={`navbar ${open ? "visible" : ""}`}>
          <ul>
            {map(navLink, (item) => (
              <li key={item.id}>
                <NavLink onClick={handleCloseMenu} to={item.link}>
                  {item.title}
                </NavLink>
              </li>
            ))}
            <div className="mobile-profile">
              {parseUser ? (
                <></>
              ) : (
                <>
                  <Link to="login">Daxil ol</Link>
                  <Link to="register">Qeydiyyat</Link>
                </>
              )}
            </div>
          </ul>
        </nav>
        <div className="profile">
          {parseUser ? (
            <div className="profile__info">
              <Link to="profile">{parseUser.displayName}</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <>
              <Link to="login">Daxil ol</Link>
              <Link to="register">Qeydiyyat</Link>
            </>
          )}

          <LnButton />
          <HmButton ref={ref} handleToggleMenu={handleToggleMenu} />
        </div>
      </Container>
    </header>
  );
};
