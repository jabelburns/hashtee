import { NextResponse } from "next/server";
import { listStoreProducts } from "../../../lib/printful";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const items = await listStoreProducts();
    return NextResponse.json({ items });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "printful failed" }, { status: 500 });
  }
}