import { Button, Headline, Paragraf } from "../../index";
import HomePng from "../../../../public/HomePng.png";
import { useTranslation } from "react-i18next";
import "./hometitle.scss";

export const HomeTitle = () => {
  const { t } = useTranslation("translation", { keyPrefix: "homePage" });

  return (
    <div className="Home-title">
      <div className="Home-title__left">
        <Headline level={1} color="secondary">
          {t("title")}
        </Headline>
        <Paragraf color="primary" size="lg">
          {t("description")}
        </Paragraf>
        <Button to="about" color="secondary">
          {t("button")}
        </Button>
      </div>
      <div className="Home-title__right">
        <img src={HomePng} alt="hometitleimg" fetchpriority="high" />
        {/* <img src={ellips} alt="ellips" /> */}
      </div>
    </div>
  );
};
