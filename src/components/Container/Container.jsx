import styled from "styled-components";

export const Container = styled.div`
  width: min(100% - 6.25rem, 1340px);
  margin-inline: auto;
  @media screen and (max-width: 700px) {
    width: min(100% - 3.25rem, 1340px);
  }
`;
