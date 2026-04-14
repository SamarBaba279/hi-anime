const topAiring = [
  { rank: 1, title: "Solo Leveling Season 2: Arise from the Shadow", episodes: "12", score: "8.9" },
  { rank: 2, title: "One Piece", episodes: "1122+", score: "8.7" },
  { rank: 3, title: "Sakamoto Days", episodes: "11", score: "8.5" },
  { rank: 4, title: "The Apothecary Diaries Season 2", episodes: "25", score: "8.6" },
  { rank: 5, title: "Blue Lock Season 2", episodes: "14", score: "8.3" },
  { rank: 6, title: "Shangri-La Frontier Season 2", episodes: "25", score: "8.2" },
  { rank: 7, title: "Dragon Ball Daima", episodes: "20", score: "8.1" },
  { rank: 8, title: "Frieren: Beyond Journey's End", episodes: "28", score: "9.1" },
];

const TopAiringSection = () => (
  <section id="top-airing" className="container py-12 md:py-16" aria-labelledby="top-airing-heading">
    <h2 id="top-airing-heading" className="font-heading text-2xl md:text-3xl font-bold mb-8">
      ⚡ Top <span className="text-gradient-pink">Airing</span>
    </h2>
    <div className="grid md:grid-cols-2 gap-3">
      {topAiring.map((anime) => (
        <a
          key={anime.rank}
          href="#"
          className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 card-hover group"
        >
          <span className="font-heading text-2xl font-extrabold text-primary/40 group-hover:text-primary transition-colors w-8 text-center">
            {anime.rank}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-semibold text-sm truncate">{anime.title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">EP {anime.episodes} · ⭐ {anime.score}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default TopAiringSection;
