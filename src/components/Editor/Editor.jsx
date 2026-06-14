import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SelectedNoteContext } from "../../contexts/SelectedNoteContext";
import EditorBody from "../EditorBody/EditorBody";
import EditorHeader from "../EditorHeader/EditorHeader";
import { NotesStateContext } from "../../utils/NotesStateContext";
import "./Editor.css";

export default function Editor() {
  const [renderMode, setRenderMode] = useState("MD");

  const [selectedNote, setSelectedNote] = useContext(SelectedNoteContext);

  console.log(selectedNote);

  const notes = useContext(NotesStateContext)[0];

  const { id } = useParams();
  const noteId = Number(id);
  const chosenNote = notes.filter((n) => n.id === noteId)[0];

  console.log(id);

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

  useEffect(() => {
    if (chosenNote) setSelectedNote(chosenNote);
  }, [chosenNote, setSelectedNote]);

  return (
    <div style={{ display: "block" }} className="editor">
      <EditorHeader setRenderMode={setRenderMode} />
      <EditorBody renderMode={renderMode} />
    </div>
  );
}
