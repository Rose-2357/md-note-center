import { useContext, useEffect, useState } from "react";
import { usePDF } from "@react-pdf/renderer";
import Markdown from "react-markdown";
import { SelectedNote } from "../../contexts/SelectedNoteContext";
import downloadIcon from "../../assets/download-icon.svg";
import "./EditorHeader.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useActive } from "../../hooks/useActive";
import normilizeMarkdown from "../../utils/normilizeMarkdown";
import PdfDoc from "../pdf/PdfDoc";
import GoBackButton from "../GoBackButton/GoBackButton";

export default function EditorHeader({ setRenderMode }) {
  const note = useContext(SelectedNote);

  const [isPendingDownload, setIsPendingDownload] = useState(false);

  if (!note) return null;

  const [isDownloadMenuOpen, setIsDownloadMenuOpen] = useState(false);

  const [active, makeActive, makeInactive] = useActive(
    "download-menu-markdown",
    "download-menu-pdf",
    "download-menu-txt",
  );

  const [instance, updateInstance] = usePDF({
    document: <PdfDoc content={""} />,
  });

  useEffect(() => {
    if (!instance.loading && isPendingDownload && instance.url) {
      const link = document.createElement("a");
      link.href = instance.url;
      link.download = `${note.title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsPendingDownload(false);
    }
  }, [instance.loading, instance.url, isPendingDownload]);

  function downloadMarkdownOrTxt(content, type) {
    if (!content) return null;
    if (type !== "md" && type !== "txt") return null;
    const link = document.createElement("a");
    const file = new Blob([content], {
      type: `text/${type === "md" ? "markdown" : "plain"}`,
    });
    link.href = URL.createObjectURL(file);
    link.download = `${note.title}.${type === "md" ? "md" : "txt"}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function downloadPDF(content) {
    updateInstance(<PdfDoc content={content} />);

    setIsPendingDownload(true);
  }

  return (
    <div className="editor-header">
      <div className="editor-header__content">
        <div className="editor-header__column">
          <GoBackButton />
          <h2 className="editor-header__title">{note.title}</h2>
        </div>
        <div className="editor-header__column">
          <menu className="editor-header__menu">
            <li className="editor-header__menu-item">
              <ToggleSwitch
                setFunction={setRenderMode}
                defaultValue={"MD"}
                otherValue={"HTML"}
              />
            </li>
            <li className="editor-header__menu-item editor-header__menu-item_action_download">
              <div className="editor-header__menu-item-text">
                <img
                  src={downloadIcon}
                  alt="Download Icon"
                  className="editor-header__menu-icon editor-header__menu-icon_type_download"
                />
                <span className="editor-header__menu-item-text_action_download">
                  Download
                </span>
              </div>
              <menu
                className={`editor-header__download-menu ${isDownloadMenuOpen ? "editor-header__download-menu_open" : ""} `}
              >
                <li>
                  <span
                    className={`
                      editor-header__download-menu-item 
                      editor-header__download-menu-item_type_markdown
                      ${active["download-menu-markdown"] ? "editor-header__download-menu-item_active" : ""}
                    `}
                    onMouseDown={() => makeActive("download-menu-markdown")}
                    onMouseUp={() => makeInactive("download-menu-markdown")}
                    onMouseLeave={() => makeInactive("download-menu-markdown")}
                    onClick={() => downloadMarkdownOrTxt(note.content, "md")}
                  >
                    Markdown
                  </span>
                </li>
                <li>
                  <span
                    className={`
                      editor-header__download-menu-item 
                      editor-header__download-menu-item_type_txt 
                      ${active["download-menu-txt"] ? "editor-header__download-menu-item_active" : ""}
                    `}
                    onMouseDown={() => makeActive("download-menu-txt")}
                    onMouseUp={() => makeInactive("download-menu-txt")}
                    onMouseLeave={() => makeInactive("download-menu-txt")}
                    onClick={() => downloadMarkdownOrTxt(note.content, "txt")}
                  >
                    TXT
                  </span>
                </li>
                <li>
                  <span
                    className={`
                      editor-header__download-menu-item 
                      editor-header__download-menu-item_type_pdf 
                      ${active["download-menu-pdf"] ? "editor-header__download-menu-item_active" : ""}
                    `}
                    onMouseDown={() => makeActive("download-menu-pdf")}
                    onMouseUp={() => makeInactive("download-menu-pdf")}
                    onMouseLeave={() => makeInactive("download-menu-pdf")}
                    onClick={() => downloadPDF(note.content)}
                  >
                    PDF
                  </span>
                </li>
              </menu>
            </li>
          </menu>
        </div>
      </div>
    </div>
  );
}
