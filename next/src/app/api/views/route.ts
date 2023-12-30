import { NextRequest, NextResponse } from "next/server";

import { increasePostViews } from "@/service/post";

export async function POST(req: NextRequest) {
  const { postId } = await req.json();

  const views = await increasePostViews(postId);
  return NextResponse.json({ views });
}
