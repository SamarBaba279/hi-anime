import { Link } from "react-router-dom";

const SeoContentSection = () => (
  <section className="container py-12 md:py-16 space-y-12">
    <div className="space-y-4">
      <h2 className="font-heading text-2xl md:text-3xl font-bold">
        <span className="text-gradient-pink">Hi Anime</span> – Watch Anime Online Free in HD
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl">
        Hi Anime is the ultimate destination for anime fans worldwide. Stream thousands of anime series and movies online for free in HD quality with both English subtitles and dubbed versions. Whether you love action, romance, comedy, or thriller anime, Hi Anime has it all — no registration, no downloads, just instant streaming across all your devices.
      </p>
    </div>

    <div className="space-y-4">
      <h2 className="font-heading text-xl md:text-2xl font-bold">
        What is <span className="text-primary">Hi Anime</span>?
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl">
        Hi Anime is a popular free anime streaming platform providing a massive library of anime content including the latest seasonal anime, classic series, OVAs, ONAs, and anime movies. It features a clean interface, fast loading speeds, and a regularly updated catalog. Watch subbed and dubbed anime in 720p and 1080p quality without any interruptions.
      </p>
    </div>

    <div className="space-y-4">
      <h2 className="font-heading text-xl md:text-2xl font-bold">
        Is <span className="text-primary">Hi Anime</span> Safe?
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl">
        Yes, Hi Anime is designed with user safety in mind. The platform uses secure connections and does not require personal information or registration to watch anime. It provides a clean, ad-friendly browsing experience with no malicious pop-ups or redirects.
      </p>
    </div>

    <div className="space-y-4">
      <h2 className="font-heading text-xl md:text-2xl font-bold">
        How to Watch Anime on <span className="text-primary">Hi Anime</span>
      </h2>
      <ol className="text-muted-foreground leading-relaxed max-w-3xl space-y-2 list-decimal list-inside">
        <li>Visit <Link to="/" className="text-primary hover:underline">Hi Anime</Link> on your browser</li>
        <li>Search for your favorite anime or <Link to="/genre/action" className="text-primary hover:underline">browse by genre</Link></li>
        <li>Select an episode and choose sub or dub</li>
        <li>Click play and enjoy HD anime streaming for free</li>
      </ol>
    </div>

    <div className="space-y-4">
      <h2 className="font-heading text-xl md:text-2xl font-bold">
        Browse Anime by <span className="text-primary">Genre</span>
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl">
        Hi Anime offers anime across every genre. Browse <Link to="/genre/action" className="text-primary hover:underline">action anime</Link>, <Link to="/genre/romance" className="text-primary hover:underline">romance anime</Link>, <Link to="/genre/comedy" className="text-primary hover:underline">comedy anime</Link>, <Link to="/genre/fantasy" className="text-primary hover:underline">fantasy anime</Link>, and much more.
      </p>
    </div>

    <div className="space-y-4">
      <h2 className="font-heading text-xl md:text-2xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl space-y-4">
        {[
          { q: "Is Hi Anime free to use?", a: "Yes, Hi Anime is completely free. Watch all anime without any subscription or hidden charges." },
          { q: "Do I need an account?", a: "No registration required. Start watching anime instantly on Hi Anime." },
          { q: "Does Hi Anime have dubbed anime?", a: "Yes, Hi Anime provides both subbed and dubbed anime in HD quality." },
          { q: "Can I watch on my phone?", a: "Absolutely. Hi Anime is fully responsive and works perfectly on all devices." },
          { q: "How often are new episodes added?", a: "Hi Anime is updated daily with the latest episodes, typically within hours of airing." },
        ].map((faq) => (
          <details key={faq.q} className="group bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors">
            <summary className="font-heading font-semibold text-sm cursor-pointer text-foreground group-open:text-primary transition-colors">
              {faq.q}
            </summary>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default SeoContentSection;
