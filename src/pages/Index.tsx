import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SeoContentSection from "@/components/SeoContentSection";
import TopAiringSection from "@/components/TopAiringSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HiAnime",
  url: "https://hianime.to",
  description: "Watch anime online free in HD. HiAnime is the best free anime streaming site with subbed and dubbed anime, no registration required.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://hianime.to/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const Index = () => (
  <>
    <Helmet>
      <title>HiAnime - Watch Anime Online Free | Best Anime Streaming Site</title>
      <meta name="description" content="HiAnime is the best free anime streaming site. Watch anime online in HD with English sub and dub. Stream Solo Leveling, One Piece, Sakamoto Days and more." />
      <meta name="keywords" content="hianime, watch anime online, free anime streaming, anime online free, subbed anime, dubbed anime, anime HD, anime site" />
      <link rel="canonical" href="https://hianime.to" />
      <meta property="og:title" content="HiAnime - Watch Anime Online Free" />
      <meta property="og:description" content="Best free anime streaming site. Watch subbed and dubbed anime in HD quality." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hianime.to" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="HiAnime - Watch Anime Online Free" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    <Navbar />
    <main>
      <HeroSection />
      <SeoContentSection />
      <TopAiringSection />
    </main>
    <Footer />
  </>
);

export default Index;
