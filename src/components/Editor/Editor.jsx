import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { SelectedNoteContext } from "../../contexts/SelectedNoteContext";
import EditorBody from "../EditorBody/EditorBody";
import EditorHeader from "../EditorHeader/EditorHeader";
import { NotesStateContext } from "../../utils/NotesStateContext";
import "./Editor.css";

export default function Editor() {
  const [renderMode, setRenderMode] = useState("MD");

  const [selectedNote, setSelectedNote] = useContext(SelectedNoteContext);

  const notes = useContext(NotesStateContext)[0];

  const { id } = useParams();

  const chosenNote = notes.filter((n) => n.id === id)[0];

  if (!chosenNote)
    return (
      <div style={{ display: "block" }} className="editor">
        <div className="editor__content">
          <h1 className="editor__title">Note not found</h1>
          <p className="editor__description">
            The note you are looking for does not exist.
          </p>
          <Link to="/" className="editor__back-button">
            Go back to my notes
          </Link>
        </div>
      </div>
    );

  setSelectedNote(chosenNote);

  return (
    <div style={{ display: "block" }} className="editor">
      <EditorHeader setRenderMode={setRenderMode} />
      <EditorBody renderMode={renderMode} />
    </div>
  );
}
