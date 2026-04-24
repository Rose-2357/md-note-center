import { Text, View } from "@react-pdf/renderer";

export default function Del({ children, style }) {
  return (
    <Text
      style={{
        ...style,
        color: "white",
        textDecoration: "line-through",
        textDecorationColor: "#ff3131",
        textDecorationStyle: "solid",
      }}
    >
      {children}
    </Text>
  );
}
