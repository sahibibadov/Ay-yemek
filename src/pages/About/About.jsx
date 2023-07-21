import { AboutMain, Container, Section } from "../../components";
import { Helmet } from "react-helmet";

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
