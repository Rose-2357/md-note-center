import { useContext, useEffect } from "react";
import { SelectedNote } from "../../contexts/SelectedNoteContext";
import { NotesStateContext } from "../../utils/NotesStateContext";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import normilizeMarkdown from "../../utils/normilizeMarkdown";
import Tiptap from "../TipTap/TipTap";
import "./EditorBody.css";
import { nthOccurance } from "../../utils/nthOccurance";

export default function EditorBody({ renderMode }) {
  const note = useContext(SelectedNote);

  const [notes, setNotes] = useContext(NotesStateContext);

  note.content = normilizeMarkdown(note.content);

  const footnoteRefs = {};

  let checkboxIds = [];

  const markdownComponents = {
    h1: ({ children }) => <h1 className="md-h1">{children}</h1>,
    h2: ({ children }) => <h2 className="md-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="md-h3">{children}</h3>,
    h4: ({ children }) => <h4 className="md-h4">{children}</h4>,
    h5: ({ children }) => <h5 className="md-h5">{children}</h5>,
    h6: ({ children }) => <h6 className="md-h6">{children}</h6>,
    p: ({ children }) => <p className="md-p">{children}</p>,
    sup: ({ children }) => {
      function handleClick() {
        if (!children.props.href) return;
        footnoteRefs[children.props.href] = window.scrollY;
      }

      return (
        <sup onClick={handleClick} className="md-sup">
          {children}
        </sup>
      );
    },
    strong: ({ children }) => <strong className="md-strong">{children}</strong>,
    em: ({ children }) => <em className="md-em">{children}</em>,
    del: ({ children }) => <del className="md-del">{children}</del>,
    ul: ({ children }) => <ul className="md-ul">{children}</ul>,
    ol: ({ children }) => <ol className="md-ol">{children}</ol>,
    li: ({ children, node }) => (
      <li id={node.properties.id} className="md-li">
        {children}
      </li>
    ),
    a: ({ children, href, node }) => {
      function handleClick(e) {
        const liId = "#" + e.target.closest("li")?.id;

        if (
          liId &&
          footnoteRefs[liId] !== undefined &&
          footnoteRefs[liId] !== null
        ) {
          e.preventDefault();
          window.scrollTo(0, footnoteRefs[liId]);
        }
      }

      return (
        <a
          rel="noopener noreferrer"
          href={href}
          target={href.startsWith("#") ? "_self" : "_blank"}
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
    blockquote: ({ children }) => (
      <blockquote className="md-blockquote">{children}</blockquote>
    ),
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
    input: ({ type, checked }) => {
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
              const indexOfChanged = nthOccurance(
                note.content.replace(/- \[[ xX]\]*/g, "- [ ]"),
                "- [ ]",
                e.target.dataset.id / 2,
              );
              note.content =
                note.content.substring(0, indexOfChanged) +
                (e.target.checked ? "- [x]" : "- [ ]") +
                note.content.substring(indexOfChanged + 5);

              setNotes([...notes.filter((n) => n.id !== note.id), note]);
            }}
          />
        );
      }
      return <input type={type} />;
    },
  };

  return (
    <div className="editor-body">
      <div className="editor-body__content">
        {renderMode === "MD" ? (
          <Tiptap update note={note} content={note.content} />
        ) : (
          <Markdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
            {note.content}
          </Markdown>
        )}
      </div>
    </div>
  );
}
