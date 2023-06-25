import "./category.scss";
import {
  CategoryProducts,
  Container,
  Headline,
  Paragraf,
  Section,
} from "../../components";

export const Category = () => {
  return (
    <>
      <Section>
        <Container>
          <div className="category__pages">
            <Headline level={1} color="primary">
              KATEQORİYA
            </Headline>
            <Paragraf size="lg" color="secondary">
              Aşağıdakı paketlərdən birini seçərək sifarişinizi təsdiqləyə
              bilərsiniz
            </Paragraf>
            <CategoryProducts />
          </div>
        </Container>
      </Section>
    </>
  );
};
