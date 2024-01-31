"use client";

import useViews from "@/hooks/useViews";

const ViewCounter = ({ postId }: { postId: string }) => {
  const { data: views, isLoading } = useViews(postId);

  if (isLoading) {
    return <span>loading...</span>;
  }
  return (
    <span>
      {views} {views === 1 ? "view" : "views"}
    </span>
  );
};

export default ViewCounter;
