import { Container, Headline, Section, Modal } from "../../components";
import React from "react";
import { map } from "lodash";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./profile.scss";
import lock from "../../../public/profileacion/lock.svg";
import order from "../../../public/profileacion/order.svg";
import outarrow from "../../../public/profileacion/outarrow.svg";
import payment from "../../../public/profileacion/payment.svg";
import user from "../../../public/profileacion/user.svg";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modalSlice";

export const Profile = () => {
  const dispatch = useDispatch();

  const profileNavItems = [
    {
      title: "Məlumatlarım",
      link: "profile",
      id: 1,
      icon: user,
    },
    {
      title: "Aktiv Sifarişlərim",
      link: "activeorders",
      id: 2,
      icon: order,
    },
    {
      title: "Şifrə dəyişdir",
      link: "changepassword",
      id: 3,
      icon: lock,
    },
    {
      title: "Ödənişlərim",
      link: "payments",
      id: 4,
      icon: payment,
    },
  ];
  return (
    <>
      <Container>
        <Section>
          <div className="profile__pages">
            <Headline level={1} color="primary">
              PROfİLİ MƏLUMATLARIM
            </Headline>
            <div className="profile__pages__main">
              <nav className="profile__pages__navbar">
                <ul>
                  {map(profileNavItems, (item) => (
                    <li key={item.id}>
                      <NavLink to={item.link}>
                        <img src={item.icon} alt={item.title} />
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => dispatch(openModal())}
                  className="logout"
                >
                  <img src={outarrow} alt="outarrow" />
                  Çıxış
                </button>
              </nav>
              <div className="profile__pages__content">
                <Outlet />
              </div>
            </div>
          </div>
        </Section>
        <Modal />
      </Container>
    </>
  );
};
