import Card from "../Card/Card";
import "./CardList.css";
import { useContext } from "react";
import { NotesContext } from "../../contexts/NotesContext";
import { useNavigate } from "react-router-dom";

export default function CardList() {
  const { notes } = useContext(NotesContext);

  console.log("card list rendered");

  const navigate = useNavigate();
  function onClick(e) {
    e.preventDefault();
    const id = e.target.closest(".card").dataset.id;
    navigate(`/editor/${id}`);
  }

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
