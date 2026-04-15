import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";

const topSearches = [
  "Solo Leveling Season 2",
  "Arise from the Shadow",
  "Sakamoto Days",
  "One Piece",
  "The Apothecary Diaries Season 2",
  "Blue Lock",
  "Frieren: Beyond Journey's End",
];

const HeroSection = () => {
  const [query, setQuery] = useState("");

  return (
    <section className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Popular anime characters - watch anime online free on HiAnime"
          className="w-full h-full object-cover object-top"
          width={1280}
          height={720}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      <div className="container relative z-10 py-16 md:py-24 flex justify-center">
        <div className="max-w-xl w-full space-y-6 animate-fade-in text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight">
            h<span className="text-primary">!</span>anime
          </h1>

          <div className="flex items-center gap-2 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="search"
                placeholder="Search anime..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-card/80 backdrop-blur border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="Search anime"
              />
            </div>
            <button
              className="bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-xl transition-colors glow-pink"
              aria-label="Submit search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed px-4">
            <span className="text-primary font-medium">Top search:</span>{" "}
            {topSearches.join(" · ")}
          </p>

          <a
            href="https://wplacelive.live"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary font-heading font-semibold px-6 py-3 rounded-xl hover:bg-primary/25 transition-colors"
          >
            Watch anime <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
