import { episodes } from '@/lib/podcast-data';
import { EpisodeCard } from '@/components/ui/episode-card';

export default function EpisodesPage() {
  return (
    <div className="container py-8 px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tighter mb-8">All Episodes</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {episodes.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
}