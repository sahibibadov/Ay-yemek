import { map } from "lodash";
import "./foodslider.scss";
import { CustomSlider, Headline, Paragraf } from "../../components";
import { foodImage } from "../../data/foodimage";

export const FoodSilder = () => {
  return (
    <div className="food__silder">
      <Headline level={1} color="secondary">
        SEVİLƏN YEMƏKLƏRİMİZ
      </Headline>
      <Paragraf size="lg" color="secondary">
        Lorem Ipsum is simply dummy text of the printing
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
