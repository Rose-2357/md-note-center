import SyntaxGuideCardList from "../SyntaxGuideCardList/SyntaxGuideCardList";
import questionMark from "../../assets/question-mark-magenta.svg";
import "./SyntaxGuideBody.css";

export default function SyntaxGuideBody() {
  return (
    <div className="syntax-guide-body">
      <div className="syntax-guide-body__content">
        <div className="syntax-guide-body__section syntax-guide-body__section_glow_green">
          <h2 className="syntax-guide-body__title">Quick Reference</h2>
          <p className="syntax-guide-body__description">
            Markdown is a lightweight markup language that allows you to format
            text using simple symbols. Use these syntax patterns to create rich,
            formatted documents in the editor.
          </p>
        </div>
        <div className="syntax-guide-body__section syntax-guide-body__section_glow_magenta">
          <div className="syntax-guide-body__header">
            <img
              className="syntax-guide-body__icon"
              src={questionMark}
              alt="Question Mark"
            />
            <h2 className="syntax-guide-body__title">Why Markdown?</h2>
          </div>
          <p className="syntax-guide-body__description">
            Styling tex with Markdown is a quick and easy way to create rich,
            formatted documents in the editor. You don&apos;t need to worry
            about shortcuts or text selections. Just type your text and let
            Markdown do the work for you.
          </p>
        </div>
        <SyntaxGuideCardList />
        <div className="syntax-guide-body__section syntax-guide-body__section_glow_magenta">
          <h2 className="syntax-guide-body__title">Advanced Formatting</h2>
          <h3 className="syntax-guide-body__section-title">Tables</h3>
          {/* prettier-ignore */}
          <pre className="syntax-guide-body__syntax syntax-guide-body__syntax_glow_green">
            <code>
              | Header 1 | Header 2 |{"\n"} 
              | -------- | -------- |{"\n"}
              | Cell 1   | Cell 2   |{"\n"}
              | Cell 3   | Cell 4   |{"\n"}
            </code>
          </pre>
          <h3 className="syntax-guide-body__section-title">Horizontal Rules</h3>
          {/* prettier-ignore */}
          <pre className="syntax-guide-body__syntax syntax-guide-body__syntax_glow_blue">
            <code>
              ---{"\n"}
            </code>
          </pre>
          <p className="syntax-guide-body__description">
            Creates a horizontal line separator
          </p>
          <h3 className="syntax-guide-body__section-title">Task Lists</h3>
          {/* prettier-ignore */}
          <pre className="syntax-guide-body__syntax syntax-guide-body__syntax_glow_magenta">
            <code>
              - [x] Completed Task{"\n"}
              - [ ] Uncompleted Task{"\n"}
              - [ ] Another Task{"\n"}
            </code>
          </pre>
          <p className="syntax-guide-body__description">
            Creates a task list with interactive checkboxes
          </p>
        </div>
        <div className="syntax-guide-body__ending">
          <div
            className="
          syntax-guide-body__section 
          syntax-guide-body__section_glow_blue
          syntax-guide-body__section_is-in-ending
          "
          >
            <h2 className="syntax-guide-body__title syntax-guide-body__title_size_small">
              💡 Pro Tip
            </h2>
            <p className="syntax-guide-body__description">
              Use the MD/HTML toggle in the editor to preview how your markdown
              will render
            </p>
          </div>
          <div
            className="
          syntax-guide-body__section 
          syntax-guide-body__section_glow_green
          syntax-guide-body__section_is-in-ending
          "
          >
            <h2 className="syntax-guide-body__title syntax-guide-body__title_size_small">
              ⚡ Keyboard Shortcuts
            </h2>
            <p className="syntax-guide-body__description">
              Press Cmd/Ctrl + S to save your note quickly while editing
            </p>
          </div>
          <div
            className="
          syntax-guide-body__section 
          syntax-guide-body__section_glow_magenta 
          syntax-guide-body__section_is-in-ending
          syntax-guide-body__section_order_last
          "
          >
            <h2 className="syntax-guide-body__title syntax-guide-body__title_size_small">
              🎨 Styling
            </h2>
            <p className="syntax-guide-body__description">
              Combine multiple formatting options for rich, expressive notes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
