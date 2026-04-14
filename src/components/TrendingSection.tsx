import AnimeCard from "./AnimeCard";

const trendingAnime = [
  { title: "Solo Leveling Season 2", image: "https://cdn.myanimelist.net/images/anime/1908/142367.jpg", episodes: "EP 12 / 12", type: "TV" },
  { title: "One Piece", image: "https://cdn.myanimelist.net/images/anime/1244/138851.jpg", episodes: "EP 1122+", type: "TV" },
  { title: "Sakamoto Days", image: "https://cdn.myanimelist.net/images/anime/1758/144486.jpg", episodes: "EP 11 / 11", type: "TV" },
  { title: "Blue Lock Season 2", image: "https://cdn.myanimelist.net/images/anime/1100/143583.jpg", episodes: "EP 14 / 14", type: "TV" },
  { title: "The Apothecary Diaries S2", image: "https://cdn.myanimelist.net/images/anime/1491/144632.jpg", episodes: "EP 25 / 25", type: "TV" },
  { title: "Frieren: Beyond Journey's End", image: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg", episodes: "EP 28 / 28", type: "TV" },
  { title: "Dragon Ball Daima", image: "https://cdn.myanimelist.net/images/anime/1075/143650.jpg", episodes: "EP 20 / 20", type: "TV" },
  { title: "Shangri-La Frontier S2", image: "https://cdn.myanimelist.net/images/anime/1206/144782.jpg", episodes: "EP 13 / 25", type: "TV" },
];

const TrendingSection = () => (
  <section id="popular" className="container py-12 md:py-16" aria-labelledby="trending-heading">
    <h2 id="trending-heading" className="font-heading text-2xl md:text-3xl font-bold mb-8">
      🔥 <span className="text-gradient-pink">Trending</span> Anime
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {trendingAnime.map((anime) => (
        <AnimeCard key={anime.title} {...anime} />
      ))}
    </div>
  </section>
);

export default TrendingSection;
