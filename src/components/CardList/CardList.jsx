import Card from "../Card/Card";
import "./CardList.css";
import { useContext } from "react";
import { NotesContext } from "../../contexts/NotesContext";
import { useNavigate } from "react-router-dom";

export default function CardList() {
  const { notes } = useContext(NotesContext);

  const navigate = useNavigate();
  function onClick(e) {
    e.preventDefault();
    console.log(e.target.closest(".card").dataset.id);
    const id = e.target.closest(".card").dataset.id;
    navigate(`/editor/${id}`);
  }

  console.log(
    notes.sort((a, b) => new Date(b.lastVisited) - new Date(a.lastVisited)),
  );

  return (
    <ul className="card-list" onClick={onClick}>
      {notes
        .sort((a, b) => new Date(b.lastVisited) - new Date(a.lastVisited))
        .map((note) => (
          <Card key={note.id} note={note} />
        ))}
    </ul>
  );
}
