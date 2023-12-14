import marked from "marked";

export const convertMarkdownToHtml = (markdownString: string) => {
  const boldRegex = /\*\*(.*?)\*\*/g;
  const italicRegex = /\*(.*?)\*/g;
  const headingRegex = /^#+\s*(.*)/gm;
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const inlineCodeRegex = /`([^`]+)`/g;
  const codeBlockRegex = /```([^`]+)```/g;

  let plainString = markdownString
    .replace(boldRegex, "$1") // 볼드체 제거
    .replace(italicRegex, "$1") // 이탤릭체 제거
    .replace(headingRegex, "$1") // 헤딩 제거
    .replace(linkRegex, "$1 ($2)") // 링크 텍스트와 URL 추출
    .replace(inlineCodeRegex, "$1") // 인라인 코드 제거
    .replace(codeBlockRegex, "$1"); // 코드 블록 제거

  return plainString;
};
