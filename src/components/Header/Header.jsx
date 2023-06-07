import { Container, LnButton } from "../../components";
import "./style.scss";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [hide, setHide] = useState(false);
  const hideHeaderContact = () => {
    let windowHeight = window.scrollY;
    windowHeight > 400 ? setHide(true) : setHide(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", hideHeaderContact);
  }, []);
  return (
    <header className={`header ${hide ? "scrollshadow" : ""}`}>
      <Container>
        <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink>Ana səhifə</NavLink>
            </li>
            <li>
              <NavLink>Haqqımızda</NavLink>
            </li>
            <li>
              <NavLink>Paketlər</NavLink>
            </li>
            <li>
              <NavLink>Əlaqə</NavLink>
            </li>
          </ul>
        </nav>
        <div className="profile">
          <Link>Daxil ol</Link>
          <Link>Qeydiyyat</Link>
          <LnButton />
        </div>
      </Container>
    </header>
  );
};
