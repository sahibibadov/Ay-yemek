import { map } from "lodash";
import { Button, Headline, Paragraf } from "../uikits";
import { Link } from "react-router-dom";

import "./categoryslider.scss";
import { CustomSlider } from "../Slider/Slider";

import { category } from "../../data/category";

export const CategorySilder = () => {
  return (
    <div className="categroy__silder">
      <Headline level={1} color="secondary">
        KATEQORİYA
      </Headline>
      <Paragraf size="lg" color="secondary">
        Sizin həyat tərzinizə və büdcənizə uyğun yemək planları
      </Paragraf>
      <Link to="category">Hamısına bax</Link>

      <CustomSlider comp={3}>
        {map(category, (item) => (
          <div key={item.id} className="categoryCard">
            <div className="categoryCard__image">
              <img src={item.image} alt="img" />
            </div>
            <Headline color={item.color} level={3}>
              {item.category}
            </Headline>
            <p>{item.description}</p>
            <Button to={`category/${item.category}`} color="primary">
              Daha ətraflı
            </Button>
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};
