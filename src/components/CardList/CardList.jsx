import Card from "../Card/Card";
import "./CardList.css";
import { useContext } from "react";
import { NotesContext } from "../../contexts/NotesContext";

export default function CardList() {
  const { notes } = useContext(NotesContext);
  return (
    <ul className="card-list">
      {notes
        .sort((a, b) => new Date(b.lastVisited) - new Date(a.lastVisited))
        .map((note) => (
          <Card key={note.id} note={note} />
        ))}
    </ul>
  );
}
