import goBackIcon from "../../assets/go-back.svg";
import "./GoBackButton.css";
export default function GoBackButton() {
  return (
    <button type="button" className="go-back-button">
      <img
        src={goBackIcon}
        alt="Go Back Icon"
        className="go-back-button__icon"
      />
    </button>
  );
}
