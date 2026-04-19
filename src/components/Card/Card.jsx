import fileIcon from "../../assets/file-icon.svg";
import timeDifferenceFormatter from "../../utils/timeConvertor";
import "./Card.css";

export default function Card({ note }) {
  return (
    <li className="card">
      <div className="card__header">
        <img src={fileIcon} alt="File Icon" className="card__icon" />
        <h2 className="card__title">{note.title}</h2>
      </div>
      <p className="card__content">{note.content}</p>
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
