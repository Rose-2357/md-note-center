import { useContext } from "react";
import { SelectedNote } from "../../contexts/SelectedNoteContext";
import goBackIcon from "../../assets/go-back.svg";
import downloadIcon from "../../assets/download-icon.svg";
import "./EditorHeader.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function EditorHeader({ setRenderMode }) {
  const note = useContext(SelectedNote);

  return (
    <div className="editor-header">
      <div className="editor-header__content">
        <div className="editor-header__column">
          <button type="button" className="editor-header__go-back-button">
            <img
              src={goBackIcon}
              alt="Go Back Icon"
              className="editor-header__go-back-icon"
            />
          </button>
          <h2 className="editor-header__title">{note.title}</h2>
        </div>
        <div className="editor-header__column">
          <menu className="editor-header__menu">
            <li className="editor-header__menu-item">
              <ToggleSwitch
                setFunction={setRenderMode}
                defaultValue={"MD"}
                otherValue={"HTML"}
              />
            </li>
            <li className="editor-header__menu-item editor-header__menu-item_action_download">
              <img
                src={downloadIcon}
                alt="Download Icon"
                className="editor-header__menu-icon editor-header__menu-icon_type_download"
              />
              <span>Download</span>
            </li>
          </menu>
        </div>
      </div>
    </div>
  );
}
