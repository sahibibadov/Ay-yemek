import styled from "styled-components";
export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ error }) => (error ? "#fa3e3e" : "#444150")};
  margin-top: 8px;
`;
