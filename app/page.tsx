import { Hero } from '@/components/sections/hero';
import { FeaturedEpisodes } from '@/components/sections/featured-episodes';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <Hero />
      <FeaturedEpisodes />
    </div>
  );
}