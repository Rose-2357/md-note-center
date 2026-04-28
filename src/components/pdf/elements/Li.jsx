import { View, Text } from "@react-pdf/renderer";
import { styles } from "../PdfStyles";
import Checkbox from "./Checkbox";
import { IsInsideQuoteContext } from "../../../contexts/IsInsideQuoteContext";
import { useContext } from "react";

export default function Li({ children, type, id, index }) {
  if (type === "checkbox") return <Checkbox>{children}</Checkbox>;
  const isInsideQuote = useContext(IsInsideQuoteContext);

  const style = isInsideQuote ? styles.quoteLi : styles.li;
  return (
    <View>
      <Text id={id} style={style}>
        {type === "ul" ? "•" : `${index + 1}.`}&nbsp;&nbsp;{children}
      </Text>
    </View>
  );
}
