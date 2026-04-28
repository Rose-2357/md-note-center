import { useEditor, EditorContent } from "@tiptap/react";
import { FloatingMenu, BubbleMenu } from "@tiptap/react/menus";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";
import CodeBlock from "@tiptap/extension-code-block";
import Text from "@tiptap/extension-text";
import "./TipTap.css";
import { useContext } from "react";
import { NotesStateContext } from "../../utils/NotesStateContext";

export default function Tiptap({ update, note, content }) {
  const [notes, setNotes] = useContext(NotesStateContext);

  const onWindowKeydown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      e.preventDefault();
      editor.commands.blur();
    }
  };

  function save() {
    if (update && note) {
      setNotes([...notes.filter((n) => n.id !== note.id), note]);
    }
  }

  const editor = new Editor({
    extensions: [
      Document.extend({
        content: "codeBlock",
      }),
      CodeBlock,
      Text,
    ],
    parseOptions: {
      preserveWhitespace: "full",
    },
    content: content,
    onMount: () => {
      window.addEventListener("keydown", onWindowKeydown);
    },
    onUpdate: ({ editor }) => {
      if (update && note) {
        note.content = editor.getText();
        note.lastVisited = Date.now();
      }
    },
    onBlur: save,
    onUnmount: () => {
      window.removeEventListener("keydown", onWindowKeydown);
    },
    addKeyboardShortcuts() {
      return {
        "Mod-s": () => {
          save();
          return true;
        },
      };
    },
  });

  return <EditorContent editor={editor} />;
}
