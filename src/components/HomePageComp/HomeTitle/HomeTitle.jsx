import { Button, Headline, Paragraf } from "../../index";
import "./hometitle.scss";

export const HomeTitle = () => {
  return (
    <div className="Home-title">
      <div className="Home-title__left">
        <Headline level={1} color="secondary">
          SİZ YEMƏK FİKİRLƏŞMƏYİN <br /> BİZ SİZİN ÜÇÜN <br /> HAZIRLAYARIQ
        </Headline>
        <Paragraf color="primary" size="lg">
          Sizin həyat tərzinizə və büdcənizə uyğun yemək planları
        </Paragraf>
        <Button to="about" color="secondary">
          Haqqımızda
        </Button>
      </div>
      <div className="Home-title__right">
        <img src="HomePng.svg" alt="hometitleimg" />
      </div>
    </div>
  );
};
