import { Helmet } from "react-helmet-async";
import { Section } from "../../components";
import { motion } from "framer-motion";

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Section>NotFound</Section>
      </motion.div>
    </>
  );
};
