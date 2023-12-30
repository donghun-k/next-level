"use client";

import { useEffect, useState } from "react";

const ViewCounter = ({ postId }: { postId: string }) => {
  const [views, setViews] = useState(null);
  useEffect(() => {
    fetch(`/api/views`, {
      method: "POST",
      body: JSON.stringify({ postId }),
    })
      .then((res) => res.json())
      .then(({ views }) => {
        console.log(views);
        setViews(views);
      });
  }, [postId]);
  if (views === null) {
    return <span>loading...</span>;
  }
  return (
    <span>
      {views} {views === 1 ? "view" : "views"}
    </span>
  );
};

export default ViewCounter;
