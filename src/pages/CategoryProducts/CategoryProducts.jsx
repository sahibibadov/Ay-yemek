import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { meals } from "../../data/meal";
import { filter, map } from "lodash";
import { useEffect } from "react";
import "./categoryproducts.scss";
import { Container, Headline, Paragraf, Section } from "../../components";

export const CategoryProducts = () => {
   // routdan gelen categori idsi ile meali filter etmek
   const { categoryUrl } = useParams();
   const products = filter(meals, (meal) => meal.category === categoryUrl);

   const [allProducts, setAllProducts] = useState(products);
   const [filteredProducts, setFilteredProducts] = useState(allProducts);
   const [selectedType, setSelectedType] = useState("ana yemək");
   const categoryButtons = [
      { id: 1, title: "ana yemək" },
      { id: 2, title: "garnir" },
      { id: 3, title: "salat" },
      { id: 4, title: "içki" },
   ];

   // sehife ilk acildiginda ana yemekleri gostermek
   useEffect(() => {
      if (selectedType === "ana yemək") {
         const filtered = filter(allProducts, (item) => item.type === "ana yemək");
         setFilteredProducts(filtered);
      }
   }, []);

   // butona klikde active klasin vermek ve filter etmek
   const handleTypeChange = (type) => {
      setSelectedType(type);
      const filtered = filter(allProducts, (item) => item.type === type);
      setFilteredProducts(filtered);
   };
   return (
      <>
         <Section>
            <Container>
               <div className="products_page">
                  <Headline color="green" level={1}>
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
                        {map(filteredProducts, (product) => (
                           <div key={product.id}>
                              {product.title}
                              {product.price}
                           </div>
                        ))}
                     </div>
                     <div className="day_pages_button">
                        <Link to="3gun">3 gun</Link>
                        <Link to="7gun">7 gun</Link>
                        <Link to="10gun">10 gun</Link>
                     </div>
                  </div>
               </div>
            </Container>
         </Section>
      </>
   );
};
