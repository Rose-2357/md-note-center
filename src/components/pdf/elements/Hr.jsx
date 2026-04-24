import { View, StyleSheet } from "@react-pdf/renderer";
import { styles } from "../PdfStyles";

const hrStyles = StyleSheet.create({
  glowLayer: {
    position: "absolute",
    height: 6,
    width: "100%",
    backgroundColor: "#7700ee",
    opacity: 0.5,
    borderRadius: 10,
    top: -2,
  },
  mainLine: {
    height: 2,
    width: "100%",
    backgroundColor: "#7700ee",
    borderRadius: 10,
  },
});

export default function Hr() {
  return (
    <View style={styles.hr}>
      <View style={hrStyles.glowLayer} />
      <View style={hrStyles.mainLine} />
    </View>
  );
}
