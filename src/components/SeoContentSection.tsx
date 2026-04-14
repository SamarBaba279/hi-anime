const SeoContentSection = () => (
  <section className="container py-12 md:py-16 space-y-12">
    <div className="space-y-4">
      <h2 className="font-heading text-2xl md:text-3xl font-bold">
        <span className="text-gradient-pink">HiAnime</span> – Watch Anime Online Free in HD
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl">
        HiAnime is the ultimate destination for anime fans worldwide. Stream thousands of anime series and movies online for free in HD quality with both English subtitles and dubbed versions. Whether you love action, romance, comedy, or thriller anime, HiAnime has it all — no registration, no downloads, just instant streaming. HiAnime offers a seamless experience across all devices including mobile, tablet, and desktop.
      </p>
    </div>

    <div className="space-y-4">
      <h2 className="font-heading text-xl md:text-2xl font-bold">
        What is <span className="text-primary">HiAnime</span>?
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl">
        HiAnime is one of the most popular free anime streaming websites on the internet. It provides a massive library of anime content including the latest seasonal anime, classic series, OVAs, ONAs, and anime movies. HiAnime stands out with its clean interface, fast loading speeds, and regularly updated catalog. Users can watch subbed and dubbed anime in 720p and 1080p quality without any interruptions. HiAnime is trusted by millions of anime lovers globally as their go-to anime streaming platform.
      </p>
    </div>

    <div className="space-y-4">
      <h2 className="font-heading text-xl md:text-2xl font-bold">
        Is <span className="text-primary">HiAnime</span> Safe?
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl">
        Yes, HiAnime is designed with user safety in mind. The site uses secure connections and does not require any personal information or registration to watch anime. HiAnime provides a clean, ad-friendly browsing experience with no malicious pop-ups or redirects. The platform is regularly maintained to ensure a safe and enjoyable anime watching experience for all users. HiAnime prioritizes user privacy and does not collect unnecessary data.
      </p>
    </div>

    <div className="space-y-4">
      <h2 className="font-heading text-xl md:text-2xl font-bold">
        Why Choose <span className="text-primary">HiAnime</span> Over Other Anime Sites?
      </h2>
      <ul className="text-muted-foreground leading-relaxed max-w-3xl space-y-2 list-disc list-inside">
        <li><strong className="text-foreground">Free Forever</strong> — Watch unlimited anime without paying a single cent on HiAnime.</li>
        <li><strong className="text-foreground">HD Quality</strong> — Stream anime in 720p and 1080p with no buffering on HiAnime.</li>
        <li><strong className="text-foreground">Sub & Dub</strong> — HiAnime offers both subbed and dubbed versions of every anime.</li>
        <li><strong className="text-foreground">No Registration</strong> — Start watching instantly on HiAnime, no sign-up needed.</li>
        <li><strong className="text-foreground">Huge Library</strong> — HiAnime hosts thousands of anime titles across all genres.</li>
        <li><strong className="text-foreground">Fast Updates</strong> — New episodes are available on HiAnime within hours of airing in Japan.</li>
        <li><strong className="text-foreground">Mobile Friendly</strong> — HiAnime works perfectly on all devices and screen sizes.</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h2 className="font-heading text-xl md:text-2xl font-bold">
        Popular Anime Genres on <span className="text-primary">HiAnime</span>
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl">
        HiAnime offers anime across every genre you can imagine. Browse action anime like Solo Leveling and Blue Lock, romance anime like My Happy Marriage, comedy anime like Spy x Family, fantasy anime like Frieren: Beyond Journey's End, and horror anime like Junji Ito Maniac. HiAnime also features sports anime, mecha anime, isekai anime, slice of life anime, and much more. Whatever your taste, HiAnime has the perfect anime for you.
      </p>
      <div className="flex flex-wrap gap-2 max-w-3xl">
        {["Action", "Romance", "Comedy", "Fantasy", "Horror", "Sci-Fi", "Sports", "Isekai", "Slice of Life", "Mecha", "Thriller", "Adventure", "Drama", "Supernatural"].map((genre) => (
          <span key={genre} className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium border border-border hover:border-primary/40 transition-colors cursor-pointer">
            {genre}
          </span>
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <h2 className="font-heading text-xl md:text-2xl font-bold">
        Frequently Asked Questions About <span className="text-primary">HiAnime</span>
      </h2>
      <div className="max-w-3xl space-y-4">
        {[
          { q: "Is HiAnime free to use?", a: "Yes, HiAnime is completely free. You can watch all anime on HiAnime without any subscription or hidden charges." },
          { q: "Do I need to create an account on HiAnime?", a: "No, HiAnime does not require registration. You can start watching anime on HiAnime instantly without creating an account." },
          { q: "Does HiAnime have dubbed anime?", a: "Yes, HiAnime provides both subbed and dubbed anime. You can switch between sub and dub on most titles available on HiAnime." },
          { q: "Can I watch anime on HiAnime on my phone?", a: "Absolutely. HiAnime is fully responsive and works perfectly on mobile phones, tablets, and desktop computers." },
          { q: "How often is HiAnime updated with new episodes?", a: "HiAnime is updated daily with the latest anime episodes, typically within hours of their original broadcast in Japan." },
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
