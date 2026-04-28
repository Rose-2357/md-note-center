import { useContext, useEffect } from "react";
import { SelectedNoteContext } from "../../contexts/SelectedNoteContext";
import { NotesStateContext } from "../../utils/NotesStateContext";
import normilizeMarkdown from "../../utils/normilizeMarkdown";
import Tiptap from "../TipTap/TipTap";
import "./EditorBody.css";
import MarkdownRenderer from "../MarkdownRenderer/MarkdownRenderer";
export default function EditorBody({ renderMode }) {
  const note = useContext(SelectedNoteContext)[0];

  const [notes, setNotes] = useContext(NotesStateContext);

  useEffect(() => {
    note.lastVisited = Date.now();
    console.log("note updated");

    setNotes((prevNotes) => [
      ...prevNotes.filter((n) => n.id !== note.id),
      note,
    ]);

    console.log(
      notes.sort((a, b) => new Date(b.lastVisited) - new Date(a.lastVisited)),
    );
  }, [note]);

  note.content = normilizeMarkdown(note.content);

  return (
    <div className="editor-body">
      <div className="editor-body__content">
        {renderMode === "MD" ? (
          <Tiptap update note={note} content={note.content} />
        ) : (
          <MarkdownRenderer note={note} notes={notes} setNotes={setNotes}>
            {note.content}
          </MarkdownRenderer>
        )}
      </div>
    </div>
  );
}
