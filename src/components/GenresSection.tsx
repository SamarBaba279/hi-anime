import { Link } from "react-router-dom";
import { genres } from "@/data/animeData";

const genreEmojis: Record<string, string> = {
  Action: "⚔️", Adventure: "🗺️", Comedy: "😂", Drama: "🎭", Fantasy: "✨",
  Horror: "👻", Isekai: "🌀", Mecha: "🤖", Mystery: "🔍", Romance: "💕",
  "Sci-Fi": "🚀", "Slice of Life": "🌸", Sports: "⚽", Supernatural: "👁️", Thriller: "🔥",
};

const GenresSection = () => (
  <section className="container py-10 md:py-14" aria-labelledby="genres-heading">
    <h2 id="genres-heading" className="font-heading text-2xl md:text-3xl font-bold mb-6">
      🎭 Browse by <span className="text-gradient-pink">Genre</span>
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {genres.map(genre => (
        <Link
          key={genre}
          to={`/genre/${genre.toLowerCase().replace(/ /g, "-")}`}
          className="flex items-center gap-2 bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:bg-secondary/50 transition-all group"
        >
          <span className="text-xl">{genreEmojis[genre] || "🎬"}</span>
          <span className="font-heading font-semibold text-sm group-hover:text-primary transition-colors">{genre}</span>
        </Link>
      ))}
    </div>
  </section>
);

export default GenresSection;
