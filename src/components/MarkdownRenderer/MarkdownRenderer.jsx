import Markdown from "react-markdown";

export default function MarkdownRenderer({ content }) {
  return <Markdown className="markdown-renderer">{content}</Markdown>;
}
