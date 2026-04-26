import headingCardIcon from "../assets/headings-card-icon.svg";
import boldCardIcon from "../assets/bold-card-icon.svg";
import italicCardIcon from "../assets/italic-card-icon.svg";
import ulCardIcon from "../assets/ul-card-icon.svg";
import olCardIcon from "../assets/ol-card-icon.svg";
import linksCardIcon from "../assets/links-card-icon.svg";
import inlineCodeCardIcon from "../assets/inline-code-card-icon.svg";
import codeBlockCardIcon from "../assets/code-blocks-card-icon.svg";
import quotesCardIcon from "../assets/quotes-card-icon.svg";
import strikethroughCardIcon from "../assets/strikethrough-card-icon.svg";
import imageCardIcon from "../assets/image-card-icon.svg";
import footnoteCardIcon from "../assets/footnote-card-icon.svg";

export const cards = [
  {
    icon: new URL(headingCardIcon, import.meta.url).href,
    title: "Headings",
    syntax: "# Heading 1\n## Heading 2\n### Heading 3",
    results: "Organizes your document with different section sizes.",
  },
  {
    icon: new URL(boldCardIcon, import.meta.url).href,
    title: "Bold Text",
    syntax: "**bold text**",
    results: "Makes text bold",
  },
  {
    icon: new URL(italicCardIcon, import.meta.url).href,
    title: "Italic Text",
    syntax: "*italic text*",
    results: "Makes text italic",
  },
  {
    icon: new URL(ulCardIcon, import.meta.url).href,
    title: "Unordered List",
    syntax: "- Item 1\n- Item 2\n- Item 3",
    results: "Creates bullet point lists",
  },
  {
    icon: new URL(olCardIcon, import.meta.url).href,
    title: "Ordered List",
    syntax: "1. First item\n2. Second item\n3. Third item",
    results: "Creates numbered lists",
  },
  {
    icon: new URL(linksCardIcon, import.meta.url).href,
    title: "Links",
    syntax: "[Link Text](https://example.com)",
    results: "Creates clickable links",
  },
  {
    icon: new URL(inlineCodeCardIcon, import.meta.url).href,
    title: "Inline Code",
    syntax: "`inline code`",
    results: "Formats text as inline code",
  },
  {
    icon: new URL(codeBlockCardIcon, import.meta.url).href,
    title: "Code Block",
    syntax: "```language\ncode block\n```",
    results:
      "Creates multi-line code blocks with colors based on the programming language.",
  },
  {
    icon: new URL(quotesCardIcon, import.meta.url).href,
    title: "Quotes",
    syntax: "> Block quote\n> Another block quote",
    results: "Indents text and styles it as a quote or citation.",
  },
  {
    icon: new URL(strikethroughCardIcon, import.meta.url).href,
    title: "Strikethrough Text",
    syntax: "~~strikethrough text~~",
    results: "Creates strikethrough text",
  },
  {
    icon: new URL(imageCardIcon, import.meta.url).href,
    title: "Image",
    syntax: "![Image Description](https://image.jpg)",
    results: "Embeds an image from a URL",
  },
  {
    icon: new URL(footnoteCardIcon, import.meta.url).href,
    title: "Footnote",
    syntax: "Text referencing footnote[^1]\n\n[^1]: Footnote text",
    results: "Creates a reference note at the end of the document.",
  },
];
