import { NextRequest, NextResponse } from "next/server";

import { getPosts } from "@/service/post";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const category = searchParams.get("category") ?? "All";
  const page = isNaN(Number(searchParams.get("page")))
    ? 1
    : Number(searchParams.get("page"));

  const posts = await getPosts({
    category: category,
    page: page,
  });

  return NextResponse.json(posts);
}
