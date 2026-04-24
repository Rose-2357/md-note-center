import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  Link,
  Image,
} from "@react-pdf/renderer";
import Markdown from "react-markdown";
import { styles } from "./PdfStyles";
import remarkGfm from "remark-gfm";
import H1 from "./elements/H1";
import Del from "./elements/Del";
import Ul from "./elements/Ul";
import Ol from "./elements/Ol";
import Checkbox from "./elements/Checkbox";
import { Children } from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "./elements/Table";
import Hr from "./elements/Hr";

const mdComponents = {
  h1: ({ children }) => <H1 style={styles.h1}>{children}</H1>,
  h2: ({ children }) => <Text style={styles.h2}>{children}</Text>,
  h3: ({ children }) => <Text style={styles.h3}>{children}</Text>,
  h4: ({ children }) => <Text style={styles.h4}>{children}</Text>,
  h5: ({ children }) => <Text style={styles.h5}>{children}</Text>,
  h6: ({ children }) => <Text style={styles.h6}>{children}</Text>,
  p: ({ children }) => {
    const isImage = Children.toArray(children).some(
      (child) =>
        child?.type?.displayName === "Image" ||
        child?.props?.src ||
        (typeof child === "object" && child?.key?.includes("img")),
    );

    if (isImage) {
      return (
        <View
          style={{
            marginVertical: 10,
          }}
        >
          {children}
        </View>
      );
    }

    return <Text style={styles.p}>{children}</Text>;
  },
  strong: ({ children }) => <Text style={styles.strong}>{children}</Text>,
  em: ({ children }) => <Text style={styles.em}>{children}</Text>,
  del: ({ children }) => <Del>{children}</Del>,
  a: ({ href, children }) => {
    if (href.includes("user-content-fnref")) return null;
    return <Link src={href}>{children}</Link>;
  },
  sup: ({ children }) => <Text style={styles.sup}>{children}</Text>,
  ul: ({ children }) => <Ul>{children}</Ul>,
  ol: ({ children }) => <Ol>{children}</Ol>,
  li: ({ children, id }) => (
    <Text id={id} style={styles.li}>
      {children}
    </Text>
  ),
  input: ({ type, checked }) => {
    if (type === "checkbox") {
      return <Checkbox checked={checked} />;
    }
    return null;
  },

  img: ({ src }) => <Image src={src} style={styles.img} />,
  blockquote: ({ children }) => (
    <View style={styles.blockquote}>{children}</View>
  ),
  code: ({ children, inline, className }) => {
    const isInline = inline || !className;
    const inlineStyles = isInline
      ? {
          backgroundColor: "#2a2a2a",
        }
      : {};
    return (
      <Text
        style={{
          ...styles.code,
          ...inlineStyles,
        }}
      >
        {children}
      </Text>
    );
  },
  table: ({ children }) => <Table style={styles.table}>{children}</Table>,
  thead: ({ children }) => <Thead>{children}</Thead>,
  tbody: ({ children }) => <Tbody>{children}</Tbody>,
  tr: ({ children }) => <Tr>{children}</Tr>,
  th: ({ children }) => <Th>{children}</Th>,
  td: ({ children }) => <Td>{children}</Td>,
  hr: () => <Hr style={styles.hr} />,
};

export default function PdfDoc({ content }) {
  return (
    <Document>
      <Page style={styles.page} wrap>
        <View style={styles.contentBody}>
          <Markdown
            disallowedElements={["div", "span"]}
            unwrapDisallowed
            remarkPlugins={[remarkGfm]}
            components={mdComponents}
          >
            {content}
          </Markdown>
        </View>
      </Page>
    </Document>
  );
}
