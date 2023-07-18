import { useDispatch } from "react-redux";
import { closeCart } from "../../redux/modalSlice";
import { GrClose } from "react-icons/gr";
import "./cartmodal.scss";
import { motion } from "framer-motion";
import { Cart } from "../Cart/Cart";

export const CartModal = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`backdrop-cart`}
      onClick={() => dispatch(closeCart())}
    >
      <motion.div
        initial={{ translateX: 200, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        exit={{ translateX: 200, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="cart-modal"
      >
        <Cart />
        <span onClick={() => dispatch(closeCart())} className="close-cart-modal">
          <GrClose size={24} />
        </span>
      </motion.div>
    </motion.div>
  );
};
