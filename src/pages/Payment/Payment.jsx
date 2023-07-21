import { AuthImage } from "../../components/AuthImage/AuthImage";
import { Headline, SubmitButton, Datepicker } from "../../components";
import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import "./payment.scss";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

export const Payment = () => {
  const navigate = useNavigate();

  const { category, dayPackage, totalPrice } = useSelector((state) => state.cart);

  const changeUrlColor = (url) => {
    switch (url) {
      case "Ekonom":
        return "#2BAD3F";
        break;
      case "Gold":
        return "#E8C50B";
        break;
      case "Premium":
        return "#F75C03";
        break;
      default:
        break;
    }
  };
  const colorUrl = changeUrlColor(category);

  const toastFunc = () => {
    toast.success("success payment", {
      position: "top-right",
      duration: 3000,
    });
  };
  return (
    <>
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <div className="payment__page">
        <div className="payment__wrapper__container">
          <div className="payment__content">
            <div className="payment__content__img">
              <img src="logo.png" alt="logo" />
            </div>
            <button onClick={() => navigate(-1)} className="return__button"></button>

            <Headline color="primary" level={1}>
              ÖDƏNİŞ
            </Headline>
            <p>Seçdiyiniz kateqoriya ve paket</p>
            <div
              style={{ backgroundColor: colorUrl }}
              className="payment__content__category"
            >
              {category} {dayPackage} günlük menyu
            </div>

            <Datepicker />

            <span>
              Ümumi məbləğ: <strong>{totalPrice}</strong> AZN
            </span>
            <Link onClick={toastFunc} replace={true} to="/succespage">
              Ödəniş et
            </Link>
          </div>
        </div>
        {/* right image */}
        <AuthImage />
      </div>
    </>
  );
};

// import React from "react";
// import { useSelector } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// export const Payment = () => {
//   const navigate = useNavigate();
//   const { category, dayPackage } = useSelector((state) => state.cart);
//   console.log("category", category);
//   console.log("dayPackage", dayPackage);

//   return (
//     <div>
//       <p>{dayPackage}</p>
//       <p>{category}</p>
//       <Link replace={true} to="/succespage">
//         odenis et
//       </Link>
//     </div>
//   );
// };
