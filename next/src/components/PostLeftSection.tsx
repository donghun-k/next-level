"use client";

import CommentSection from "./CommentSection";
import MarkdownViewer from "./MarkdownViewer";

const PostLeftSection = ({ content }: { content: string }) => {
  return (
    <section className="flex min-h-[calc(100vh_-_530px)] w-[844px] flex-col gap-16 border-r-2 border-r-gray-100 px-4 py-6">
      <MarkdownViewer content={content} />
      <CommentSection />
    </section>
  );
};

export default PostLeftSection;
