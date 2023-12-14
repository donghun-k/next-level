import { NextRequest, NextResponse } from "next/server";

import { getPosts } from "@/service/post";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const category = searchParams.get("category");

  const posts = await getPosts(category ?? "");

  return NextResponse.json(posts);
}
