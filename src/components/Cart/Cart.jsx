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

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { totalPrice, cart } = useSelector((state) => state.cart);
  const cartLength = cart.length;
  // cartda itemlari tiplerine gore filer edib gostermek ucun
  const anayemek = useSelector((state) => selectCartItemsByType(state, "ana yemək"));
  const garnir = useSelector((state) => selectCartItemsByType(state, "garnir"));
  const icki = useSelector((state) => selectCartItemsByType(state, "içki"));
  const salat = useSelector((state) => selectCartItemsByType(state, "salat"));

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

        {anayemek.length > 0 && <h5>ana yemek</h5>}
        {map(anayemek, (item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <FaTrash size={14} onClick={() => dispatch(removeItem(item.id))} />
          </li>
        ))}

        {garnir.length > 0 && <h5>garnir</h5>}
        {map(garnir, (item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <FaTrash size={14} onClick={() => dispatch(removeItem(item.id))} />
          </li>
        ))}

        {icki.length > 0 && <h5>icki</h5>}
        {map(icki, (item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <FaTrash size={14} onClick={() => dispatch(removeItem(item.id))} />
          </li>
        ))}

        {salat.length > 0 && <h5>salat</h5>}
        {map(salat, (item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <FaTrash size={14} onClick={() => dispatch(removeItem(item.id))} />
          </li>
        ))}

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

{
  /*   */
}
