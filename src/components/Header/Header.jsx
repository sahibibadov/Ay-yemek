import { Container, HmButton, LnButton } from "../../components";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { map } from "lodash";

import "./header.scss";
export const Header = () => {
  const [hide, setHide] = useState(false);
  const [open, setOpen] = useState(false);
  const handleToggleMenu = () => {
    setOpen((pre) => !pre);
  };
  const hideHeaderContact = () => {
    let windowHeight = window.scrollY;
    windowHeight > 100 ? setHide(true) : setHide(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", hideHeaderContact);
  }, []);

  const navLink = [
    {
      title: "Ana səhifə",
      link: "/",
    },
    {
      title: "Haqqımızda",
      link: "about",
    },
    {
      title: "Paketlər",
      link: "category",
    },
    {
      title: "Əlaqə",
      link: "contact",
    },
  ];
  return (
    <header className={`header ${hide ? "scrollshadow" : ""}`}>
      <Container>
        <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>
        <nav className={`navbar ${open ? "visible" : ""}`}>
          <ul>
            {map(navLink, (item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="profile">
          <Link to="login">Daxil ol</Link>
          <Link to="register">Qeydiyyat</Link>
          <LnButton />
          <HmButton handleToggleMenu={handleToggleMenu} />
        </div>
      </Container>
    </header>
  );
};
