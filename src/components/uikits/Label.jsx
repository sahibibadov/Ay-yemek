import styled from "styled-components";
export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ errors }) => (errors ? "#e10000;" : "#444150")};
  margin-bottom: 8px;
`;
