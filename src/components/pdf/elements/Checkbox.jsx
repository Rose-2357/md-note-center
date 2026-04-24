import { View, Text } from "@react-pdf/renderer";
import { styles } from "../PdfStyles";
import Del from "./Del";

export default function Checkbox({ children, style }) {
  const checked = children?.props?.children.filter(
    (child) => child?.props?.type === "checkbox",
  )[0].props.checked;

  return (
    <View style={style}>
      <View
        style={{
          position: "absolute",
          width: 12,
          height: 12,
          border: "1pt solid #39ff14", // Neon Green
          marginRight: 6,
          marginTop: 2,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: checked ? "rgba(57, 255, 20, 0.1)" : "transparent",
        }}
      >
        {checked && (
          <View
            style={{
              width: 3,
              height: 6,
              borderBottom: "1.5pt solid #39ff14",
              borderRight: "1.5pt solid #1bff14",
              transform: "rotate(45deg)",
              marginBottom: 1,
            }}
          />
        )}
      </View>
      {checked ? (
        <Text style={{ marginLeft: 20, textDecoration: "line-through" }}>
          {children}
        </Text>
      ) : (
        <Text
          style={{
            marginLeft: 20,
          }}
        >
          {children}
        </Text>
      )}
    </View>
  );
}
