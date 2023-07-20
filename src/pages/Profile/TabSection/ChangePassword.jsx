import styled from "styled-components";
import { Input, Label, SubmitButton } from "../../../components";

const WrapperDiv = styled.div`
  max-width: 520px;
  width: 100%;
  margin-inline: auto;
  & LabeL {
    color: #0e6ba8;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  & button {
    margin-top: 30px;
    max-width: 100%;
  }
`;

export const ChangePassword = () => {
  return (
    <WrapperDiv>
      <Label>Köhnə şifrə</Label>
      <Input type="password" placeholder="*****" />

      <Label>Yeni şifrə</Label>
      <Input type="password" placeholder="*****" />

      <Label>Yeni şifrə təkrar</Label>
      <Input type="password" placeholder="*****" />

      <SubmitButton>Yadda saxla</SubmitButton>
    </WrapperDiv>
  );
};
