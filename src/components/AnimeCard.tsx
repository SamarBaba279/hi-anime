import { Play, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface AnimeCardProps {
  slug: string;
  title: string;
  image: string;
  episodes: number;
  totalEpisodes: number;
  rating: number;
  type: string;
}

const AnimeCard = ({ slug, title, image, episodes, totalEpisodes, rating, type }: AnimeCardProps) => (
  <article className="group card-hover rounded-xl overflow-hidden bg-card border border-border">
    <Link to={`/anime/${slug}`} aria-label={`Watch ${title} anime streaming HD`}>
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={`Watch ${title} online - anime streaming HD on Hi Anime`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          width={300}
          height={400}
        />
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-primary rounded-full p-3 scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-5 h-5 text-primary-foreground" fill="currentColor" />
          </div>
        </div>
        <span className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded">
          {type}
        </span>
        {rating > 0 && (
          <span className="absolute top-2 right-2 bg-background/80 backdrop-blur text-foreground text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-0.5">
            <Star className="w-3 h-3 text-yellow-400" fill="currentColor" /> {rating}
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-heading font-semibold text-sm truncate group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1">EP {episodes} / {totalEpisodes}</p>
      </div>
    </Link>
  </article>
);

export default AnimeCard;
