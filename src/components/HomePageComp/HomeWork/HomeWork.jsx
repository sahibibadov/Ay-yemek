import { Headline, Paragraf } from "../../index";
import { map } from "lodash";
import styled from "styled-components";
import homework1 from "../../../../public/homework1.png";
import homework2 from "../../../../public/homework2.png";
import homework3 from "../../../../public/homework3.png";

const WordWrapper = styled.div`
  text-align: center;
`;
const Wordcards = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 500px;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: #f75c03;
    opacity: 0.1;
    z-index: -1;
    filter: blur(138px);
  }
  & > div:nth-of-type(2) {
    align-self: flex-end;
  }
`;
const Wordcard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 320px;
  img {
    display: inline-block;
  }
  /* filter: drop-shadow(0px 0px 200px #f75c03); */
  & p {
    margin-top: 20px;
    margin-bottom: 12px;
    color: rgba(247, 92, 3, 0.37);
    font-weight: 600;
    font-size: 35px;
  }
  & span {
    color: #00072d;
    font-weight: 600;
    font-size: 24px;
  }
  @media screen and (max-width: 1059px) {
    & p {
      margin-top: 0;
      margin-bottom: 4px;
      color: rgba(247, 92, 3, 0.37);
      font-weight: 500;
      font-size: 30px;
    }
    & span {
      color: #00072d;
      font-weight: 500;
      font-size: 20px;
    }
  }
`;
const Wordsvg1 = styled.div`
  position: absolute;
  @media screen and (max-width: 1430px) {
    transform: scale(0.8);
  }
  @media screen and (max-width: 1310px) {
    transform: scale(0.6);
  }
  @media screen and (max-width: 1204px) {
    transform: scale(0.5);
  }
  @media screen and (max-width: 1162px) {
    display: none;
  }
  left: 25%;
  top: 35%;
`;
const Wordsvg2 = styled.div`
  position: absolute;
  @media screen and (max-width: 1430px) {
    transform: scale(0.8);
  }
  @media screen and (max-width: 1310px) {
    transform: scale(0.6);
  }
  @media screen and (max-width: 1204px) {
    transform: scale(0.5);
  }
  @media screen and (max-width: 1162px) {
    display: none;
  }
  right: 25%;
  top: 35%;
`;
export const HomeWork = () => {
  const workCard = [
    {
      image: homework1,
      id: 1,
      description: "Qeydiyyatdan keçin",
    },
    {
      image: homework2,
      id: 2,
      description: "Paketi və yeməklərinizi seçin",
    },
    {
      image: homework3,
      id: 3,
      description: "Sürətli bir şəkildə çatdırılma edilsin",
    },
  ];
  return (
    <WordWrapper>
      <Headline level={1} color="secondary">
        AY YEMƏK NECƏ İŞLƏYİR?
      </Headline>
      <Paragraf color="secondary" size="lg">
        Lorem Ipsum is simply dummy text of the printing
      </Paragraf>
      <Wordcards>
        {map(workCard, (item) => (
          <Wordcard key={item.id}>
            <div>
              <img src={item.image} alt="workimage" />
            </div>
            <p>{item.id}</p>
            <span>{item.description}</span>
          </Wordcard>
        ))}
        <Wordsvg1>
          <img src="workarrow1.svg" alt="asd" />
        </Wordsvg1>
        <Wordsvg2>
          <img src="workarrow2.svg" alt="asd" />
        </Wordsvg2>
      </Wordcards>
    </WordWrapper>
  );
};
