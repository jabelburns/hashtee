import { Hero } from "@/components/Hero";
export default function Page(){
  const demo = [
    { id: "1", title: "#BookTok Tee", price_cents: 2499, image: "/logo.svg" },
    { id: "2", title: "#PlantParent Mug", price_cents: 1499, image: "/logo.svg" },
    { id: "3", title: "#DogDad Hat", price_cents: 2499, image: "/logo.svg" },
    { id: "4", title: "#GamerMode Tote", price_cents: 1999, image: "/logo.svg" }
  ];
  return (
    <div>
      <Hero />
      <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-3xl">Trending now</h2>
          <a href="#" className="text-brand font-semibold">View all →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demo.map(p => (
            <div key={p.id} className="group rounded-2xl bg-white border hover:border-brand/40 hover:shadow-soft transition cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-t-2xl bg-neutral-100 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} className="w-2/3 h-2/3 object-contain group-hover:scale-[1.02] transition" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span className="text-sm font-semibold text-ink/70">${(p.price_cents/100).toFixed(2)}</span>
                </div>
                <div className="mt-1 text-xs opacity-60">T-shirt • Mug • Bag • Hat</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="how" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[{
            title: "Pick a hashtag", body: "Search trends or type your own niche tag."
          },{
            title: "Choose a style", body: "Bold, stacked, arch, or wave — in multiple OFL fonts."
          },{
            title: "Print on-demand", body: "Fulfilled automatically via Printful. You get tracking."
          }].map((s) => (
            <div key={s.title} className="rounded-2xl border p-6 bg-gray-50">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="opacity-70 mt-2">{s.body}</p>
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
