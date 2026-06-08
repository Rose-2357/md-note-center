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
import AddItemModal from "../AddItemModal/AddItemModal";
import { SetOpenModalContext } from "../../contexts/setOpenModalContext";

export default function App() {
  const [notes, setNotes] = useState(defaultNotes);

  const [selectedNote, setSelectedNote] = useState(notes[0]);

  const [openModal, setOpenModal] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
      }
    };

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (openModal) {
      document.addEventListener("keydown", closeModalOnEscape);
    }
  }, [openModal]);

  function closeModalOnEscape(e) {
    e.preventDefault();
    if (e.key === "Escape") {
      closeModal(e);
    }
  }

  function closeModal(e) {
    e.preventDefault();
    document.removeEventListener("keydown", closeModalOnEscape);
    setOpenModal("");
  }

  return (
    <BrowserRouter basename="/">
      <NotesStateContext.Provider value={[notes, setNotes]}>
        <SelectedNoteContext.Provider value={[selectedNote, setSelectedNote]}>
          <NotesContext.Provider value={{ notes }}>
            <SetOpenModalContext.Provider value={setOpenModal}>
              <div className="app">
                <div className="app__content">
                  <Routes>
                    <Route path="/editor/:id" element={<Editor />} />
                    <Route path="/guide" element={<SyntaxGuide />} />
                    <Route path="*" element={<Dashboard />} />
                  </Routes>
                  <AddItemModal
                    isOpen={openModal === "AddItemModal"}
                    onClose={closeModal}
                  />
                </div>
              </div>
            </SetOpenModalContext.Provider>
          </NotesContext.Provider>
        </SelectedNoteContext.Provider>
      </NotesStateContext.Provider>
    </BrowserRouter>
  );
}
