import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "/genre/action" },
  { label: "Most Popular", href: "/genre/adventure" },
  { label: "Genres", href: "/genre/action" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
      setMobileOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-nav/95 backdrop-blur-md border-b border-border" aria-label="Main navigation">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-2xl font-bold tracking-tight">
          Hi <span className="text-primary">Anime</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2">
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search anime..."
            className="bg-card/80 border border-border rounded-lg px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 w-48"
            aria-label="Search anime"
          />
          <button type="submit" aria-label="Search" className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <Search className="w-4 h-4 text-muted-foreground" />
          </button>
        </form>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-nav p-4 space-y-4">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search anime..."
              className="flex-1 bg-card/80 border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Search anime"
            />
            <button type="submit" className="p-2 bg-primary rounded-lg"><Search className="w-4 h-4 text-primary-foreground" /></button>
          </form>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href} onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
