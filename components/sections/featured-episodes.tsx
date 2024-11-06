import { episodes } from '@/lib/podcast-data';
import { EpisodeCard } from '@/components/ui/episode-card';

export function FeaturedEpisodes() {
  const featuredEpisodes = episodes.filter(episode => episode.isFeatured);
  const recentEpisodes = episodes.filter(episode => !episode.isFeatured).slice(0, 2);

  return (
    <section className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter mb-8">Featured Episodes</h2>
      <div className="space-y-8">
        {featuredEpisodes.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} variant="featured" />
        ))}
        <div className="grid gap-6 md:grid-cols-2">
          {recentEpisodes.map(episode => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </section>
  );
}