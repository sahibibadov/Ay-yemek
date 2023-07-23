import "./category.scss";
import { CategoryItems, Headline, Paragraf, Section } from "../../components";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export const Category = () => {
  return (
    <>
      <Helmet>
        <title>Category</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
      </motion.div>
    </>
  );
};
