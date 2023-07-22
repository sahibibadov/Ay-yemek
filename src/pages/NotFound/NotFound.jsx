import { Helmet } from "react-helmet-async";
import { Section } from "../../components";

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <Section>NotFound</Section>
    </>
  );
};
