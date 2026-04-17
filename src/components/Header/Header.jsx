import logo from "../../assets/logo.svg";
import bookSvg from "../../assets/book.svg";
import plusSvg from "../../assets/plus.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__branding">
        <img src={logo} alt="MD Note Center Logo" />
        <h1 className="header__app-name">MD NoteCenter</h1>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item header__nav-item_glow_magenta">
            <img src={bookSvg} alt="My Notes" className="header__nav-icon" />
            <span>My Notes</span>
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
