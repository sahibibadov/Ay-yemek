import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { map } from "lodash";
import { Cart, FilterProducts, Headline, Paragraf, Section } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setFilterProduct, setSelected } from "../../redux/categoryProductsSlice";
import { clearCart } from "../../redux/cartSlice";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import "./dayproducts.scss";

export const DayProducts = () => {

  const { day, categoryUrl } = useParams();
  const dispatch = useDispatch();
  const { selectedType } = useSelector((state) => state.categoryProductsSlice);
  const { dayPackage } = useSelector((state) => state.cart);


  const categoryButtons = [
    { id: 1, title: "ana yemək" },
    { id: 2, title: "garnir" },
    { id: 3, title: "salat" },
    { id: 4, title: "içki" },
  ];


  // sehife ilk acildiginda ana yemekleri gostermek ve filter etmek(urlden gelen categoriUrlsi ile meali filter etmek)
  useEffect(() => {
    dispatch(setFilterProduct(categoryUrl));
    if (selectedType === "ana yemək") {
      dispatch(setSelected("ana yemək"));
    } else {
      dispatch(setSelected(selectedType));
    }
  }, [selectedType, dispatch]);


  // butona klikde active klasin vermek ve type gore filter etmek
  const handleTypeChange = (type) => {
    dispatch(setSelected(type));
  };


  // eger day uygun deyilse cartin icini bosaltmaq
  useEffect(() => {
    if (day != dayPackage) {
      dispatch(clearCart());
    }
  }, [dayPackage, day]);


  // sehifede urldeki categoriye gore Headline reng vermek
  const changeUrlColor = (url) => {
    switch (url) {
      case "Ekonom":
        return "green";
        break;
      case "Gold":
        return "gold";
        break;
      case "Premium":
        return "primary";
        break;
      default:
        return "";
        break;
    }
  };
  const colorUrl = changeUrlColor(categoryUrl);

  return (
    <>
      <Helmet>
        <title>
          {categoryUrl} {day} day package
        </title>
      </Helmet>

      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="products_page"
        >
          <Headline color={colorUrl} level={1}>
            {day} günlük paket
          </Headline>
          <Paragraf size="lg" color="secondary">
            Lorem ipsum dolor sit amet lorem ipsum dolor sit{" "}
          </Paragraf>

          <div className="type_buttons">
            {map(categoryButtons, (item) => (
              <button
                className={`type_button ${selectedType == item.title ? "active" : ""
                  }`}
                onClick={() => handleTypeChange(item.title)}
                key={item.id}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="products_wrapper">

            <div className="products_list">
              <FilterProducts />
            </div>

            <div className="card_wrapper">
              <Cart />
            </div>

          </div>

        </motion.div>
      </Section>
    </>
  );
};
