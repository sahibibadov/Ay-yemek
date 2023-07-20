import { Button, Headline } from "../../components";

import styled from "styled-components";
const CategoryCardWrapper = styled.div`
  max-width: 320px;
  padding: 10px 0;
  display: inline-flex !important;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const CategoryCard = ({ item }) => {
  return (
    <CategoryCardWrapper key={item.id} className="categoryCard">
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
};
