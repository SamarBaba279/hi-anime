import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Hi Anime</title>
        <meta name="description" content="The page you're looking for doesn't exist. Browse anime on Hi Anime instead." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Navbar />
      <main className="container flex min-h-[60vh] items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="font-heading text-8xl font-extrabold text-primary">404</h1>
          <h2 className="font-heading text-2xl font-bold">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Oops! This page seems to have vanished into another dimension. Let's get you back to watching anime.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-6 py-3 rounded-xl transition-colors glow-pink">
              Go Home
            </Link>
            <Link to="/search?q=" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-heading font-semibold px-6 py-3 rounded-xl transition-colors">
              Search Anime
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
