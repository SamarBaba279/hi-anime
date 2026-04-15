import { Link } from "react-router-dom";
import { genres } from "@/data/animeData";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 mt-12">
    <div className="container py-10 md:py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="font-heading text-xl font-bold mb-3 block">
            Hi <span className="text-primary">Anime</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hi Anime is your destination to watch anime online in HD quality. Stream subbed and dubbed anime for free with no registration required.
          </p>
        </div>
        <div>
          <h3 className="font-heading font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/search?q=" className="hover:text-primary transition-colors">Search</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-semibold mb-3">Top Genres</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {genres.slice(0, 6).map(g => (
              <li key={g}><Link to={`/genre/${g.toLowerCase()}`} className="hover:text-primary transition-colors">{g}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-semibold mb-3">More Genres</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {genres.slice(6, 12).map(g => (
              <li key={g}><Link to={`/genre/${g.toLowerCase()}`} className="hover:text-primary transition-colors">{g}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hi Anime. All rights reserved. | <Link to="/about" className="hover:text-primary">About</Link> | <Link to="/contact" className="hover:text-primary">Contact</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
