import { View, Text } from "@react-pdf/renderer";
import { styles } from "../PdfStyles";
import Checkbox from "./Checkbox";

export default function Li({ children, type, id, index }) {
  if (type === "checkbox") return <Checkbox>{children}</Checkbox>;
  return (
    <View>
      <Text id={id} style={styles.li}>
        {type === "ul" ? "•" : `${index + 1}.`}&nbsp;&nbsp;{children}
      </Text>
    </View>
  );
}
