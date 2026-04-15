export interface Anime {
  id: string;
  slug: string;
  title: string;
  image: string;
  cover?: string;
  episodes: number;
  totalEpisodes: number;
  rating: number;
  type: "TV" | "Movie" | "OVA" | "ONA";
  status: "Airing" | "Completed" | "Upcoming";
  genres: string[];
  year: number;
  season: string;
  studio: string;
  synopsis: string;
  duration: string;
}

export const genres = [
  "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror",
  "Isekai", "Mecha", "Mystery", "Romance", "Sci-Fi", "Slice of Life",
  "Sports", "Supernatural", "Thriller",
];

export const animeList: Anime[] = [
  {
    id: "1", slug: "shadow-monarch-rising",
    title: "Shadow Monarch Rising", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=560&fit=crop",
    episodes: 12, totalEpisodes: 24, rating: 9.1, type: "TV", status: "Airing",
    genres: ["Action", "Fantasy", "Adventure"], year: 2026, season: "Winter",
    studio: "Apex Animation", synopsis: "A young warrior discovers a hidden power within shadows, allowing him to summon and command an army of darkness. As he rises through the ranks of hunters, he must face threats both human and otherworldly.", duration: "24 min"
  },
  {
    id: "2", slug: "ocean-voyage-chronicles",
    title: "Ocean Voyage Chronicles", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=560&fit=crop",
    episodes: 1100, totalEpisodes: 1200, rating: 8.8, type: "TV", status: "Airing",
    genres: ["Action", "Adventure", "Comedy"], year: 2020, season: "Fall",
    studio: "Toho Animation", synopsis: "A legendary pirate crew sails across uncharted seas in search of the ultimate treasure. Along the way, they encounter rival pirates, ancient civilizations, and world-shaking conspiracies.", duration: "24 min"
  },
  {
    id: "3", slug: "retired-assassin-days",
    title: "Retired Assassin Days", image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=560&fit=crop",
    episodes: 11, totalEpisodes: 24, rating: 8.6, type: "TV", status: "Airing",
    genres: ["Action", "Comedy"], year: 2026, season: "Winter",
    studio: "TMS Entertainment", synopsis: "The world's deadliest hitman has retired to run a convenience store with his family. But when his past catches up, he must protect his loved ones using skills he thought he'd left behind.", duration: "24 min"
  },
  {
    id: "4", slug: "palace-apothecary-tales",
    title: "Palace Apothecary Tales", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=560&fit=crop",
    episodes: 25, totalEpisodes: 25, rating: 8.7, type: "TV", status: "Completed",
    genres: ["Mystery", "Drama", "Romance"], year: 2026, season: "Winter",
    studio: "OLM Studios", synopsis: "A brilliant young pharmacist is drawn into the imperial court's web of intrigue. Using her knowledge of medicine and poisons, she solves mysteries while navigating palace politics.", duration: "24 min"
  },
  {
    id: "5", slug: "striker-lockdown",
    title: "Striker Lockdown", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=560&fit=crop",
    episodes: 14, totalEpisodes: 24, rating: 8.4, type: "TV", status: "Airing",
    genres: ["Sports", "Action"], year: 2026, season: "Winter",
    studio: "8bit Studio", synopsis: "Three hundred elite forwards are locked in a facility with one goal: become the world's greatest striker. Only the most ruthless and skilled player will survive this intense football program.", duration: "24 min"
  },
  {
    id: "6", slug: "eternal-mage-journey",
    title: "Eternal Mage Journey", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=560&fit=crop",
    episodes: 28, totalEpisodes: 28, rating: 9.2, type: "TV", status: "Completed",
    genres: ["Fantasy", "Adventure", "Drama"], year: 2025, season: "Fall",
    studio: "Madhouse", synopsis: "An immortal elven mage embarks on a journey to understand the meaning of human connection, decades after her companions have passed away. A poignant tale of memory, loss, and growth.", duration: "24 min"
  },
  {
    id: "7", slug: "dragon-rebirth-saga",
    title: "Dragon Rebirth Saga", image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=560&fit=crop",
    episodes: 20, totalEpisodes: 20, rating: 8.2, type: "TV", status: "Completed",
    genres: ["Action", "Adventure", "Fantasy"], year: 2025, season: "Fall",
    studio: "Toei Animation", synopsis: "A legendary warrior is reborn as a child and must rediscover his powers while navigating a world that has changed drastically since his original era.", duration: "24 min"
  },
  {
    id: "8", slug: "virtual-frontier-quest",
    title: "Virtual Frontier Quest", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=560&fit=crop",
    episodes: 13, totalEpisodes: 25, rating: 8.3, type: "TV", status: "Airing",
    genres: ["Action", "Fantasy", "Comedy"], year: 2026, season: "Winter",
    studio: "C2C Studio", synopsis: "A gamer discovers that the virtual world he plays in has real consequences. He must master both the game and reality to survive increasingly dangerous quests.", duration: "24 min"
  },
  {
    id: "9", slug: "spirit-detective-files",
    title: "Spirit Detective Files", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=560&fit=crop",
    episodes: 24, totalEpisodes: 24, rating: 8.5, type: "TV", status: "Completed",
    genres: ["Supernatural", "Action", "Mystery"], year: 2025, season: "Summer",
    studio: "Bones Studio", synopsis: "A delinquent teenager is resurrected after a selfless act and recruited as a spirit detective, investigating supernatural crimes that threaten the balance between the human and spirit worlds.", duration: "24 min"
  },
  {
    id: "10", slug: "cursed-sorcerer-battles",
    title: "Cursed Sorcerer Battles", image: "https://images.unsplash.com/photo-1533709752211-118fcaf03312?w=400&h=560&fit=crop",
    episodes: 23, totalEpisodes: 23, rating: 8.9, type: "TV", status: "Completed",
    genres: ["Action", "Supernatural", "Horror"], year: 2025, season: "Fall",
    studio: "MAPPA", synopsis: "Sorcerers battle malevolent cursed spirits born from humanity's negative emotions. A young man who swallows a powerful cursed artifact finds himself drawn into a deadly war between sorcerers.", duration: "24 min"
  },
  {
    id: "11", slug: "galactic-cowboy-bebop",
    title: "Galactic Cowboy Bebop", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=560&fit=crop",
    episodes: 26, totalEpisodes: 26, rating: 9.0, type: "TV", status: "Completed",
    genres: ["Sci-Fi", "Action", "Drama"], year: 2024, season: "Spring",
    studio: "Sunrise", synopsis: "A ragtag crew of bounty hunters travels across the solar system in their ship, chasing criminals and confronting their pasts in this genre-defining space western.", duration: "24 min"
  },
  {
    id: "12", slug: "ninja-academy-chronicles",
    title: "Ninja Academy Chronicles", image: "https://images.unsplash.com/photo-1528164344885-1d40b641e6e0?w=400&h=560&fit=crop",
    episodes: 500, totalEpisodes: 500, rating: 8.3, type: "TV", status: "Completed",
    genres: ["Action", "Adventure", "Comedy"], year: 2020, season: "Fall",
    studio: "Pierrot", synopsis: "A young ninja with a dream of becoming the strongest leader in his village must overcome prejudice, powerful enemies, and his own inner demons.", duration: "24 min"
  },
  {
    id: "13", slug: "midnight-phantom-thief",
    title: "Midnight Phantom Thief", image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=400&h=560&fit=crop",
    episodes: 0, totalEpisodes: 12, rating: 0, type: "TV", status: "Upcoming",
    genres: ["Mystery", "Thriller", "Action"], year: 2026, season: "Spring",
    studio: "CloverWorks", synopsis: "A master thief targets the corrupt elite of a dystopian city, leaving cryptic clues for the detective pursuing them. A cat-and-mouse thriller with stunning heist sequences.", duration: "24 min"
  },
  {
    id: "14", slug: "love-under-cherry-blossoms",
    title: "Love Under Cherry Blossoms", image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=560&fit=crop",
    episodes: 12, totalEpisodes: 12, rating: 8.1, type: "TV", status: "Completed",
    genres: ["Romance", "Drama", "Slice of Life"], year: 2026, season: "Winter",
    studio: "Kyoto Animation", synopsis: "Two high school students from very different worlds find their lives intertwined beneath the cherry blossom trees. A heartwarming story about first love, family, and finding where you belong.", duration: "24 min"
  },
  {
    id: "15", slug: "mecha-guardian-force",
    title: "Mecha Guardian Force", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=560&fit=crop",
    episodes: 6, totalEpisodes: 24, rating: 8.0, type: "TV", status: "Airing",
    genres: ["Mecha", "Sci-Fi", "Action"], year: 2026, season: "Spring",
    studio: "Trigger", synopsis: "Humanity's last line of defense against alien invaders lies in colossal mecha piloted by elite teenagers. But the machines harbor a dark secret that could doom them all.", duration: "24 min"
  },
  {
    id: "16", slug: "demon-slayer-academy",
    title: "Demon Slayer Academy", image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=400&h=560&fit=crop",
    episodes: 44, totalEpisodes: 44, rating: 8.8, type: "TV", status: "Completed",
    genres: ["Action", "Supernatural", "Adventure"], year: 2025, season: "Spring",
    studio: "ufotable", synopsis: "A young swordsman joins an ancient order dedicated to hunting demons after his family is slaughtered. With breathtaking animation and emotional depth, he fights to save his cursed sister.", duration: "24 min"
  },
];

export const getAnimeBySlug = (slug: string) => animeList.find(a => a.slug === slug);
export const getAnimeByGenre = (genre: string) => animeList.filter(a => a.genres.includes(genre));
export const getAiringAnime = () => animeList.filter(a => a.status === "Airing");
export const getCompletedAnime = () => animeList.filter(a => a.status === "Completed");
export const getTopRated = () => [...animeList].filter(a => a.rating > 0).sort((a, b) => b.rating - a.rating);
export const getLatestAnime = () => [...animeList].filter(a => a.year >= 2026);
export const searchAnime = (q: string) => {
  const lower = q.toLowerCase();
  return animeList.filter(a => a.title.toLowerCase().includes(lower) || a.genres.some(g => g.toLowerCase().includes(lower)));
};
