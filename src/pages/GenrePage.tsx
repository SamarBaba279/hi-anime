import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimeCard from "@/components/AnimeCard";
import { getAnimeByGenre, genres } from "@/data/animeData";

const DOMAIN = "https://hi-anime.lovable.app";

const GenrePage = () => {
  const { name } = useParams<{ name: string }>();
  const genreName = genres.find(g => g.toLowerCase().replace(/ /g, "-") === name) || name || "";
  const displayName = genreName.charAt(0).toUpperCase() + genreName.slice(1);
  const animeList = getAnimeByGenre(displayName);

  return (
    <>
      <Helmet>
        <title>{`${displayName} Anime - Watch Free Online | Hi Anime`}</title>
        <meta name="description" content={`Browse the best ${displayName} anime on Hi Anime. Watch ${displayName.toLowerCase()} anime online free in HD with sub and dub.`} />
        <link rel="canonical" href={`${DOMAIN}/genre/${name}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <main className="container py-8">
        <nav className="text-xs text-muted-foreground mb-4 flex items-center gap-1" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link> <span>/</span>
          <span className="text-foreground">{displayName} Anime</span>
        </nav>

        <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-2">
          {displayName} <span className="text-gradient-pink">Anime</span>
        </h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Discover the best {displayName.toLowerCase()} anime series and movies. Watch free in HD quality on Hi Anime with English subtitles and dub.
        </p>

        {/* Genre navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {genres.map(g => (
            <Link
              key={g}
              to={`/genre/${g.toLowerCase().replace(/ /g, "-")}`}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${g === displayName ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-secondary-foreground border-border hover:border-primary/40"}`}
            >
              {g}
            </Link>
          ))}
        </div>

        {animeList.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {animeList.map(a => (
              <AnimeCard key={a.id} slug={a.slug} title={a.title} image={a.image} episodes={a.episodes} totalEpisodes={a.totalEpisodes} rating={a.rating} type={a.type} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-16">No anime found in this genre yet. Check back soon!</p>
        )}
      </main>
      <Footer />
    </>
  );
};

export default GenrePage;
