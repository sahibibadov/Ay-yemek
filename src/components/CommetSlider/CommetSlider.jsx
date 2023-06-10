import { Headline, Paragraf } from "../uikits";
import { CustomSlider } from "../Slider/Slider";
import { commetData } from "../../data/commetdata";
import "./commetslider.scss";

export const CoometSilder = () => {
  return (
    <div className="commetcard__silder">
      <Headline level={1} color="secondary">
        ONLAR DAİM BİZİ SEÇİR
      </Headline>
      <Paragraf size="lg" color="secondary">
        Lorem Ipsum is simply dummy text of the printing
      </Paragraf>

      <CustomSlider comp={2}>
        {commetData.map((item) => (
          <div className="commetcard">
            <Paragraf size="sm" color="green">
              {item.commet}
            </Paragraf>
            <div className="commetcard__img">
              <img src={item.image} alt="img" />
              <img className="tick" src={item.tick} alt="img" />
              <div className="commetcard__user">
                <p className="commetcard__user__name"> {item.userName}</p>
                <p className="commetcard__user__work"> {item.work}</p>
              </div>
            </div>
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};
