import { Helmet } from "react-helmet";
import {
  Section,
  CategorySilder,
  CoometSilder,
  FoodSilder,
  HomeTitle,
  HomeWork,
  HomeAskQuest,
  Container,
} from "../../components";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
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
    </>
  );
};
