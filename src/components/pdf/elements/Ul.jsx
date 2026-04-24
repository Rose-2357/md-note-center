import { View, Text } from "@react-pdf/renderer";
import { styles } from "../PdfStyles";
import Li from "./Li";

export default function Ol({ children, style }) {
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
