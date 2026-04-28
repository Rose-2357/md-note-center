import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Editor from "../Editor/Editor";
import "./App.css";
import { defaultNotes } from "../../utils/constants";
import { NotesContext } from "../../contexts/NotesContext";
import { SelectedNoteContext } from "../../contexts/SelectedNoteContext";
import { NotesStateContext } from "../../utils/NotesStateContext";
import SyntaxGuide from "../SyntaxGuide/SyntaxGuide";

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
    <BrowserRouter basename="/">
      <NotesStateContext.Provider value={[notes, setNotes]}>
        <SelectedNoteContext.Provider value={[selectedNote, setSelectedNote]}>
          <NotesContext.Provider value={{ notes }}>
            <div className="app">
              <div className="app__content">
                <Routes>
                  <Route path="/editor/:id" element={<Editor />} />
                  <Route path="/guide" element={<SyntaxGuide />} />
                  <Route path="*" element={<Dashboard />} />
                </Routes>
              </div>
            </div>
          </NotesContext.Provider>
        </SelectedNoteContext.Provider>
      </NotesStateContext.Provider>
    </BrowserRouter>
  );
}
