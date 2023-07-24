import { Container, HmButton, LnButton, LnButton1 } from "../../components";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { map } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineUser } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./header.scss";
import logo from "../../../public/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { openCart, openModal } from "../../redux/modalSlice";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation("translation", { keyPrefix: "navlink" });

  const ref = useRef(null);
  const [hide, setHide] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { cart } = useSelector((state) => state.cart);
  const parseUser = JSON.parse(users);

  // cartin icindeki itemlerin sayi
  const cartLenght = cart.length;
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

  useEffect(() => {
    window.addEventListener("scroll", hideHeaderContact);
    return () => {
      window.removeEventListener("scroll", hideHeaderContact);
    };
  }, []);

  const navLink = [
    {
      title: t("home"),
      link: "/",
      id: 1,
    },
    {
      title: t("about"),
      link: "about",
      id: 2,
    },
    {
      title: t("category"),
      link: "category",
      id: 3,
    },
    {
      title: t("contact"),
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
              <div className="profile__name">
                <AiOutlineUser size={28} color="#F75C03" />
                <p>{parseUser.displayName}</p>
                <RiArrowDropDownLine size={28} color="#0e6ba8" />
                <div className="profile__name__dropmenu">
                  <Link to="profile">{t("profileLink")}</Link>
                  <button onClick={() => dispatch(openModal())}>{t("exit")} </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link to="login">Daxil ol</Link>
              <Link to="register">Qeydiyyat</Link>
            </>
          )}
          <div onClick={() => dispatch(openCart())} className="cart_icon">
            <span>{cartLenght}</span>
            <FiShoppingCart color="#F75C03" size={28} />
          </div>
          <LnButton />
          <HmButton ref={ref} handleToggleMenu={handleToggleMenu} />
        </div>
      </Container>
    </header>
  );
};
