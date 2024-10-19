export const stripMarkdown = (markdown: string): string => {
  return (
    markdown
      // Remove blockquotes
      .replace(/^>\s+/gm, '')
      // Remove horizontal rules
      .replace(/^-{3,}\s*$/gm, '')
      // Remove headers (atx-style)
      .replace(/^\s{0,3}(#{1,6})\s+(.+?)(\s+#*|\s*$)/gm, '$2')
      // Remove images
      .replace(/!\[.*?\]\(.*?\)/g, '')
      // Remove links but keep the text inside brackets
      .replace(/\[([^\]]*?)\]\(.*?\)/g, '$1')
      // Remove emphasis (bold, italic, underline)
      .replace(/(\*\*|__)(.*?)\1/g, '$2')
      .replace(/(\*|_)(.*?)\1/g, '$2')
      // Remove strikethroughs
      .replace(/~~(.*?)~~/g, '$1')
      // Remove inline code
      .replace(/`([^`]+)`/g, '$1')
      // Remove code blocks
      .replace(/```[\s\S]*?```/g, '')
      // Remove lists (ordered and unordered)
      .replace(/^\s*[-+*]\s+/gm, '')
      .replace(/^\s*\d+\.\s+/gm, '')
      // Remove extra newlines and trim
      .replace(/\n{2,}/g, '\n')
      .replace(/\n+/g, ' ')
      .trim()
  );
};
