import { memo } from "react";
import { Button, Headline } from "../../components";

import { motion } from "framer-motion";

import styled from "styled-components";
const CategoryCardWrapper = styled(motion.div)`
  max-width: 320px;
  padding: 10px 0;
  display: inline-flex !important;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 550px) {
    scale: 0.9;

    & > p {
      font-size: 14px;
    }
  }
`;

export const CategoryCard = memo(({ item }) => {
  const itemAn = {
    hidden: { translateY: 20, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
    },
  };
  return (
    <CategoryCardWrapper variants={itemAn} key={item.id} className="categoryCard">
      <div className="categoryCard__image">
        <img src={item.image} alt="img" />
      </div>
      <Headline color={item.color} level={3}>
        {item.title}
      </Headline>
      <p>{item.description}</p>
      <Button to={item.category} color="primary">
        Daha ətraflı
      </Button>
    </CategoryCardWrapper>
  );
});
