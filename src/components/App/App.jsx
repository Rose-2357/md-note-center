import Footer from "../Footer/Footer";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import { defaultNotes } from "../../utils/constants";
import { NotesContext } from "../../contexts/NotesContext";

export default function App() {
  const notes = defaultNotes;

  return (
    <NotesContext.Provider value={{ notes }}>
      <div className="app">
        <div className="app__content">
          <Dashboard />
          <Footer />
        </div>
      </div>
    </NotesContext.Provider>
  );
}
