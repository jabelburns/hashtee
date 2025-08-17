"use server";

const BASE = "https://api.printful.com";

// Most private tokens use Bearer; we default to that.
function authHeaders() {
  const key = process.env.PRINTFUL_API_KEY;
  if (!key) throw new Error("PRINTFUL_API_KEY missing");
  return { Authorization: Bearer  };
}

export async function pfGet(path: string, init?: RequestInit): Promise<any> {
  const res = await fetch(${BASE}, {
    ...init,
    headers: { ...authHeaders(), ...(init?.headers || {}) },
    cache: "no-store",
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(Printful GET  failed : );
  }
  const json = await res.json();
  return json;
}

/** Fetch synced store products (with Printful thumbnails) */
export async function listStoreProducts() {
  type PFList = { result: Array<{ id: number; name: string; thumbnail_url?: string }> };
  const data = await pfGet("/store/products");
  return (data as PFList).result.map(p => ({
    id: String(p.id),
    title: p.name,
    image: p.thumbnail_url || "/logo.svg",
  }));
}