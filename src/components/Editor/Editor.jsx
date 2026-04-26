import { useState } from "react";
import EditorBody from "../EditorBody/EditorBody";
import EditorHeader from "../EditorHeader/EditorHeader";
import "./Editor-markdown.css";

export default function Editor() {
  const [renderMode, setRenderMode] = useState("MD");

  return (
    <div style={{ display: "none" }} className="editor">
      <EditorHeader setRenderMode={setRenderMode} />
      <EditorBody renderMode={renderMode} />
    </div>
  );
}
