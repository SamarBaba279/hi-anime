const Footer = () => (
  <footer className="border-t border-border bg-card/50 mt-12">
    <div className="container py-10 md:py-14">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-heading text-xl font-bold mb-3">
            h<span className="text-primary">!</span>anime
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            HiAnime is the best site to watch anime online for free. Stream subbed and dubbed anime in HD quality with no registration required.
          </p>
        </div>
        <div>
          <h3 className="font-heading font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#movies" className="hover:text-primary transition-colors">Movies</a></li>
            <li><a href="#tv-series" className="hover:text-primary transition-colors">TV Series</a></li>
            <li><a href="#popular" className="hover:text-primary transition-colors">Most Popular</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-semibold mb-3">About HiAnime</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Watch free anime online in ultra HD quality. HiAnime offers the largest collection of subbed and dubbed anime with fast streaming and no ads.
          </p>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} HiAnime. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
