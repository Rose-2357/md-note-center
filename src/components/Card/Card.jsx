import fileIcon from "../../assets/file-icon.svg";
import checklistIcon from "../../assets/checklist-icon.svg";
import timeDifferenceFormatter from "../../utils/timeConvertor";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./Card.css";
import normalizeMarkdown from "../../utils/normilizeMarkdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import MarkdownRenderer from "../MarkdownRenderer/MarkdownRenderer";

export default function Card({ note }) {
  const HeaderComponent = ({ as: Tag, children }) => (
    <Tag className="card__markdown card__markdown_type_header">{children}</Tag>
  );

  const icon =
    note.content.includes("- [ ]") || note.content.includes("- [x]")
      ? checklistIcon
      : fileIcon;

  const customComponents = {
    h1: (props) => <HeaderComponent as="h1" {...props} />,
    h2: (props) => <HeaderComponent as="h2" {...props} />,
    h3: (props) => <HeaderComponent as="h3" {...props} />,
    h4: (props) => <HeaderComponent as="h4" {...props} />,
    h5: (props) => <HeaderComponent as="h5" {...props} />,
    h6: (props) => <HeaderComponent as="h6" {...props} />,
    p: ({ children }) => (
      <p className="card__markdown card__markdown_type_paragraph">{children}</p>
    ),
    pre: ({ children }) => (
      <p className="card__markdown card__markdown_type_paragraph">{children}</p>
    ),
    code: ({ node, inline, className, children, ...props }) => {
      return inline ? (
        <p className="card__markdown card__markdown_type_paragraph">
          {children}
        </p>
      ) : (
        <code className="md-code" {...props}>
          {children}
        </code>
      );
    },
    input: ({ type, checked }) => {
      if (type === "checkbox") {
        return (
          <input
            data-readonly={true}
            type="checkbox"
            checked={checked}
            className="md-checkbox"
          />
        );
      }
      return <input type={type} />;
    },
    ul: ({ children }) => (
      <ul
        className="md-ul"
        style={{
          margin: 0,
          maxHeight: 60,
          overflow: "hidden",
        }}
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol
        className="md-ol"
        style={{
          margin: 0,
          maxHeight: 60,
          overflow: "hidden",
        }}
      >
        {children}
      </ol>
    ),
    li: ({ children, node }) => (
      <li
        id={node.properties.id}
        className="md-li"
        style={{
          margin: 5,
        }}
      >
        {children}
      </li>
    ),
  };

  const mdCharacters = note.content.match(/[\\`*_{}[\]()#+\-.!~]/g).length;

  return (
    <li className="card" data-id={note.id}>
      <div className="card__header">
        <img
          src={icon}
          alt={icon === checklistIcon ? "Checklist Icon" : "File Icon"}
          className="card__icon"
        />
        <h2 className="card__title">{note.title}</h2>
      </div>
      <div className="card__content">
        <MarkdownRenderer customeComponents={customComponents}>
          {normalizeMarkdown(
            note.content.substring(0, 35 + mdCharacters) + "...",
          )}
        </MarkdownRenderer>
      </div>
      <div className="card__footer">
        <ul className="card__tags">
          {note.tags.slice(0, 2).map((tag) => (
            <li key={tag} className="card__tag">
              {tag}
            </li>
          ))}
        </ul>
        <span className="card__date">
          {timeDifferenceFormatter(
            Date.now() - new Date(note.lastVisited).getTime(),
          )}
        </span>
      </div>
    </li>
  );
}
