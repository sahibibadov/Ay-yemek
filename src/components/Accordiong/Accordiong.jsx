import { AccordionItem as Item } from "@szhsin/react-accordion";
import "./accordiong.scss";
import questplus from "../../../public/questplus.svg";
/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

export const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className="chevron" src={questplus} alt="Chevron Down" />
      </>
    }
    className="item"
    buttonProps={{
      className: ({ isEnter }) => `itemBtn ${isEnter && "itemBtnExpanded"}`,
    }}
    contentProps={{ className: "itemContent" }}
    panelProps={{ className: "itemPanel" }}
  />
);
