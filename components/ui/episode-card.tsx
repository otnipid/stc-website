"use client";

import { Episode } from '@/types/podcast';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface EpisodeCardProps {
  episode: Episode;
  variant?: 'default' | 'featured';
}

export function EpisodeCard({ episode, variant = 'default' }: EpisodeCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <Card className={`overflow-hidden ${isFeatured ? 'md:grid md:grid-cols-2' : ''}`}>
      <div className="relative aspect-video md:aspect-square">
        <Image
          src={episode.imageUrl}
          alt={episode.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
          <span>{episode.date}</span>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{episode.duration}</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">{episode.title}</h3>
        <p className="text-muted-foreground mb-6">{episode.description}</p>
        <div className="flex gap-4">
          <Button>
            <Play className="h-4 w-4 mr-2" />
            Play Episode
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/episodes/${episode.id}`}>
              Show Notes
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}