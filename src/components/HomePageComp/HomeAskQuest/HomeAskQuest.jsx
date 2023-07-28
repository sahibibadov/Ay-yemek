import { useCallback, useState } from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { Headline, Paragraf, AccordionItem } from "../../../components";
import { map, slice } from "lodash";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { items } from "../../../data/questions";
import "./homequestion.scss";

export const HomeAskQuest = () => {

  const [showAll, setShowAll] = useState(false);


  const toggleQuest = useCallback(() => {
    setShowAll((prev) => !prev);
  });

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
          {map(slice(items, 0, 3), ({ header, content, id }) => (
            <AccordionItem header={header} key={id}>
              {content}
            </AccordionItem>
          ))}
          {showAll &&
            map(slice(items, 3), ({ header, content, id }) => (
              <AccordionItem header={header} key={id}>
                {content}
              </AccordionItem>
            ))}
        </Accordion>

        <button onClick={toggleQuest}>
          {showAll ? "Bağla" : "Daha çox yüklə"}
          {showAll ? (
            <RiArrowDropUpLine size={30} />
          ) : (
            <RiArrowDropDownLine size={30} />
          )}
        </button>

        {/* <div className="bacshadow"></div> */}
      </div>
    </div>
  );
};
