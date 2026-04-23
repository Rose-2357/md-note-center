import { useContext, useEffect } from "react";
import { SelectedNote } from "../../contexts/SelectedNoteContext";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import normilizeMarkdown from "../../utils/normilizeMarkdown";
import Tiptap from "../TipTap/TipTap";
import "./EditorBody.css";
import "./Editor-markdown.css";

export default function EditorBody({ renderMode }) {
  const note = useContext(SelectedNote);

  note.content = normilizeMarkdown(note.content);

  const footnoteRefs = {};

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
    code: ({ children }) => <code className="md-code">{children}</code>,
    pre: ({ children }) => <pre className="md-pre">{children}</pre>,
    blockquote: ({ children }) => (
      <blockquote className="md-blockquote">{children}</blockquote>
    ),
    table: ({ children }) => <table className="md-table">{children}</table>,
    tr: ({ children }) => <tr className="md-tr">{children}</tr>,
    th: ({ children }) => <th className="md-th">{children}</th>,
    td: ({ children }) => <td className="md-td">{children}</td>,
    hr: () => <hr className="md-hr" />,
  };

  return (
    <div className="editor-body">
      {renderMode === "MD" ? (
        <Tiptap update note={note} content={note.content} />
      ) : (
        <Markdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
          {note.content}
        </Markdown>
      )}
    </div>
  );
}
