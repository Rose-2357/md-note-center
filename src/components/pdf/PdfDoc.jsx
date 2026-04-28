import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  Link,
  Image,
  Font,
} from "@react-pdf/renderer";
import Markdown from "react-markdown";
import { styles } from "./PdfStyles";
import remarkGfm from "remark-gfm";
import H1 from "./elements/H1";
import Del from "./elements/Del";
import Ul from "./elements/Ul";
import Ol from "./elements/Ol";
import Checkbox from "./elements/Checkbox";
import { Children, isValidElement, useContext } from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "./elements/Table";
import Hr from "./elements/Hr";
import CodeBlock from "./elements/CodeBlock";
import { IsInsideQuoteContext } from "../../contexts/IsInsideQuoteContext";

Font.registerHyphenationCallback((word) => {
  if (word.length > 1) {
    return word.split("").flatMap((char, index) => {
      if (index === word.length - 1) return [char];
      return [char, ""];
    });
  }
  return [word];
});

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
  ul: ({ children, node }) => <Ul node={node}>{children}</Ul>,
  ol: ({ children, node }) => <Ol node={node}>{children}</Ol>,
  li: ({ children, id }) => {
    const isInsideQuote = useContext(IsInsideQuoteContext);

    console.log(isInsideQuote);

    const style = isInsideQuote ? styles.quoteLi : styles.li;

    return (
      <Text id={id} style={style}>
        {children}
      </Text>
    );
  },
  input: ({ type, checked }) => {
    if (type === "checkbox") {
      return <Checkbox checked={checked} />;
    }
    return null;
  },

  img: ({ src }) => <Image src={src} style={styles.img} />,
  blockquote: ({ children, node }) => {
    const validChildren = Children.toArray(children).filter((child) => {
      return child !== "\n" && child !== "";
    });

    if (validChildren.length === 0) return null;

    console.log(validChildren);

    return (
      <IsInsideQuoteContext.Provider value={true}>
        <View style={styles.blockquote} wrap={false}>
          {validChildren}
        </View>
      </IsInsideQuoteContext.Provider>
    );
  },
  code: ({ children, inline, className }) => {
    const isInline = inline;
    const inlineStyles = {
      backgroundColor: "#2a2a2a",
    };
    return isInline ? (
      <Text
        style={{
          ...styles.code,
          ...inlineStyles,
        }}
      >
        {children}
      </Text>
    ) : (
      <View style={styles.code}>
        <CodeBlock
          code={children}
          language={className?.replace("language-", "")}
        />
      </View>
    );
  },
  table: ({ children }) => <Table style={styles.table}>{children}</Table>,
  thead: ({ children }) => <Thead>{children}</Thead>,
  tbody: ({ children }) => <Tbody>{children}</Tbody>,
  tr: ({ children }) => <Tr>{children}</Tr>,
  th: ({ children, style }) => (
    <Th style={{ textAlign: style?.textAlign }}>{children}</Th>
  ),
  td: ({ children, style }) => (
    <Td style={{ textAlign: style?.textAlign }}>{children}</Td>
  ),
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
