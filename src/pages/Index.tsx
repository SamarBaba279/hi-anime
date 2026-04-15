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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is HiAnime free to use?", acceptedAnswer: { "@type": "Answer", text: "Yes, HiAnime is completely free. You can watch all anime on HiAnime without any subscription or hidden charges." } },
    { "@type": "Question", name: "Do I need to create an account on HiAnime?", acceptedAnswer: { "@type": "Answer", text: "No, HiAnime does not require registration. You can start watching anime on HiAnime instantly without creating an account." } },
    { "@type": "Question", name: "Does HiAnime have dubbed anime?", acceptedAnswer: { "@type": "Answer", text: "Yes, HiAnime provides both subbed and dubbed anime. You can switch between sub and dub on most titles available on HiAnime." } },
    { "@type": "Question", name: "Can I watch anime on HiAnime on my phone?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. HiAnime is fully responsive and works perfectly on mobile phones, tablets, and desktop computers." } },
    { "@type": "Question", name: "How often is HiAnime updated with new episodes?", acceptedAnswer: { "@type": "Answer", text: "HiAnime is updated daily with the latest anime episodes, typically within hours of their original broadcast in Japan." } },
  ],
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
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
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
