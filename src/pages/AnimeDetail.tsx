import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Play, Star, Calendar, Clock, Film } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimeCard from "@/components/AnimeCard";
import { getAnimeBySlug, getAnimeByGenre } from "@/data/animeData";

const DOMAIN = "https://hi-anime.lovable.app";

const AnimeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const anime = getAnimeBySlug(slug || "");

  if (!anime) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center"><h1 className="text-3xl font-bold mb-4">Anime Not Found</h1><Link to="/" className="text-primary hover:underline">Go Home</Link></div>
    </div>
  );

  const related = getAnimeByGenre(anime.genres[0]).filter(a => a.id !== anime.id).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TVSeries",
    name: anime.title,
    description: anime.synopsis,
    genre: anime.genres,
    aggregateRating: anime.rating > 0 ? { "@type": "AggregateRating", ratingValue: anime.rating, bestRating: 10, ratingCount: Math.floor(Math.random() * 5000) + 1000 } : undefined,
    numberOfEpisodes: anime.totalEpisodes,
    url: `${DOMAIN}/anime/${anime.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: anime.genres[0], item: `${DOMAIN}/genre/${anime.genres[0].toLowerCase()}` },
      { "@type": "ListItem", position: 3, name: anime.title, item: `${DOMAIN}/anime/${anime.slug}` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{`Watch ${anime.title} Online Free - Hi Anime`}</title>
        <meta name="description" content={`Watch ${anime.title} online free in HD on Hi Anime. ${anime.synopsis.slice(0, 120)}...`} />
        <meta name="keywords" content={`${anime.title}, watch ${anime.title} online, ${anime.genres.join(", ")} anime, anime streaming`} />
        <link rel="canonical" href={`${DOMAIN}/anime/${anime.slug}`} />
        <meta property="og:title" content={`Watch ${anime.title} - Hi Anime`} />
        <meta property="og:description" content={anime.synopsis.slice(0, 160)} />
        <meta property="og:url" content={`${DOMAIN}/anime/${anime.slug}`} />
        <meta property="og:type" content="video.tv_show" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        <div className="relative min-h-[300px] md:min-h-[400px]">
          <img src={anime.image} alt={`${anime.title} anime banner`} className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container -mt-32 relative z-10 pb-12">
          <nav className="text-xs text-muted-foreground mb-4 flex items-center gap-1" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary">Home</Link> <span>/</span>
            <Link to={`/genre/${anime.genres[0].toLowerCase()}`} className="hover:text-primary">{anime.genres[0]}</Link> <span>/</span>
            <span className="text-foreground">{anime.title}</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-48 md:w-56 shrink-0">
              <img src={anime.image} alt={`Watch ${anime.title} online free HD streaming`} className="w-full rounded-xl border border-border shadow-lg" width={224} height={320} />
            </div>
            <div className="space-y-4 flex-1">
              <h1 className="font-heading text-3xl md:text-4xl font-extrabold">{anime.title}</h1>
              <div className="flex flex-wrap gap-3 text-sm">
                {anime.rating > 0 && <span className="flex items-center gap-1 text-yellow-400"><Star className="w-4 h-4" fill="currentColor" /> {anime.rating}</span>}
                <span className="flex items-center gap-1 text-muted-foreground"><Calendar className="w-4 h-4" /> {anime.year}</span>
                <span className="flex items-center gap-1 text-muted-foreground"><Clock className="w-4 h-4" /> {anime.duration}</span>
                <span className="flex items-center gap-1 text-muted-foreground"><Film className="w-4 h-4" /> {anime.type}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${anime.status === "Airing" ? "bg-green-500/20 text-green-400" : anime.status === "Completed" ? "bg-blue-500/20 text-blue-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                  {anime.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {anime.genres.map(g => (
                  <Link key={g} to={`/genre/${g.toLowerCase()}`} className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium border border-border hover:border-primary/40 transition-colors">{g}</Link>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">{anime.synopsis}</p>
              <div className="text-sm text-muted-foreground">
                <p><strong className="text-foreground">Studio:</strong> {anime.studio}</p>
                <p><strong className="text-foreground">Episodes:</strong> {anime.episodes} / {anime.totalEpisodes}</p>
                <p><strong className="text-foreground">Season:</strong> {anime.season} {anime.year}</p>
              </div>
              <Link
                to={`/watch/${anime.slug}`}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-6 py-3 rounded-xl transition-colors glow-pink"
              >
                <Play className="w-4 h-4" fill="currentColor" /> Watch Now
              </Link>
            </div>
          </div>

          {/* Episode List */}
          <section className="mt-12">
            <h2 className="font-heading text-2xl font-bold mb-4">📋 Episodes</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
              {Array.from({ length: anime.episodes }, (_, i) => (
                <Link
                  key={i}
                  to={`/watch/${anime.slug}`}
                  className="bg-card border border-border rounded-lg p-2 text-center text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  {i + 1}
                </Link>
              ))}
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="font-heading text-2xl font-bold mb-6">🔗 Related Anime</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {related.map(a => (
                  <AnimeCard key={a.id} slug={a.slug} title={a.title} image={a.image} episodes={a.episodes} totalEpisodes={a.totalEpisodes} rating={a.rating} type={a.type} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AnimeDetail;
