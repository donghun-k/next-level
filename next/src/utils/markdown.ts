import { marked } from "marked";
import he from "he";

export function convertMarkdownToPlainText(markdownText: string): string {
  // Markdown을 HTML로 변환
  const htmlText = marked(markdownText) as string;

  // HTML 엔티티를 일반 텍스트로 변환
  const textWithEntitiesConverted = he.decode(htmlText);

  // HTML 태그와 Markdown 강조 표시를 제거하여 Plain 텍스트로 변환
  const plainText = textWithEntitiesConverted
    .replace(/<[^>]*>/g, "")
    .replace(/(\*\*|__)/g, "");

  return plainText;
}
