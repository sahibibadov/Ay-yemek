import { useDispatch, useSelector } from "react-redux";
import "./activeorder.scss";
import emptycart from "../../../../public/emptycartimg.svg";
import { Headline, Paragraf, SubmitButton } from "../../../components";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { map } from "lodash";
import { removeItem } from "../../../redux/cartSlice";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

export const ActiveOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, orderDates, totalPrice } = useSelector((state) => state.cart);

  // cartda itemlari tiplerine gore filer edib gostermek ucun
  // const anayemek = useSelector((state) => selectCartItemsByType(state, "ana yemək"));
  // const garnir = useSelector((state) => selectCartItemsByType(state, "garnir"));
  // const icki = useSelector((state) => selectCartItemsByType(state, "içki"));
  // const salat = useSelector((state) => selectCartItemsByType(state, "salat"));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="profile__pages__activeorder"
    >
      {/* cart dolu olandaki itemler */}
      {cart.length > 0 ? (
        <div className="profile__pages__activeorder__cart">
          <Headline color="primary" level={3}>
            Seçilən yeməklər
          </Headline>
          <Paragraf size="md" color="secondary">
            Seçdiyiniz menyu{" "}
            <strong>
              {orderDates[0]?.startCurrentDay} {orderDates[0]?.startCurrentMonth}
            </strong>
            tarixi üçün keçərlidir
          </Paragraf>
          <div className="profile__pages__activeorder__cart__items">
            {map(cart, (item) => (
              <div key={item.id}>
                <p>
                  <span>{item.title}</span>
                  <FaTrash size={14} onClick={() => dispatch(removeItem(item.id))} />
                </p>
              </div>
            ))}
          </div>

          <p className="profile__pages__activeorder__cart__total">
            Ümumi məbləğ <strong>{totalPrice}AZN</strong>
          </p>
        </div>
      ) : (
        /* cart bos olandd */
        <div className="profile__pages__activeorder__empty">
          <img src={emptycart} alt="emtycart" />
          <h3>Aktiv Sifarişiniz Tapılmadı</h3>
          <Paragraf size="md" color="secondary">
            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
            ullamcorper .
          </Paragraf>
          <SubmitButton onClick={() => navigate("/category")}>
            Sabahın menyusunu seç <BsArrowRight size={18} />
          </SubmitButton>
          <span>*Sifarişinizi 22:00-a qədər verməyiniz xahiş olunur</span>
        </div>
      )}
    </motion.div>
  );
};
