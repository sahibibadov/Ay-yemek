import { map } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import "./filterproducts.scss";
import kcal from "../../../public/kcal.svg";
import { GrCircleInformation } from "react-icons/gr";
import { useParams } from "react-router-dom";
import add from "../../../public/add.svg";
import { addToCart, addToPackage, addToCategory } from "../../redux/cartSlice";
import { AnimatePresence, motion } from "framer-motion";

export const FilterProducts = () => {
  const { categoryUrl, day } = useParams();
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    dispatch(addToPackage(day));
    dispatch(addToCategory(categoryUrl));
  };

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

  const colorUrl = changeUrlColor(categoryUrl);
  const { filteredProducts } = useSelector((state) => state.categoryProductsSlice);
  return (
    <>
      <AnimatePresence>
        {map(filteredProducts, (item) => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="products_list_item"
            key={item.id}
          >
            <div className="products_list_item_img">
              <img src={item.image} alt="item" />
            </div>
            <div className="products_list_item_info">
              <h3>{item.title}</h3>
              <p>
                With only 5 ingredients, these black bean tostadas are the easiest
                and fastes You can always include additional toppings like corn
                salsa, avocado ranch
              </p>
              {day && (
                <button onClick={() => addCart(item)} className="add_to_cart">
                  <img src={add} alt="addcart" />
                  <span> Əlavə et</span>
                </button>
              )}
              <strong>
                500 <img src={kcal} alt="kcal" />
              </strong>
              <span style={{ color: colorUrl }} className="category__name">
                {item.category} paket <GrCircleInformation size={16} />
              </span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};
