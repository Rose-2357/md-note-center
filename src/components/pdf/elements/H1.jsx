import { View, Text } from "@react-pdf/renderer";

export default function H1({ children, style }) {
  return (
    <View>
      <Text
        style={{
          ...style,
          marginBottom: 0,
        }}
      >
        {children}
      </Text>
      <View
        style={{
          height: 2,
          backgroundColor: "#00ffff",
          marginTop: 4,
          shadowColor: "#00ffff",
          shadowRadius: 5,
          shadowOpacity: 0.8,
          marginBottom: style.marginBottom,
        }}
      />
    </View>
  );
}
