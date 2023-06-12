import { Headline, Paragraf } from "../../components";
import "./aboutmain.scss";

export const AboutMain = () => {
  return (
    <div className="about-main">
      <Headline level={1} color="primary">
        Haqqımızda
      </Headline>
      <Paragraf size="lg" color="secondary">
        Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
        ullamcorper .
      </Paragraf>
      <div className="about-main__images">
        <img src="../../../public/aboutimg1.jpg" alt="aboutimg1" />
        <img src="../../../public/aboutimg2.jpg" alt="aboutimg2" />
      </div>
      <div className="about-main__content">
        <Headline level={2} color="secondary">
          Biz nə edirik?
        </Headline>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using.
          <br />
          <br /> Content here', making it look like readable English. Many
          desktop publishing packages and web page editors now use Lorem Ipsum
          as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy.{" "}
        </p>
      </div>
    </div>
  );
};
