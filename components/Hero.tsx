import { Logo } from "./Logo";
export function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Logo className="h-10" />
            <h1 className="mt-6 font-display text-5xl leading-[1.05]">
              Hashtag merch for the moment — only at
              <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent"> HashTee.store</span>.
            </h1>
            <p className="mt-4 text-lg opacity-80 max-w-prose">
              Pick a trending hashtag, choose your font, and get it printed on tees, mugs, bags, and hats.
              Always fresh, always relevant.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#shop" className="px-5 py-3 rounded-xl bg-brand text-white font-semibold shadow-soft hover:opacity-90">Shop trending</a>
              <a href="#how" className="px-5 py-3 rounded-xl border font-semibold">How it works</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 blur-3xl opacity-30 bg-gradient-to-tr from-brand to-accent rounded-full"/>
            <div className="relative grid grid-cols-2 gap-4">
              {["#HotTrend","#Viral","#NewDrop","#MustHave"].map((t)=> (
                <div key={t} className="rounded-2xl bg-white shadow-soft p-4">
                  <div className="aspect-square rounded-xl bg-neutral-100 flex items-center justify-center text-4xl font-display">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
