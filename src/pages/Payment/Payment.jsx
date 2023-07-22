import { AuthImage } from "../../components/AuthImage/AuthImage";
import { Headline, Datepicker } from "../../components";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import "./payment.scss";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { addPaymentCart } from "../../redux/cartSlice";

import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import az from "dayjs/locale/az";

export const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { category, dayPackage, totalPrice, orderDates } = useSelector(
    (state) => state.cart,
  );
  const { users } = useSelector((state) => state.users);
  const user = JSON.parse(users);

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

  // payment carta tarixi ekleme
  dayjs.extend(localeData);
  dayjs.locale("az");
  const startCurrentDate = dayjs().format("DD/MM/YYYY");
  const endCurrentDate = dayjs().add(dayPackage, "day").format("DD/MM/YYYY");
  console.log(endCurrentDate);
  const handlePayment = async () => {
    try {
      if (user) {
        await dispatch(
          addPaymentCart({
            category,
            dayPackage,
            totalPrice,
            startCurrentDate,
            endCurrentDate,
          }),
        );
        await navigate("/succespage", { replace: true });
        toast.success("success payment", {
          position: "top-right",
          duration: 3000,
        });
      } else {
        await navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
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
            <Link onClick={() => handlePayment()}>Ödəniş et</Link>
          </div>
        </div>
        {/* right image */}
        <AuthImage />
      </div>
    </>
  );
};
