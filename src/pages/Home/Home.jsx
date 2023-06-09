import React from "react";
import { Section } from "../../components/uikits/Section";

import { HomeTitle, HomeWork } from "../../components";
import { CategorySilder } from "../../components/CatergorySlider/CategorySilder";

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
    </>
  );
};
