import fileIcon from "../../assets/file-icon.svg";
import checklistIcon from "../../assets/checklist-icon.svg";
import timeDifferenceFormatter from "../../utils/timeConvertor";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./Card.css";
import normalizeMarkdown from "../../utils/normilizeMarkdown";

export default function Card({ note }) {
  const HeaderComponent = ({ as: Tag, children }) => (
    <Tag className="card__markdown card__markdown_type_header">{children}</Tag>
  );

  const icon =
    note.content.includes("- [ ]") || note.content.includes("- [x]")
      ? checklistIcon
      : fileIcon;

  return (
    <li className="card">
      <div className="card__header">
        <img
          src={icon}
          alt={icon === checklistIcon ? "Checklist Icon" : "File Icon"}
          className="card__icon"
        />
        <h2 className="card__title">{note.title}</h2>
      </div>
      <div className="card__content">
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: (props) => <HeaderComponent as="h1" {...props} />,
            h2: (props) => <HeaderComponent as="h2" {...props} />,
            h3: (props) => <HeaderComponent as="h3" {...props} />,
            h4: (props) => <HeaderComponent as="h4" {...props} />,
            h5: (props) => <HeaderComponent as="h5" {...props} />,
            h6: (props) => <HeaderComponent as="h6" {...props} />,
            p: ({ children }) => (
              <p className="card__markdown card__markdown_type_paragraph">
                {children}
              </p>
            ),
            li: ({ children, checked = undefined }) => {
              if (checked !== undefined || checked !== null) {
                const checked = children[0]?.props?.checked;
                return (
                  <li
                    className={`card__markdown card__markdown_type_checklist-item ${checked ? "card__markdown_type_checked-item" : ""}`}
                  >
                    {children}
                  </li>
                );
              }
              return (
                <li className="card__markdown card__markdown_type_list-item">
                  {children}
                </li>
              );
            },
            input: ({ type, checked }) => {
              if (type === "checkbox") {
                return (
                  <input
                    type="checkbox"
                    checked={checked}
                    readOnly
                    className="card__markdown_type_checkbox"
                  />
                );
              }
              return <input type={type} />;
            },
          }}
        >
          {normalizeMarkdown(note.content)}
        </Markdown>
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
