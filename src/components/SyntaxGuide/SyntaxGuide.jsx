import SyntaxGuideBody from "../SyntaxGuideBody/SyntaxGuideBody";
import SyntaxGuideHeader from "../SyntaxGuideHeader/SyntaxGuideHeader";
import Footer from "../Footer/Footer";
import "./SyntaxGuide.css";

export default function SyntaxGuide() {
  return (
    <div className="syntax-guide">
      <div className="syntax-guide__content">
        <SyntaxGuideHeader />
        <SyntaxGuideBody />
        <Footer />
      </div>
    </div>
  );
}
