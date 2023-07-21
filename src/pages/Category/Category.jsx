import "./category.scss";
import {
  CategoryItems,
  Container,
  Headline,
  Paragraf,
  Section,
} from "../../components";
import { Helmet } from "react-helmet";

export const Category = () => {
  return (
    <>
      <Helmet>
        <title>Category</title>
      </Helmet>
      <Section>
        <div className="category__pages">
          <Headline level={1} color="primary">
            KATEQORİYA
          </Headline>
          <Paragraf size="lg" color="secondary">
            Aşağıdakı paketlərdən birini seçərək sifarişinizi təsdiqləyə bilərsiniz
          </Paragraf>
          <CategoryItems />
        </div>
      </Section>
    </>
  );
};
