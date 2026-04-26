import { cards } from "../../utils/syntaxGuideCards";
import SyntaxGuideCard from "../SyntaxGuideCard/SyntaxGuideCard";
import "./SyntaxGuideCardList.css";

export default function SyntaxGuideCardList() {
  return (
    <ul className="syntax-guide-card-list">
      {cards.map((card, index) => (
        <SyntaxGuideCard key={index} card={card} />
      ))}
    </ul>
  );
}
