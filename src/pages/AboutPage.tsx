import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DOMAIN = "https://hi-anime.lovable.app";

const AboutPage = () => (
  <>
    <Helmet>
      <title>About Hi Anime - Best Free Anime Streaming Site</title>
      <meta name="description" content="Learn about Hi Anime, the best free anime streaming platform. Watch anime online in HD with English sub and dub, no registration required." />
      <link rel="canonical" href={`${DOMAIN}/about`} />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <Navbar />
    <main className="container py-12 max-w-3xl">
      <nav className="text-xs text-muted-foreground mb-6 flex items-center gap-1" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-primary">Home</Link> <span>/</span>
        <span className="text-foreground">About</span>
      </nav>

      <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
        About <span className="text-gradient-pink">Hi Anime</span>
      </h1>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Hi Anime is a premier anime streaming platform designed for fans who want to watch their favorite anime online for free. Our mission is to provide the best anime watching experience with HD quality streaming, both subbed and dubbed versions, and a massive library of anime content.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
        <p>
          We believe everyone deserves access to great anime content. Hi Anime was built to make anime accessible to fans worldwide without any barriers — no subscriptions, no registration, just pure anime entertainment in stunning HD quality.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong className="text-foreground">Massive Library</strong> — Thousands of anime series and movies across every genre imaginable.</li>
          <li><strong className="text-foreground">HD Quality</strong> — Stream anime in 720p and 1080p for crystal-clear viewing.</li>
          <li><strong className="text-foreground">Sub & Dub</strong> — Watch anime with English subtitles or dubbed audio.</li>
          <li><strong className="text-foreground">Daily Updates</strong> — New episodes added within hours of airing in Japan.</li>
          <li><strong className="text-foreground">Mobile Friendly</strong> — Fully responsive design that works on any device.</li>
          <li><strong className="text-foreground">No Ads</strong> — Clean, distraction-free anime streaming experience.</li>
        </ul>

        <h2 className="font-heading text-2xl font-bold text-foreground">Why Choose Hi Anime?</h2>
        <p>
          Hi Anime stands out from other anime streaming sites by offering a superior user experience. Our clean, modern interface makes it easy to find and watch anime. We update our library daily with the latest episodes and organize content by genre, popularity, and season for easy browsing.
        </p>

        <div className="pt-4">
          <Link to="/contact" className="text-primary hover:underline font-medium">Have questions? Contact us →</Link>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default AboutPage;
