import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AnimeGridSection from "@/components/AnimeGridSection";
import GenresSection from "@/components/GenresSection";
import SeoContentSection from "@/components/SeoContentSection";
import Footer from "@/components/Footer";
import { getAiringAnime, getTopRated, getLatestAnime, getCompletedAnime } from "@/data/animeData";

const DOMAIN = "https://hi-anime.lovable.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hi Anime",
  url: DOMAIN,
  description: "Watch anime online free in HD. Hi Anime is the best free anime streaming site with subbed and dubbed anime.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${DOMAIN}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Hi Anime free to use?", acceptedAnswer: { "@type": "Answer", text: "Yes, Hi Anime is completely free. Watch all anime without any subscription or hidden charges." } },
    { "@type": "Question", name: "Do I need an account on Hi Anime?", acceptedAnswer: { "@type": "Answer", text: "No registration required. Start watching anime instantly on Hi Anime." } },
    { "@type": "Question", name: "Does Hi Anime have dubbed anime?", acceptedAnswer: { "@type": "Answer", text: "Yes, Hi Anime provides both subbed and dubbed anime in HD quality." } },
    { "@type": "Question", name: "Can I watch on mobile?", acceptedAnswer: { "@type": "Answer", text: "Hi Anime is fully responsive and works on all devices." } },
  ],
};

const Index = () => (
  <>
    <Helmet>
      <title>Hi Anime - Watch Anime Online Free | Best Anime Streaming Site</title>
      <meta name="description" content="Hi Anime is the best free anime streaming site. Watch anime online in HD with English sub and dub. Stream top trending anime for free." />
      <meta name="keywords" content="hi anime, watch anime online, free anime streaming, anime online free, subbed anime, dubbed anime, anime HD" />
      <link rel="canonical" href={DOMAIN} />
      <meta property="og:title" content="Hi Anime - Watch Anime Online Free" />
      <meta property="og:description" content="Best free anime streaming site. Watch subbed and dubbed anime in HD quality." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={DOMAIN} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Hi Anime - Watch Anime Online Free" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>

    <Navbar />
    <main>
      <HeroSection />
      <AnimeGridSection id="latest" title="Latest Episodes" emoji="🆕" anime={getLatestAnime().slice(0, 6)} />
      <AnimeGridSection id="popular" title="Most Popular" emoji="🔥" anime={getTopRated().slice(0, 6)} />
      <AnimeGridSection id="airing" title="Currently Airing" emoji="📺" anime={getAiringAnime().slice(0, 6)} />
      <AnimeGridSection id="top-rated" title="Top Rated" emoji="⭐" anime={getTopRated().slice(0, 6)} />
      <GenresSection />
      <AnimeGridSection id="completed" title="Completed Series" emoji="✅" anime={getCompletedAnime().slice(0, 6)} />
      <SeoContentSection />
    </main>
    <Footer />
  </>
);

export default Index;
