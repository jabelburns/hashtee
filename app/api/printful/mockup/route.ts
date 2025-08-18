import { NextRequest, NextResponse } from "next/server";
import { createMockupFromText } from "../../../../lib/printful-live";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const tag = (req.nextUrl.searchParams.get("tag") || "").trim();
  const kind = (req.nextUrl.searchParams.get("kind") || "tee") as any;
  if (!tag.startsWith("#")) return NextResponse.json({ error: "tag must start with #"}, { status: 400 });

  // Simple denylist to avoid obvious trademark landmines
  const deny = [/superbowl/i, /olympic/i, /nike/i, /disney/i];
  if (deny.some(rx => rx.test(tag))) {
    return NextResponse.json({ error: "tag not allowed"}, { status: 400 });
  }

  try {
    const { url, variantId } = await createMockupFromText(tag, kind);
    return NextResponse.json({ url, variantId });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "mockup failed" }, { status: 500 });
  }
}

