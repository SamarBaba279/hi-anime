import { useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { getTopRated } from "@/data/animeData";

const featured = getTopRated().slice(0, 5);

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % featured.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const anime = featured[current];

  return (
    <section className="relative min-h-[420px] md:min-h-[520px] flex items-end overflow-hidden">
      <div className="absolute inset-0 transition-all duration-700">
        <img
          src={anime.image}
          alt={`${anime.title} - watch anime online HD streaming`}
          className="w-full h-full object-cover"
          width={1280}
          height={720}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 pb-12 md:pb-16 pt-24">
        <div className="max-w-xl space-y-4 animate-fade-in" key={current}>
          <div className="flex items-center gap-2 text-xs">
            <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded font-bold">{anime.type}</span>
            <span className="text-muted-foreground">{anime.year}</span>
            {anime.rating > 0 && (
              <span className="flex items-center gap-1 text-yellow-400">
                <Star className="w-3 h-3" fill="currentColor" /> {anime.rating}
              </span>
            )}
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold leading-tight">{anime.title}</h2>
          <p className="text-sm text-muted-foreground line-clamp-2">{anime.synopsis}</p>
          <div className="flex items-center gap-3">
            <Link
              to={`/watch/${anime.slug}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-6 py-3 rounded-xl transition-colors glow-pink"
            >
              <Play className="w-4 h-4" fill="currentColor" /> Watch Now
            </Link>
            <Link
              to={`/anime/${anime.slug}`}
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-heading font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Details
            </Link>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground flex-wrap">
            {anime.genres.map(g => (
              <Link key={g} to={`/genre/${g.toLowerCase()}`} className="bg-secondary px-2 py-0.5 rounded hover:text-primary transition-colors">{g}</Link>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setCurrent(p => (p - 1 + featured.length) % featured.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/50 backdrop-blur rounded-full p-2 hover:bg-primary/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrent(p => (p + 1) % featured.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/50 backdrop-blur rounded-full p-2 hover:bg-primary/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
