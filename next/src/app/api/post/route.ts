import { NextRequest, NextResponse } from "next/server";

import { getPost } from "@/service/post";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const postId = searchParams.get("postId");

  if (!postId) return NextResponse.error();

  const posts = await getPost(postId);
  return NextResponse.json(posts);
}
