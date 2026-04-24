import { View, Text } from "@react-pdf/renderer";
import { styles } from "../PdfStyles";

export { Table, Thead, Tbody, Tr, Th, Td };

function Table({ children }) {
  return (
    <View wrap={false} style={styles.table}>
      {children}
    </View>
  );
}

function Thead({ children }) {
  return <View>{children}</View>;
}

function Tbody({ children }) {
  return <View>{children}</View>;
}

function Tr({ children }) {
  return <View style={styles.tr}>{children}</View>;
}

function Th({ children }) {
  return (
    <View style={styles.th}>
      <Text>{children}</Text>
    </View>
  );
}

function Td({ children }) {
  return (
    <View style={styles.td}>
      <Text>{children}</Text>
    </View>
  );
}
