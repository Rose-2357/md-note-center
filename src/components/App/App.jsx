import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
  // const [notes, setNotes] = useState(defaultNotes);

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("cyberpunk_notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  console.log(notes);

  const [selectedNote, setSelectedNote] = useState(notes[0]);

  const [openModal, setOpenModal] = useState("");

  const navigate = useNavigate();

  // 2. Automatically save to localStorage whenever 'notes' changes
  useEffect(() => {
    localStorage.setItem("cyberpunk_notes", JSON.stringify(notes));
  }, [notes]);

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
    if (e.key === "Escape") {
      e.preventDefault();
      closeModal(e);
    }
  }

  function closeModal(e) {
    e.preventDefault();
    document.removeEventListener("keydown", closeModalOnEscape);
    setOpenModal("");
  }

  async function onAddNote({ title, tags }) {
    const newNote = {
      id: notes.length + 1,
      title,
      content: "",
      tags: tags || [],
    };
    await setNotes((prevNotes) => [newNote, ...prevNotes]);

    navigate(`/editor/${newNote.id}`);
  }

  return (
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
                  onAdd={onAddNote}
                />
              </div>
            </div>
          </SetOpenModalContext.Provider>
        </NotesContext.Provider>
      </SelectedNoteContext.Provider>
    </NotesStateContext.Provider>
  );
}
