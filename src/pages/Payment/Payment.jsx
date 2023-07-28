import { useCallback } from "react";
import { AuthImage } from "../../components/AuthImage/AuthImage";
import { Headline, Datepicker } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { addPaymentCart } from "../../redux/cartSlice";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import az from "dayjs/locale/az";
import "./payment.scss";

export const Payment = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category, dayPackage, totalPrice } = useSelector((state) => state.cart);
  const { users } = useSelector((state) => state.users);
  const user = JSON.parse(users);


  const changeUrlColor = useCallback((url) => {
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
        return "";
    }
  }, []);
  const colorUrl = changeUrlColor(category);


  // payment carta tarixi ekleme
  dayjs.extend(localeData);
  dayjs.locale("az");
  const startCurrentDate = dayjs().format("DD/MM/YYYY");
  const endCurrentDate = dayjs().add(dayPackage, "day").format("DD/MM/YYYY");

  // klikde odenisin edilmesi
  const handlePayment = useCallback(async () => {
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
  }, [
    user,
    dispatch,
    category,
    dayPackage,
    totalPrice,
    startCurrentDate,
    endCurrentDate,
    navigate,
  ]);

  return (
    <>
      <Helmet>
        <title>Payment</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="payment__page"
      >
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
      </motion.div>
    </>
  );
};
