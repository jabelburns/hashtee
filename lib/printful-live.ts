const BASE = "https://api.printful.com";

// Map our product kinds to a Printful (productId, variantId, area)
export type Kind = "tee" | "mug" | "bag" | "hat";

// TODO: replace these variantIds with the exact ones you want.
// These are examples; they just need to be valid for your store/catalog region.
const MAP: Record<Kind, { productId: number; variantId: number; area: "front" | "default" }> = {
  tee: { productId: 71,  variantId: 4011,  area: "front" },   // Bella+Canvas 3001 example
  mug: { productId: 330, variantId: 10050, area: "default" }, // 11oz mug example
  bag: { productId: 192, variantId: 4722,  area: "default" }, // eco tote example
  hat: { productId: 155, variantId: 4368,  area: "front" },   // dad hat example
};

function auth() {
  const key = process.env.PRINTFUL_API_KEY;
  if (!key) throw new Error("PRINTFUL_API_KEY missing");
  return { Authorization: Bearer , "Content-Type": "application/json" };
}

async function pf(path: string, init?: RequestInit) {
  const r = await fetch(${BASE}, { ...init, headers: { ...auth(), ...(init?.headers||{}) } });
  if (!r.ok) throw new Error(${path}  );
  return r.json();
}

// --- Mockup generator (text layer) ---
export async function createMockupFromText(tag: string, kind: Kind) {
  const conf = MAP[kind];
  // Build files array using TEXT LAYER (no PNG upload needed)
  const files = [
    {
      type: conf.area,      // "front" or "default"
      text: {
        text: tag,
        color: "#0F0F12",
        font: "Anton",      // swap to your preferred
        // You can add size/position later if needed
      },
    },
  ];

  const create = await pf(/mockup-generator/create-task/, {
    method: "POST",
    body: JSON.stringify({
      variant_ids: [conf.variantId],
      files,
      format: "png",
      // background, scaling, etc. can be set here
    }),
  });

  const taskKey = create.result?.task_key;
  if (!taskKey) throw new Error("No task_key from Printful");

  // Poll
  for (let i = 0; i < 40; i++) {
    const status = await pf(/mockup-generator/task?task_key=);
    const s = status.result?.status;
    if (s === "completed") {
      const mockups = status.result?.mockups || [];
      const url = mockups[0]?.mockup_url || mockups[0]?.mockup_url_png;
      if (!url) throw new Error("No mockup_url from Printful");
      return { url, variantId: conf.variantId };
    }
    if (s === "failed") throw new Error("Mockup task failed");
    await new Promise(r => setTimeout(r, 1500));
  }
  throw new Error("Mockup task timed out");
}

// --- Create an order (uses TEXT LAYER as the print file) ---
export async function createOrderFromText({
  tag,
  kind,
  recipient,
  // default M black tee, etc. You can expose size/color on the client later.
}: {
  tag: string;
  kind: Kind;
  recipient: {
    name: string; address1: string; city: string; state_code?: string;
    country_code: string; zip: string; email?: string; phone?: string;
  };
}) {
  const conf = MAP[kind];
  const body = {
    recipient,
    items: [
      {
        variant_id: conf.variantId,
        files: [
          {
            type: conf.area,
            text: { text: tag, color: "#0F0F12", font: "Anton" },
          },
        ],
      },
    ],
    // test mode: you can add "confirm": false to only create a draft
  };

  const resp = await pf("/orders", {
    method: "POST",
    body: JSON.stringify(body),
  });

  return resp.result;
}
