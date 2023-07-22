import { AboutMain, Section } from "../../components";
import { Helmet } from "react-helmet-async";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Section>
        <AboutMain />
      </Section>
    </>
  );
};
