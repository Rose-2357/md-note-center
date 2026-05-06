import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import { nthOccurance } from "../../utils/nthOccurance";
import "./markdown.css";
import { useEffect, useRef } from "react";

export default function MarkdownRenderer({
  children,
  note = {},
  notes = [],
  setNotes = () => {},
  customeComponents = {},
}) {
  let checkboxIds = [];

  const footnoteRefs = useRef({});

  const markdownComponents = {
    h1: ({ children }) => <h1 className="md-h1">{children}</h1>,
    h2: ({ children }) => <h2 className="md-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="md-h3">{children}</h3>,
    h4: ({ children }) => <h4 className="md-h4">{children}</h4>,
    h5: ({ children }) => <h5 className="md-h5">{children}</h5>,
    h6: ({ children }) => <h6 className="md-h6">{children}</h6>,
    p: ({ children }) => <p className="md-p">{children}</p>,
    strong: ({ children }) => <strong className="md-strong">{children}</strong>,
    em: ({ children }) => <em className="md-em">{children}</em>,
    del: ({ children }) => <del className="md-del">{children}</del>,
    ul: ({ children }) => <ul className="md-ul">{children}</ul>,
    ol: ({ children }) => <ol className="md-ol">{children}</ol>,
    li: ({ children, node }) => {
      const childrenArray = Array.from(children).filter(
        (child) => child !== "\n",
      );

      const childrenTag = childrenArray[0]?.props?.node?.tagName?.toLowerCase();

      if (childrenTag === "p") {
        return (
          <li id={node.properties.id} className="md-li">
            {childrenArray[0]?.props?.children}
          </li>
        );
      }

      return (
        <li id={node.properties.id} className="md-li">
          {children}
        </li>
      );
    },
    sup: ({ children }) => {
      return <sup className="md-sup">{children}</sup>;
    },

    a: ({ children, href, id }) => {
      function handleClick(e) {
        if (href?.startsWith("#user-content-fn-")) {
          footnoteRefs.current["#" + id] = window.scrollY;
          return;
        }

        const savedPos = footnoteRefs.current[href];

        if (
          savedPos !== undefined &&
          href?.startsWith("#user-content-fnref-")
        ) {
          e.preventDefault();
          window.scrollTo(0, savedPos);
        }
      }

      return (
        <a
          rel="noopener noreferrer"
          href={href}
          // Only use _self for internal footnote links
          target={href?.startsWith("#") ? "_self" : "_blank"}
          className="md-a"
          onClick={handleClick}
        >
          {children}
        </a>
      );
    },
    img: ({ src, alt }) => <img src={src} alt={alt} className="md-img" />,
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");

      return !inline && match ? (
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className="md-code" {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="md-pre">
        <div className="md-pre-scroll">{children}</div>
      </pre>
    ),
    blockquote: ({ children, node }) => {
      const childrenArray = Array.from(children).filter(
        (child) => child !== "\n",
      );

      return (
        <blockquote className="md-blockquote">
          {childrenArray.map((child) => {
            if (child?.props?.node?.tagName?.toLowerCase() === "p") {
              return child?.props?.children;
            }
            return child;
          })}
        </blockquote>
      );
    },
    table: ({ children }) => (
      <div className="md-table-container">
        <table className="md-table">{children}</table>
      </div>
    ),
    tr: ({ children }) => <tr className="md-tr">{children}</tr>,
    th: ({ children, style }) => (
      <th style={{ textAlign: style?.textAlign }} className="md-th">
        {children}
      </th>
    ),
    td: ({ children, style }) => (
      <td style={{ textAlign: style?.textAlign }} className="md-td">
        {children}
      </td>
    ),
    hr: () => <hr className="md-hr" />,
    input: ({ type, checked, index }) => {
      if (type === "checkbox") {
        if (checkboxIds.length === 0) {
          checkboxIds = [1];
        } else {
          checkboxIds = [...checkboxIds, checkboxIds.length + 1];
        }
        return (
          <input
            data-id={checkboxIds[checkboxIds.length - 1]}
            type="checkbox"
            checked={checked}
            className="md-checkbox"
            onChange={(e) => {
              const currentId = e.target.dataset.id;
              const isChecked = e.target.checked;

              const indexOfChanged = nthOccurance(
                note.content.replace(/- \[[ xX]\]*/g, "- [ ]"),
                "- [ ]",
                Math.ceil(currentId / 2),
              );

              if (indexOfChanged === -1) return;

              const newContent =
                note.content.substring(0, indexOfChanged) +
                (isChecked ? "- [x]" : "- [ ]") +
                note.content.substring(indexOfChanged + 5);

              setNotes((prevNotes) =>
                prevNotes.map((n) =>
                  n.id === note.id ? { ...n, content: newContent } : n,
                ),
              );
            }}
          />
        );
      }
      return <input type={type} />;
    },
  };
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        ...markdownComponents,
        ...customeComponents,
      }}
    >
      {children}
    </Markdown>
  );
}
