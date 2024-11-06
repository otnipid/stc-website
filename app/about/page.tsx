import { hosts } from '@/lib/podcast-data';
import Image from 'next/image';
import { Twitter, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="container py-8 px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tighter mb-8">About Tech Insights</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        Tech Insights is your weekly guide to the latest developments in technology,
        software development, and digital innovation. Join us as we explore cutting-edge
        topics with industry experts.
      </p>
      
      <h2 className="text-2xl font-bold mb-8">Meet Your Hosts</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {hosts.map((host) => (
          <div key={host.name} className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src={host.imageUrl}
                alt={host.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">{host.name}</h3>
            <p className="text-muted-foreground mb-2">{host.role}</p>
            <p className="mb-4">{host.bio}</p>
            <div className="flex gap-4">
              {host.socialLinks.twitter && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={host.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {host.socialLinks.youtube && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={host.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {host.socialLinks.email && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={`mailto:${host.socialLinks.email}`}>
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}