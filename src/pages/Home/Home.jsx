import {
  Section,
  CategorySilder,
  CoometSilder,
  FoodSilder,
  HomeTitle,
  HomeWork,
} from "../../components";

export const Home = () => {
  return (
    <>
      <Section>
        <HomeTitle />
      </Section>
      <Section>
        <CategorySilder />
      </Section>
      <Section>
        <HomeWork />
      </Section>
      <Section>
        <FoodSilder />
      </Section>
      <Section>
        <CoometSilder />
      </Section>
      <Section>asds</Section>
    </>
  );
};
