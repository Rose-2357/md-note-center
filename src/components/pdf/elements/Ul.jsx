import { View, Text } from "@react-pdf/renderer";
import { styles } from "../PdfStyles";
import Li from "./Li";
import { useContext } from "react";
import { IsInsideQuoteContext } from "../../../contexts/IsInsideQuoteContext";

export default function Ol({ children, node }) {
  const isInsideQuote = useContext(IsInsideQuoteContext);

  const style = isInsideQuote ? styles.quoteList : styles;

  const listItems = Array.isArray(children)
    ? children.filter((child) => child !== "\n")
    : [children];

  const isCheckboxList = typeof listItems[0].props.children !== "string";

  return (
    <View style={style}>
      {listItems.map((child, index) => (
        <Li key={index} index={index} type={isCheckboxList ? "checkbox" : "ul"}>
          {child}
        </Li>
      ))}
    </View>
  );
}
