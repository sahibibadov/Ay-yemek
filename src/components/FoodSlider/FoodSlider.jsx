import { map } from "lodash";
import { CustomSlider, Headline, Paragraf } from "../../components";
import { foodImage } from "../../data/foodimage";
import "./foodslider.scss";

export const FoodSilder = () => {
  return (
    <div className="food__silder">
      <Headline level={1} color="secondary">
        SEVİLƏN YEMƏKLƏRİMİZ
      </Headline>

      <Paragraf size="lg" color="secondary">
        Bizim sevilən yeməklərimiz, zövqünüzü möhkəm edəcək ləzzət və dadlarla
        doludur
      </Paragraf>

      <CustomSlider comp={5}>
        {map(foodImage, (item) => (
          <div key={item.id} className="foodcard">
            <img src={item.image} alt="img" />
            <p>{item.name}</p>
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};
