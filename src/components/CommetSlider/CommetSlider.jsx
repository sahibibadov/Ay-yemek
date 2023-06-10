import { Headline, Paragraf } from "../uikits";

import "./commetslider.scss";
import { CustomSlider } from "../Slider/Slider";

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
        <div className="commetcard">
          <Paragraf size="sm" color="green">
            Donec pellentesque turpis sit dolor nisi, purus. Eget laoreet eget
            nec. Donec pellentesque turpis sit dolor nisi, purus. Eget laoreet
            eget nec. Eget laoreet eget nec. Donec pellentesque turpis sit dolor
            nisi, purus. .
          </Paragraf>
          <div className="commetcard__img">
            <img src="../../../public/user.png" alt="img" />
            <img
              className="tick"
              src="../../../public/usertick.svg"
              alt="img"
            />
            <div className="commetcard__user">
              <p className="commetcard__user__name">Fidan Valiyeva</p>
              <p className="commetcard__user__work">Designer</p>
            </div>
          </div>
        </div>
        <div className="commetcard">
          <Paragraf size="sm" color="green">
            Donec pellentesque turpis sit dolor nisi, purus. Eget laoreet eget
            nec. Donec pellentesque turpis sit dolor nisi, purus. Eget laoreet
            eget nec. Eget laoreet eget nec. Donec pellentesque turpis sit dolor
            nisi, purus. .
          </Paragraf>
          <div className="commetcard__img">
            <img src="../../../public/user.png" alt="img" />
            <img
              className="tick"
              src="../../../public/usertick.svg"
              alt="img"
            />
            <div className="commetcard__user">
              <p className="commetcard__user__name">Fidan Valiyeva</p>
              <p className="commetcard__user__work">Designer</p>
            </div>
          </div>
        </div>
        <div className="commetcard">
          <Paragraf size="sm" color="green">
            Donec pellentesque turpis sit dolor nisi, purus. Eget laoreet eget
            nec. Donec pellentesque turpis sit dolor nisi, purus. Eget laoreet
            eget nec. Eget laoreet eget nec. Donec pellentesque turpis sit dolor
            nisi, purus. .
          </Paragraf>
          <div className="commetcard__img">
            <img src="../../../public/user.png" alt="img" />
            <img
              className="tick"
              src="../../../public/usertick.svg"
              alt="img"
            />
            <div className="commetcard__user">
              <p className="commetcard__user__name">Fidan Valiyeva</p>
              <p className="commetcard__user__work">Designer</p>
            </div>
          </div>
        </div>
        <div className="commetcard">
          <Paragraf size="sm" color="green">
            Donec pellentesque turpis sit dolor nisi, purus. Eget laoreet eget
            nec. Donec pellentesque turpis sit dolor nisi, purus. Eget laoreet
            eget nec. Eget laoreet eget nec. Donec pellentesque turpis sit dolor
            nisi, purus. .
          </Paragraf>
          <div className="commetcard__img">
            <img src="../../../public/user.png" alt="img" />
            <img
              className="tick"
              src="../../../public/usertick.svg"
              alt="img"
            />
            <div className="commetcard__user">
              <p className="commetcard__user__name">Fidan Valiyeva</p>
              <p className="commetcard__user__work">Designer</p>
            </div>
          </div>
        </div>
      </CustomSlider>
    </div>
  );
};
