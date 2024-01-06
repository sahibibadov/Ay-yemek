import styled from "styled-components";
import { motion } from "framer-motion";

const SectionWrapper = styled(motion.section)`
  padding-block: 80px;
  @media screen and (max-width: 1000px) {
    padding-block: 50px;
  }
  @media screen and (max-width: 800px) {
    padding-block: 30px;
  }
  @media screen and (max-width: 700px) {
    padding-block: 25px;
  }
`;

export const Section = ({ children }) => {
  return (
    <SectionWrapper
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {children}
    </SectionWrapper>
  );
};
