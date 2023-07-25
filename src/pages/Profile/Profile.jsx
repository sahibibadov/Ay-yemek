import { Headline, Section, Profiletab } from "../../components";
import React, { useCallback, useState } from "react";
import { map } from "lodash";
import { motion } from "framer-motion";
import "./profile.scss";
import lock from "../../../public/profileacion/lock.svg";
import order from "../../../public/profileacion/order.svg";
import outarrow from "../../../public/profileacion/outarrow.svg";
import payment from "../../../public/profileacion/payment.svg";
import user from "../../../public/profileacion/user.svg";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modalSlice";
import { Information } from "./TabSection/Information";
import { ActiveOrder } from "./TabSection/ActiveOrder";
import { ChangePassword } from "./TabSection/ChangePassword";
import { PaymentsTab } from "./TabSection/PaymentsTab";
import { Helmet } from "react-helmet-async";
export const Profile = () => {
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useDispatch();

  const profileNavItems = [
    {
      title: "Məlumatlarım",
      link: "profile",
      id: 1,
      icon: user,
      content: <Information />,
    },
    {
      title: "Aktiv Sifarişlərim",
      link: "activeorders",
      id: 2,
      icon: order,
      content: <ActiveOrder />,
    },
    {
      title: "Şifrə dəyişdir",
      link: "changepassword",
      id: 3,
      icon: lock,
      content: <ChangePassword />,
    },
    {
      title: "Ödənişlərim",
      link: "payments",
      id: 4,
      icon: payment,
      content: <PaymentsTab />,
    },
  ];
  // klikde active klasin vermek
  const handleTab = useCallback((id) => {
    setActiveTab(id);
  }, []);

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="profile__pages"
        >
          <Headline level={1} color="primary">
            PROfİLİ MƏLUMATLARIM
          </Headline>
          <div className="profile__pages__main">
            <nav className="profile__pages__navbar">
              <ul>
                {map(profileNavItems, (item) => (
                  <li
                    key={item.id}
                    className={activeTab == item.id ? "active" : ""}
                    onClick={() => handleTab(item.id)}
                  >
                    <img src={item.icon} alt={item.title} />
                    {item.title}
                  </li>
                ))}
              </ul>
              <button onClick={() => dispatch(openModal())} className="logout">
                <img src={outarrow} alt="outarrow" />
                Çıxış
              </button>
            </nav>
            <div className="profile__pages__content">
              {map(profileNavItems, (item) => (
                <Profiletab key={item.id} id={item.id} activeTab={activeTab}>
                  {item.content}
                </Profiletab>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};
