import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./App.css";
import { defaultNotes } from "../../utils/constants";
import { NotesContext } from "../../contexts/NotesContext";

export default function App() {
  const notes = defaultNotes;

  return (
    <NotesContext.Provider value={{ notes }}>
      <div className="app">
        <div className="app__content">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </NotesContext.Provider>
  );
}
