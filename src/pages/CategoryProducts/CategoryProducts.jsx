import { useParams } from "react-router-dom";
import { map } from "lodash";
import { useEffect } from "react";
import "./categoryproducts.scss";
import {
  DayLinkItems,
  FilterProducts,
  Headline,
  Paragraf,
  Section,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setFilterProduct, setSelected } from "../../redux/categoryProductsSlice";
import { clearCart } from "../../redux/cartSlice";
import { Helmet } from "react-helmet-async";

const categoryButtons = [
  { id: 1, title: "ana yemək" },
  { id: 2, title: "garnir" },
  { id: 3, title: "salat" },
  { id: 4, title: "içki" },
];
const dayLinkItems = [
  { id: 1, title: "3 günlük", price: "20", link: "3" },
  { id: 2, title: "10 günlük", price: "30", link: "10" },
  { id: 3, title: "20 günlük", price: "50", link: "20" },
  { id: 4, title: "30 günlük", price: "70", link: "30" },
];
export const CategoryProducts = () => {
  const { categoryUrl, day } = useParams();
  const dispatch = useDispatch();
  const { selectedType } = useSelector((state) => state.categoryProductsSlice);
  const { dayPackage, category } = useSelector((state) => state.cart);

  // sehife ilk acildiginda ana yemekleri gostermek ve filter etmek(urlden gelen categoriUrlsi ile meali filter etmek)
  useEffect(() => {
    dispatch(setFilterProduct(categoryUrl));
    if (selectedType === "ana yemək") {
      dispatch(setSelected("ana yemək"));
    } else {
      dispatch(setSelected(selectedType));
    }
  }, [selectedType, dispatch]);

  // urlde secili paket yoxdursa cartin icin bowaltmaq
  useEffect(() => {
    if (categoryUrl != category) {
      dispatch(clearCart());
    }
  }, [categoryUrl, category]);
  // butona klikde active klasin vermek ve type gore filter etmek
  const handleTypeChange = (type) => {
    dispatch(setSelected(type));
  };

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
        break;
    }
  };
  const colorUrl = changeUrlColor(categoryUrl);

  return (
    <>
      <Helmet>
        <title>Category {categoryUrl}</title>
      </Helmet>
      <Section>
        <div className="products_page">
          <Headline color={colorUrl} level={1}>
            {categoryUrl}
          </Headline>
          <Paragraf size="lg" color="secondary">
            Lorem ipsum dolor sit amet lorem ipsum dolor sit{" "}
          </Paragraf>
          <div className="type_buttons">
            {map(categoryButtons, (item) => (
              <button
                className={`type_button ${
                  selectedType == item.title ? "active" : ""
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
            <div className="day_pages_buttons">
              {map(dayLinkItems, (item) => (
                <DayLinkItems item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
