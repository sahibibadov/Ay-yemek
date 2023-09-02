import { AboutMain, Section } from "../../components";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

 const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Section>
          <AboutMain />
        </Section>

      </motion.div>
    </>
  );
};
export default About