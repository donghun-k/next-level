import { NextResponse } from "next/server";

import { getCategories } from "@/service/category";

export async function GET() {
  const data = await getCategories();
  return NextResponse.json(data);
}
