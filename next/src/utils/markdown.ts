import { marked } from "marked";
import he from "he";

export function convertMarkdownToPlainText(markdownText: string): string {
  if (!markdownText) {
    return "";
  }
  const htmlText = marked(markdownText) as string;
  const textWithEntitiesConverted = he.decode(htmlText);
  const plainText = textWithEntitiesConverted
    .replace(/<[^>]*>/g, "")
    .replace(/(\*\*|__)/g, "");

  return plainText;
}
