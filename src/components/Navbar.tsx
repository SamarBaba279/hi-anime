import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Movies", href: "#movies" },
  { label: "TV Series", href: "#tv-series" },
  { label: "Most Popular", href: "#popular" },
  { label: "Top Airing", href: "#top-airing" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-nav/95 backdrop-blur-md border-b border-border" aria-label="Main navigation">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="font-heading text-2xl font-bold tracking-tight">
          h<span className="text-primary">!</span>anime
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button aria-label="Search anime" className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <Search className="w-5 h-5 text-muted-foreground" />
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-nav p-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
