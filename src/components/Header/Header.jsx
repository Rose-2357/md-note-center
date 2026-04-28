import logo from "../../assets/logo.svg";
import bookSvg from "../../assets/book.svg";
import plusSvg from "../../assets/plus.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__branding">
        <img src={logo} alt="MD Note Center Logo" className="header__logo" />
        <h1 className="header__app-name">MD NoteCenter</h1>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item header__nav-item_glow_magenta">
            <Link to="/guide" className="header__nav-link">
              <img
                src={bookSvg}
                alt="Syntax Guide"
                className="header__nav-icon"
              />
              <span>Syntax Guide</span>
            </Link>
          </li>
          <li className="header__nav-item header__nav-item_glow_green">
            <img src={plusSvg} alt="New Note" className="header__nav-icon" />
            <span>New Note</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
