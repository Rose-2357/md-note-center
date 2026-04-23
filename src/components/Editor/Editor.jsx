import { useState } from "react";
import EditorBody from "../EditorBody/EditorBody";
import EditorHeader from "../EditorHeader/EditorHeader";

export default function Editor() {
  const [renderMode, setRenderMode] = useState("MD");

  return (
    <div className="editor">
      <EditorHeader setRenderMode={setRenderMode} />
      <EditorBody renderMode={renderMode} />
    </div>
  );
}
