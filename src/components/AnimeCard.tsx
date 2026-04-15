import { Play } from "lucide-react";

interface AnimeCardProps {
  title: string;
  image: string;
  episodes: string;
  type: string;
}

const AnimeCard = ({ title, image, episodes, type }: AnimeCardProps) => (
  <article className="group card-hover rounded-xl overflow-hidden bg-card border border-border">
    <div className="relative aspect-[3/4] overflow-hidden">
      <img
        src={image}
        alt={`Watch ${title} online free on HiAnime`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        width={300}
        height={400}
      />
      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="bg-primary rounded-full p-3">
          <Play className="w-5 h-5 text-primary-foreground" fill="currentColor" />
        </div>
      </div>
      <span className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded">
        {type}
      </span>
    </div>
    <div className="p-3">
      <h3 className="font-heading font-semibold text-sm truncate">{title}</h3>
      <p className="text-xs text-muted-foreground mt-1">{episodes}</p>
    </div>
  </article>
);

export default AnimeCard;
