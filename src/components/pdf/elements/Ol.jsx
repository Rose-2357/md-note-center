import { View, Text } from "@react-pdf/renderer";
import { styles } from "../PdfStyles";
import Li from "./Li";

export default function Ol({ children, style }) {
  // console.log(children.filter((child) => child !== "\n")[0].props);
  const isFootnote =
    children
      .filter((child) => child !== "\n")[0]
      ?.props?.id?.includes("user-content-fn") || false;
  return (
    <View style={style}>
      {children
        .filter((child) => child !== "\n")
        .map((child, index) => (
          <View
            key={index}
            style={{
              marginBottom: 4,
            }}
          >
            <Li id={child?.props?.id} index={index} style={styles.li} type="ol">
              {!isFootnote
                ? child
                : child.props.children.filter((child) => child !== "\n")[0]}
            </Li>
          </View>
        ))}
    </View>
  );
}
