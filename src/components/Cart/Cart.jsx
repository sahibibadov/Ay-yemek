import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import az from "dayjs/locale/az";
import { Input } from "../uikits";
import { useNavigate } from "react-router-dom";
import { map } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/cartSlice";
import { closeCart } from "../../redux/modalSlice";
import { FaTrash } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback } from "react";
import "./cart.scss";

export const Cart = memo(() => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { totalPrice, cart } = useSelector((state) => state.cart);
  const cartLength = cart.length;
  // cartda itemlari tiplerine gore filer edib gostermek ucun
  // const anayemek = useSelector((state) => selectCartItemsByType(state, "ana yemək"));
  // const garnir = useSelector((state) => selectCartItemsByType(state, "garnir"));
  // const icki = useSelector((state) => selectCartItemsByType(state, "içki"));
  // const salat = useSelector((state) => selectCartItemsByType(state, "salat"));

  // klikde odenis rourtuna datani oturmek
  const handlePaymentButton = useCallback(() => {
    navigate("/payment");
    dispatch(closeCart());
  }, [navigate, dispatch]);


  //  hansi gune kimi kecerli oldugunu gostermek
  dayjs.extend(localeData);
  dayjs.locale("az");
  const currentDate = dayjs();
  const currentDay = currentDate.format("D");
  const currentMonth = currentDate.format("MMMM");


  return (
    <div className="cart-day">

      <div className="cart-day__orderday">
        Seçdiyiniz menyu {currentDay} {currentMonth} tarixi üçün keçərlidir
      </div>

      <div className="cart-day__time">
        <label>Çatdırılma saatını seçin</label>
        <Input type="time" />
      </div>

      <div className="cart-day__map">
        <label>Ünvan</label>
        <Input type="text" placeholder="Adresi daxil edin" />
      </div>

      <div className="cart-day__textarea">
        <label>Əlavə qeydiniz?</label>
        <textarea type="textarea" placeholder="Bura yazın" />
      </div>

      <ul className="cart-day__product">
        <h3>Seçilən yeməklər</h3>

        <AnimatePresence>
          {map(cart, (item) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={item.id}
            >
              <span>{item.title}</span>
              <FaTrash size={14} onClick={() => dispatch(removeItem(item.id))} />
            </motion.li>
          ))}
        </AnimatePresence>

        <p>
          Ümumi məbləğ: <strong>{totalPrice}</strong> AZN
        </p>

        <button
          className="cart-day__button"
          disabled={cartLength === 0}
          onClick={handlePaymentButton}
        >
          Menyunu Təsdiqlə
        </button>

      </ul>
    </div>
  );
});
// {map(cart, (item) => (
//   <motion.li
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     key={item.id}
//   >
//     <span>{item.title}</span>
//     <FaTrash size={14} onClick={() => dispatch(removeItem(item.id))} />
//   </motion.li>
// ))}
