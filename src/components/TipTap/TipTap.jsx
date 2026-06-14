// import { useEditor, EditorContent } from "@tiptap/react";
// import { FloatingMenu, BubbleMenu } from "@tiptap/react/menus";
// import { Editor } from "@tiptap/core";
// import StarterKit from "@tiptap/starter-kit";
// import Placeholder from "@tiptap/extension-placeholder";
// import Paragraph from "@tiptap/extension-paragraph";
// import Document from "@tiptap/extension-document";
// import CodeBlock from "@tiptap/extension-code-block";
// import Text from "@tiptap/extension-text";
// import "./TipTap.css";
// import { useContext } from "react";
// import { NotesStateContext } from "../../utils/NotesStateContext";

// export default function Tiptap({ update, note, content }) {
//   const [notes, setNotes] = useContext(NotesStateContext);

//   const onWindowKeydown = (e) => {
//     if ((e.ctrlKey || e.metaKey) && e.key === "s") {
//       e.preventDefault();
//       editor.commands.blur();
//     }
//   };

//   function save() {
//     if (update && note) {
//       setNotes([...notes.filter((n) => n.id !== note.id), note]);
//     }
//   }

//   const editor = new Editor({
//     extensions: [
//       Document.extend({
//         content: "codeBlock",
//       }),
//       CodeBlock,
//       Text,
//       Placeholder.configure({
//         placeholder: "START TYPING HERE...",
//         emptyNodeClass: "is-empty",
//       }),
//     ],
//     parseOptions: {
//       preserveWhitespace: "full",
//     },
//     content: content,
//     onMount: () => {
//       window.addEventListener("keydown", onWindowKeydown);
//     },
//     onUpdate: ({ editor }) => {
//       if (update && note) {
//         note.content = editor.getText();
//         note.lastVisited = Date.now();
//       }
//     },
//     onBlur: save,
//     onUnmount: () => {
//       window.removeEventListener("keydown", onWindowKeydown);
//     },
//     addKeyboardShortcuts() {
//       return {
//         "Mod-s": () => {
//           save();
//           return true;
//         },
//       };
//     },
//   });

//   return <EditorContent editor={editor} />;
// }

import { useEditor, EditorContent } from "@tiptap/react";
import { Editor } from "@tiptap/core";
import Placeholder from "@tiptap/extension-placeholder";
import Document from "@tiptap/extension-document";
import CodeBlock from "@tiptap/extension-code-block";
import Text from "@tiptap/extension-text";
import "./TipTap.css";
import { useContext, useEffect } from "react";
import { NotesStateContext } from "../../utils/NotesStateContext";

export default function Tiptap({ update, note, content }) {
  const [notes, setNotes] = useContext(NotesStateContext);

  function save() {
    if (update && note && editor) {
      setNotes([...notes.filter((n) => n.id !== note.id), note]);
    }
  }

  // Use 'useEditor' instead of 'new Editor' so React handles instances properly
  const editor = useEditor({
    extensions: [
      Document.extend({
        content: "codeBlock",
      }),
      CodeBlock,
      Text,
      Placeholder.configure({
        placeholder: "START TYPING HERE...",
        emptyNodeClass: "is-empty",
        includeNodeEmptyDOM: true,
      }),
    ],
    parseOptions: {
      preserveWhitespace: "full",
    },
    content: content,
    onUpdate: ({ editor }) => {
      if (update && note) {
        note.content = editor.getText();
        note.lastVisited = Date.now();
      }
    },
    onBlur: save,
  });

  // Handle your window listener via a proper useEffect hook
  useEffect(() => {
    const onWindowKeydown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        if (editor) {
          editor.commands.blur();
          save();
        }
      }
    };

    window.addEventListener("keydown", onWindowKeydown);
    return () => window.removeEventListener("keydown", onWindowKeydown);
  }, [editor, notes, note]);

  return <EditorContent editor={editor} />;
}
