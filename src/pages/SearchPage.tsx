import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimeCard from "@/components/AnimeCard";
import { searchAnime, animeList } from "@/data/animeData";

const DOMAIN = "https://hi-anime.lovable.app";

const SearchPage = () => {
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const results = q ? searchAnime(q) : [];
  const [query, setQuery] = useState(q);
  const suggestions = ["Action", "Romance", "Fantasy", "Comedy", "Sci-Fi", "Horror"];

  return (
    <>
      <Helmet>
        <title>{q ? `Search: ${q} - Hi Anime` : "Search Anime - Hi Anime"}</title>
        <meta name="description" content={`Search for anime on Hi Anime. Find your favorite anime series and movies to watch online free in HD.`} />
        <link rel="canonical" href={`${DOMAIN}/search${q ? `?q=${encodeURIComponent(q)}` : ""}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <main className="container py-8">
        <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
          🔍 Search <span className="text-gradient-pink">Anime</span>
        </h1>

        <form action="/search" method="get" className="flex items-center gap-2 max-w-lg mb-6">
          <input
            type="search"
            name="q"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by title or genre..."
            className="flex-1 bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Search anime"
          />
          <button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-xl transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </form>

        {!q && (
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-3">Popular searches:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map(s => (
                <Link key={s} to={`/search?q=${s}`} className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs border border-border hover:border-primary/40 transition-colors">{s}</Link>
              ))}
            </div>
          </div>
        )}

        {q && (
          <p className="text-muted-foreground mb-6">
            {results.length} result{results.length !== 1 ? "s" : ""} for "<strong className="text-foreground">{q}</strong>"
          </p>
        )}

        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {results.map(a => (
              <AnimeCard key={a.id} slug={a.slug} title={a.title} image={a.image} episodes={a.episodes} totalEpisodes={a.totalEpisodes} rating={a.rating} type={a.type} />
            ))}
          </div>
        ) : q ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">No anime found for "{q}"</p>
            <Link to="/" className="text-primary hover:underline">Browse all anime →</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {animeList.slice(0, 12).map(a => (
              <AnimeCard key={a.id} slug={a.slug} title={a.title} image={a.image} episodes={a.episodes} totalEpisodes={a.totalEpisodes} rating={a.rating} type={a.type} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
