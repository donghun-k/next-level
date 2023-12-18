import { NextResponse } from "next/server";

import { getRecentPosts } from "@/service/post";

export async function GET() {
  const posts = await getRecentPosts();

  return NextResponse.json(posts);
}
