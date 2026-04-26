import { useRef, useState } from "react";
import "./SyntaxGuideCard.css";

export default function SyntaxGuideCard({ card }) {
  const { title, syntax, results, icon } = card;

  const [iconColor, setIconColor] = useState("241,241,241");

  const cardElement = useRef(null);

  function onRef(node) {
    if (node !== null) {
      setIconColor(
        window.getComputedStyle(node).getPropertyValue("--glow-color"),
      );
    }
  }

  return (
    <li className="syntax-guide-card" ref={onRef}>
      <div className="syntax-guide-card__header">
        <img
          src={icon}
          alt={`${title} Icon`}
          className="syntax-guide-card__icon"
        />
        <h2 className="syntax-guide-card__title">{title}</h2>
      </div>
      <h3 className="syntax-guide-card__section-title">SYNTAX</h3>
      <pre className="syntax-guide-card__syntax">{syntax}</pre>
      <h3 className="syntax-guide-card__section-title">RESULT</h3>
      <p className="syntax-guide-card__results">{results}</p>
    </li>
  );
}
