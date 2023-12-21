import { NextRequest, NextResponse } from "next/server";

import { getComments } from "@/service/comment";

interface Context {
  params: {
    postId: string;
  };
}

export async function GET(_: NextRequest, { params }: Context) {
  const { postId } = params;

  const comments = await getComments(postId);

  return NextResponse.json(comments);
}
