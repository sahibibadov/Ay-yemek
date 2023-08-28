import { memo } from "react";
import { Button, Headline, Paragraf } from "../../components";
import { motion } from "framer-motion";
import styled from "styled-components";

const CategoryCardWrapper = styled(motion.div)`
  max-width: 320px;
  padding: 10px 0;
  display: inline-flex !important;
  text-align: center;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 400;
  }
  @media screen and (max-width: 550px) {
    scale: 0.9;
    & > p {
      font-size: 14px;
    }
  }
`;
const CategoryImage = styled(motion.div)`
  max-width: 320px;
  width: 100%;
  height: 320px;
  background: ${({ image }) => `url(${image}) no-repeat center/cover`};
  border-radius: 0px 75px 0px 190px;
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
      <CategoryImage
        image={item.image}
        className="categoryCard__image"
      ></CategoryImage>

      <Headline color={item.color} level={3}>
        {item.title}
      </Headline>

      <Paragraf size="md" color="secondary">
        {item.description}
      </Paragraf>

      <Button to={item.category} color="primary">
        Daha ətraflı
      </Button>
    </CategoryCardWrapper>
  );
});
