import { NextRequest, NextResponse } from "next/server";

import { getPosts } from "@/services/post";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const category = searchParams.get("category") ?? "All";
  const pageParam = searchParams.get("page");
  const query = searchParams.get("query") ?? "";
  const page = !pageParam || isNaN(Number(pageParam)) ? 1 : Number(pageParam);

  const posts = await getPosts({
    category,
    page,
    query,
  });

  return NextResponse.json(posts);
}
