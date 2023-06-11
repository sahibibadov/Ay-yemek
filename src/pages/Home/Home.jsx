import {
  Section,
  CategorySilder,
  CoometSilder,
  FoodSilder,
  HomeTitle,
  HomeWork,
  HomeAskQuest,
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
      <Section>
        <HomeAskQuest />
      </Section>
      <Section>asdas</Section>
    </>
  );
};
