import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAnimeBySlug } from "@/data/animeData";

const DOMAIN = "https://hi-anime.lovable.app";

const WatchPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const anime = getAnimeBySlug(slug || "");

  if (!anime) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center"><h1 className="text-3xl font-bold mb-4">Anime Not Found</h1><Link to="/" className="text-primary hover:underline">Go Home</Link></div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{`Watch ${anime.title} Episode 1 Online - Hi Anime`}</title>
        <meta name="description" content={`Watch ${anime.title} Episode 1 online free in HD on Hi Anime. Stream with English sub and dub.`} />
        <link rel="canonical" href={`${DOMAIN}/watch/${anime.slug}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <main className="container py-6">
        <nav className="text-xs text-muted-foreground mb-4 flex items-center gap-1" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link> <span>/</span>
          <Link to={`/anime/${anime.slug}`} className="hover:text-primary">{anime.title}</Link> <span>/</span>
          <span className="text-foreground">Episode 1</span>
        </nav>

        <h1 className="font-heading text-2xl md:text-3xl font-bold mb-4">{anime.title} - Episode 1</h1>

        {/* Video Player Placeholder */}
        <div className="relative aspect-video bg-card border border-border rounded-xl overflow-hidden mb-6 flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p className="text-muted-foreground text-sm">Video Player</p>
            <p className="text-xs text-muted-foreground">Streaming in HD quality on Hi Anime</p>
          </div>
        </div>

        {/* Episode Controls */}
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors" disabled>
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <span className="text-sm font-medium">Episode 1 / {anime.totalEpisodes}</span>
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Episode List */}
        <section>
          <h2 className="font-heading text-xl font-bold mb-4">All Episodes</h2>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
            {Array.from({ length: anime.episodes || anime.totalEpisodes }, (_, i) => (
              <button
                key={i}
                className={`rounded-lg p-2 text-center text-sm font-medium border transition-colors ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </section>

        {/* Anime Info */}
        <section className="mt-8 bg-card border border-border rounded-xl p-6">
          <h2 className="font-heading text-xl font-bold mb-3">{anime.title}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">{anime.synopsis}</p>
          <div className="mt-4">
            <Link to={`/anime/${anime.slug}`} className="text-primary hover:underline text-sm">← View full anime details</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WatchPage;
