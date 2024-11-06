import { platforms } from '@/lib/podcast-data';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function SubscribePage() {
  return (
    <div className="container py-8 px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tighter mb-4">Subscribe to Tech Insights</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Listen to Tech Insights on your favorite platform. Click on any of the options
        below to subscribe and never miss an episode.
      </p>
      
      <div className="grid gap-6 md:grid-cols-3">
        {platforms.map((platform) => (
          <Card key={platform.name} className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={platform.icon}
                  alt={platform.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
              <p className="text-muted-foreground mb-4">{platform.description}</p>
              <Button asChild>
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                  Listen Here
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}