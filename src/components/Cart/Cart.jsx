import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import az from "dayjs/locale/az";
import "./cart.scss";
import { Input } from "../uikits";
import { useNavigate } from "react-router-dom";
import { map } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, selectCartItemsByType } from "../../redux/cartSlice";
import { closeCart } from "../../redux/modalSlice";
import { FaTrash } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Li = ({ children }) => (
  <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    {children}
  </motion.li>
);
const H5 = ({ children }) => (
  <motion.h5 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    {children}
  </motion.h5>
);

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { totalPrice, cart } = useSelector((state) => state.cart);
  const cartLength = cart.length;
  // cartda itemlari tiplerine gore filer edib gostermek ucun
  const anayemek = useSelector((state) =>
    selectCartItemsByType(state.cart, "ana yemək"),
  );
  const garnir = useSelector((state) => selectCartItemsByType(state.cart, "garnir"));
  const icki = useSelector((state) => selectCartItemsByType(state.cart, "içki"));
  const salat = useSelector((state) => selectCartItemsByType(state.cart, "salat"));

  // klikde odenis rourtuna datani oturmek
  const handlePaymentButton = () => {
    navigate("/payment");
    dispatch(closeCart());
  };

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
          {anayemek.length > 0 && <H5>ana yemek</H5>}
          {map(anayemek, (item) => (
            <Li key={item.id}>
              <span>{item.title}</span>
              <FaTrash size={14} onClick={() => dispatch(removeItem(item.id))} />
            </Li>
          ))}

          {garnir.length > 0 && <H5>garnir</H5>}
          {map(garnir, (item) => (
            <Li key={item.id}>
              <span>{item.title}</span>
              <FaTrash size={14} onClick={() => dispatch(removeItem(item.id))} />
            </Li>
          ))}

          {icki.length > 0 && <H5>icki</H5>}
          {map(icki, (item) => (
            <Li key={item.id}>
              <span>{item.title}</span>
              <FaTrash size={14} onClick={() => dispatch(removeItem(item.id))} />
            </Li>
          ))}

          {salat.length > 0 && <H5>salat</H5>}
          {map(salat, (item) => (
            <Li key={item.id}>
              <span>{item.title}</span>
              <FaTrash size={14} onClick={() => dispatch(removeItem(item.id))} />
            </Li>
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
};
