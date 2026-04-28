import { Link } from "react-router-dom";
import GoBackButton from "../GoBackButton/GoBackButton";
import "./SyntaxGuideHeader.css";

export default function SyntaxGuideHeader() {
  return (
    <div className="syntax-guide-header">
      <div className="syntax-guide-header__button-container">
        <Link to="/" className="syntax-guide-header__button">
          <GoBackButton />
        </Link>
      </div>
      <div className="syntax-guide-header__text">
        <h1 className="syntax-guide-header__title">Markdown Basics</h1>
        <p className="syntax-guide-header__description">
          Master the syntax for formatting your notes
        </p>
      </div>
    </div>
  );
}
