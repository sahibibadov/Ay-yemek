import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { Headline, Paragraf, AccordionItem } from "../../../components";
import { map } from "lodash";
import { items } from "../../../data/questions";
import "./homequestion.scss";

export const HomeAskQuest = () => {
  return (
    <div className="homequest">
      <Headline level={1} color="secondary">
        TEZ-TEZ SORUŞULAN SUALLAR
      </Headline>
      <Paragraf size="lg" color="secondary">
        Lorem Ipsum is simply dummy text of the printing
      </Paragraf>

      <div className="homequest__accordiong">
        <Accordion transition transitionTimeout={250}>
          {map(items, ({ header, content, id }) => (
            <AccordionItem header={header} key={id}>
              {content}
            </AccordionItem>
          ))}
        </Accordion>

        {/* <div className="bacshadow"></div> */}
      </div>
    </div>
  );
};
