import { NextRequest, NextResponse } from "next/server";

import { increasePostViews } from "@/services/post";

export const dynamic = "force-dynamic";

export async function GET(
  _: NextRequest,
  { params: { postId } }: { params: { postId: string } },
) {
  const views = await increasePostViews(postId);
  return NextResponse.json(views);
}
