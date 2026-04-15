import AnimeCard from "./AnimeCard";
import type { Anime } from "@/data/animeData";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  emoji: string;
  anime: Anime[];
  viewAllLink?: string;
}

const AnimeGridSection = ({ id, title, emoji, anime, viewAllLink }: Props) => (
  <section id={id} className="container py-10 md:py-14" aria-labelledby={`${id}-heading`}>
    <div className="flex items-center justify-between mb-6">
      <h2 id={`${id}-heading`} className="font-heading text-2xl md:text-3xl font-bold">
        {emoji} <span className="text-gradient-pink">{title}</span>
      </h2>
      {viewAllLink && (
        <Link to={viewAllLink} className="text-sm text-primary hover:underline">View All →</Link>
      )}
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {anime.map(a => (
        <AnimeCard key={a.id} slug={a.slug} title={a.title} image={a.image} episodes={a.episodes} totalEpisodes={a.totalEpisodes} rating={a.rating} type={a.type} />
      ))}
    </div>
  </section>
);

export default AnimeGridSection;
