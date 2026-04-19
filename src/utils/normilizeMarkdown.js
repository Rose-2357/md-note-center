export default function normalizeMarkdown(content) {
  if (typeof content !== "string") return content;

  const lines = content.split("\n");
  const minIndent = lines
    .filter((line) => line.trim().length > 0)
    .reduce(
      (min, line) => Math.min(min, line.match(/^ */)[0].length),
      Infinity,
    );

  return lines
    .map((line) => line.slice(minIndent))
    .join("\n")
    .trim();
}
