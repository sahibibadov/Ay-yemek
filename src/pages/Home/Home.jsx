import { Helmet } from "react-helmet-async";
import {
  Section,
  CategorySilder,
  CoometSilder,
  FoodSilder,
  HomeTitle,
  HomeWork,
  HomeAskQuest,
} from "../../components";
import { motion } from "framer-motion";

 const Home = () => {

  return (
    <>
      <Helmet>
        <title>Ay Yemək</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
      </motion.div>
    </>
  );
};
export default Home