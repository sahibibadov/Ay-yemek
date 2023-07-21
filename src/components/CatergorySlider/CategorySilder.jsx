import { map } from "lodash";
import { Headline, Paragraf } from "../uikits";
import { Link } from "react-router-dom";
import "./categoryslider.scss";
import { categorys } from "../../data/category";
import { CategoryCard, CustomSlider } from "../../components";

export const CategorySilder = () => {
  return (
    <div className="categroy__silder">
      <Headline level={1} color="secondary">
        KATEQORİYA
      </Headline>
      <Paragraf size="lg" color="secondary">
        Sizin həyat tərzinizə və büdcənizə uyğun yemək planları
      </Paragraf>
      <Link to="category-link">Hamısına bax</Link>

      <CustomSlider comp={3}>
        {map(categorys, (item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </CustomSlider>
    </div>
  );
};
