import { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Editor from "../Editor/Editor";
import "./App.css";
import { defaultNotes } from "../../utils/constants";
import { NotesContext } from "../../contexts/NotesContext";
import { SelectedNote } from "../../contexts/SelectedNoteContext";
import { NotesStateContext } from "../../utils/NotesStateContext";

export default function App() {
  const [notes, setNotes] = useState(defaultNotes);

  const [selectedNote, setSelectedNote] = useState(notes[0]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <NotesStateContext.Provider value={[notes, setNotes]}>
      <SelectedNote.Provider value={selectedNote}>
        <NotesContext.Provider value={{ notes }}>
          <div className="app">
            <div className="app__content">
              <Dashboard />
              <Editor />
            </div>
          </div>
        </NotesContext.Provider>
      </SelectedNote.Provider>
    </NotesStateContext.Provider>
  );
}
