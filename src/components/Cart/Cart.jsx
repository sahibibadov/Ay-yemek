import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import az from "dayjs/locale/az";
import "./cart.scss";
import { Input } from "../uikits";
import { useNavigate, useParams } from "react-router-dom";
import { map } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, selectCartItemsByType } from "../../redux/cartSlice";

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { day, categoryUrl } = useParams();
  const { totalPrice, cart } = useSelector((state) => state.cart);
  const cartLength = cart.length;
  // cartda itemlari tiplerine gore filer edib gostermek ucun
  const anayemek = useSelector((state) => selectCartItemsByType(state, "ana yemək"));
  const garnir = useSelector((state) => selectCartItemsByType(state, "garnir"));
  const icki = useSelector((state) => selectCartItemsByType(state, "içki"));
  const salat = useSelector((state) => selectCartItemsByType(state, "salat"));

  // klikde odenis rourtuna datani oturmek
  const handlePaymentButton = () => {
    navigate("/payment", { state: { day, categoryUrl } });
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
      <div className="cart-day__product">
        <h3>Seçilən yeməklər</h3>

        {anayemek.length > 0 && <h5>ana yemek</h5>}
        {map(anayemek, (item) => (
          <p key={item.id}>
            {item.title}{" "}
            <button onClick={() => dispatch(removeItem(item.id))}>x</button>
          </p>
        ))}

        {garnir.length > 0 && <h5>garnir</h5>}
        {map(garnir, (item) => (
          <p key={item.id}>
            {item.title}{" "}
            <button onClick={() => dispatch(removeItem(item.id))}>x</button>
          </p>
        ))}

        {icki.length > 0 && <h5>icki</h5>}
        {map(icki, (item) => (
          <p key={item.id}>
            {item.title}{" "}
            <button onClick={() => dispatch(removeItem(item.id))}>x</button>
          </p>
        ))}

        {salat.length > 0 && <h5>salat</h5>}
        {map(salat, (item) => (
          <p key={item.id}>
            {item.title}{" "}
            <button onClick={() => dispatch(removeItem(item.id))}>x</button>
          </p>
        ))}

        <p>totalPrice: {totalPrice} manat</p>
        <button
          className="cart-day__button"
          disabled={cartLength === 0}
          onClick={handlePaymentButton}
        >
          ÖDƏNİŞ testiqle
        </button>
      </div>
    </div>
  );
};

{
  /*   */
}
