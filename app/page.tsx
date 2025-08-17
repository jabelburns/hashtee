import { Hero } from "../components/Hero";
import { listStoreProducts } from "../lib/printful";

export const revalidate = 300; // revalidate every 5 minutes

export default async function Page() {
  let products: Array<{ id: string; title: string; image: string }> = [];
  try {
    products = await listStoreProducts();
  } catch {
    products = [
      { id: "1", title: "#BookTok Tee", image: "/logo.svg" },
      { id: "2", title: "#PlantParent Mug", image: "/logo.svg" },
      { id: "3", title: "#DogDad Hat", image: "/logo.svg" },
      { id: "4", title: "#GamerMode Tote", image: "/logo.svg" },
    ];
  }

  const rows = products.slice(0, 8).map((p, i) => ({
    id: p.id, title: p.title, image: p.image || "/logo.svg",
    price_cents: [2499,1499,1999,2499][i % 4],
  }));

  return (
    <div>
      <Hero />
      <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-3xl">Trending now</h2>
          <a href="/api/printful/products" className="text-brand font-semibold">View JSON →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rows.map(p => (
            <div key={p.id} className="group rounded-2xl bg-white border hover:border-brand/40 hover:shadow-soft transition">
              <div className="aspect-square overflow-hidden rounded-t-2xl bg-neutral-100 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span className="text-sm font-semibold text-ink/70"></span>
                </div>
                <div className="mt-1 text-xs opacity-60">T-shirt • Mug • Bag • Hat</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm flex items-center justify-between">
          <span>© {new Date().getFullYear()} HashTee</span>
          <div className="flex gap-4">
            <a href="#">About</a><a href="#">Shipping</a><a href="#">Returns</a><a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}