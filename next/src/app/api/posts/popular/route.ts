import { NextResponse } from "next/server";

import { getPopularPosts } from "@/service/post";

export async function GET() {
  const posts = await getPopularPosts();

  return NextResponse.json(posts);
}
