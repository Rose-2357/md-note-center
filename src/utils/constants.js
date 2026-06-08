export const defaultNotes = [
  {
    id: "1",
    title: "Welcome to MD Note Center",
    content: `
    # Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

This is a sentence that includes a footnote reference[^1].

[^1]: This is the footnote text that typically appears at the bottom of the page.

**bold text**

*italic text*

~~strikethrough text~~

- Item 1
- Item 2
- Item 3

1. First item
2. Second item
3. Third item

- [x] Completed task
- [ ] Uncompleted task
- [ ] Another task

[Link text](https://example.com)

![Image Alt Text](https://images.unsplash.com/photo-1773332585698-cba3c91b73e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8)

\`inline code here\`

\`\`\`javascript
// Code block
function test() {
  console.log("Hello World");
}
\`\`\`
> This is a blockquote. Use it for quotes or to highlight specific text.
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell A1   | Cell A2   | Cell A3   |
| Cell B1   | Cell B2   | Cell B3   |

---


    `,
    tags: ["welcome", "introduction", "getting-started"],
    lastVisited: new Date("2026-04-19T00:00:00Z").toISOString(),
  },
  {
    id: "2",
    title: "Markdown Syntax Guide",
    content: `
    # Markdown Syntax Guide
    \`code\`
    Here are some common Markdown syntax examples to get you started:
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["markdown", "syntax", "guide"],
    lastVisited: new Date("2026-04-01T00:00:00Z").toISOString(),
  },
  {
    id: "3",
    title: "Sample Note 1",
    content: `
    # Sample Note 1
    \`\`\`javascript
    // Code block
    function test() {
      console.log("Hello World");
    }
    \`\`\`
    This is a simple sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date("2026-01-01T00:00:00Z").toISOString(),
  },
  {
    id: "4",
    title:
      "Sample Note 2 the title is gonna overflowwwwwwwww oooouuuuuuuuuuuuu!!!!!",
    content: `
    # Sample Note 2
    - [ ] aaaaaaaaaaaaa\n
    This is another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur.

    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date("2023-01-01T00:00:00Z").toISOString(),
  },
  {
    id: "5",
    title: "Sample Note 3",
    content: `
    # Sample Note 3 log header ahhhhhhhh its so longgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Sample Note 4",
    content: `
    # Sample Note 4
    This is *yet* **another** ~~sample~~ note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: [
      "sample",
      "markdown",
      "formatting",
      "styling",
      "emphasis",
      "italics",
      "bold",
      "strikethrough",
      "text-decoration",
      "typography",
      "lorem ipsum",
      "placeholder text",
      "sample content",
      "markdown syntax",
      "markdown formatting",
      "markdown styling",
      "text formatting",
      "text styling",
      "emphasis techniques",
      "typography examples",
      "lorem ipsum examples",
      "placeholder text examples",
      "sample content examples",
      "abcdefghijklmnopqrstuvwxyz1234567890",
    ],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "7",
    title: "Sample Note 5",
    content: `
    - [ ] Task 1
    - [x] Task 2
    - [ ] Task 3
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "8",
    title: "Sample Note 6",
    content: `
    # Sample Note 6 
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "9",
    title: "Sample Note 7",
    content: `
    # Sample Note 7
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "10",
    title: "Sample Note 8",
    content: `
    # Sample Note 8 
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "11",
    title: "Sample Note 9",
    content: `

    # Sample Note 9
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,

    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "12",
    title: "Sample Note 10",
    content: `
    # Sample Note 10
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "13",
    title: "Sample Note 11",
    content: `
    # Sample Note 11
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "14",
    title: "Sample Note 12",
    content: `
    # Sample Note 12
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.

    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "15",
    title: "Sample Note 13",
    content: `
    # Sample Note 13
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "16",
    title: "Sample Note 14",
    content: `
    # Sample Note 14
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "17",
    title: "Sample Note 15",
    content: `
    # Sample Note 15
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "18",
    title: "Sample Note 16",
    content: `
    # Sample Note 16
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "19",
    title: "Sample Note 17",
    content: `
    # Sample Note 17
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "20",
    title: "Sample Note 18",
    content: `
    # Sample Note 18
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "21",
    title: "Sample Note 19",
    content: `
    # Sample Note 19
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "22",
    title: "Sample Note 20",
    content: `
    # Sample Note 20
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "23",
    title: "Sample Note 21",
    content: `
    # Sample Note 21
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "24",
    title: "Sample Note 22",
    content: `
    # Sample Note 22
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
  {
    id: "25",
    title: "Sample Note 23",
    content: `
    # Sample Note 23 
    This is yet another sample note to demonstrate the Markdown syntax.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
    `,
    tags: ["sample", "markdown"],
    lastVisited: new Date().toISOString(),
  },
];
