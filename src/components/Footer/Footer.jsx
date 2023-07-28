import { Container } from "../";
import { map } from "lodash";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import Logo from "../../../public/logo.png";
import { useTranslation } from "react-i18next";
import "./footer.scss";

export const Footer = () => {

  const { t } = useTranslation("translation", { keyPrefix: "navlink" });

  const navLink = [
    {
      title: t("home"),
      link: "/",
    },
    {
      title: t("about"),
      link: "about",
    },
    {
      title: t("category"),
      link: "category",
    },
    {
      title: t("contact"),
      link: "contact",
    },
    {
      title: "FAQs",
      link: "/",
    },
  ];


  return (
    <footer className="footer">
      <Container>

        <div className="footer__logo">
          <img src={Logo} alt="logo" />
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>

        <ul className="footer__nav">
          {map(navLink, (item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <ul className="footer__social">
          <Link to="/">
            <FaFacebookF size={22} />
          </Link>
          <Link to="/">
            <FaTwitter size={22} />
          </Link>
          <Link to="/">
            <FaInstagram size={22} />
          </Link>
        </ul>

      </Container>
    </footer>
  );
};
