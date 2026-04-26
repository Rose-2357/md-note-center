import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { common, createLowlight } from "lowlight";
import { styles } from "../PdfStyles";

const lowlight = createLowlight(common);

export default function CodeBlock({ code, language }) {
  const lines = code.split("\n");

  const validLanguage =
    language && lowlight.registered(language) ? language : "txt";

  const renderNodes = (nodes) => {
    return nodes.map((node, index) => {
      if (node.type === "text") {
        return <Text key={index}>{node.value}</Text>;
      }
      if (node.type === "element") {
        const className = node.properties.className[0];
        return (
          <Text key={index} style={styles[className] || styles.text}>
            {renderNodes(node.children)}
          </Text>
        );
      }
      return null;
    });
  };

  return (
    <View style={styles.codeBlock}>
      {lines.map((line, i) => {
        const cleanedLine = line
          .replace(/\t/g, "    ")
          .replace(/^ +/, (match) => "\u200c" + " ".repeat(match.length));
        const tree = lowlight.highlight(validLanguage, cleanedLine);

        return (
          <View key={i} style={{ flexDirection: "row" }}>
            <Text
              style={{
                ...styles.code,
                border: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {renderNodes(tree.children)}
              {line.length === 0 ? " " : ""}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
