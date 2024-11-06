import { Episode, Host, PodcastPlatform } from '@/types/podcast';

export const episodes: Episode[] = [
  {
    id: '1',
    title: 'The Future of AI Development',
    description: 'Exploring the latest trends and future predictions in artificial intelligence development.',
    date: 'Dec 1, 2023',
    duration: '45 min',
    imageUrl: '/episodes/ai-future.jpg',
    audioUrl: '/audio/ai-future.mp3',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Web Development in 2024',
    description: 'Discussing the most important web development trends and technologies for the coming year.',
    date: 'Nov 28, 2023',
    duration: '38 min',
    imageUrl: '/episodes/web-dev-2024.jpg',
    audioUrl: '/audio/web-dev-2024.mp3'
  },
  {
    id: '3',
    title: 'Cloud Computing Deep Dive',
    description: 'Understanding modern cloud architecture and best practices.',
    date: 'Nov 25, 2023',
    duration: '42 min',
    imageUrl: '/episodes/cloud-computing.jpg',
    audioUrl: '/audio/cloud-computing.mp3'
  }
];

export const hosts: Host[] = [
  {
    name: 'Sarah Johnson',
    role: 'Lead Host',
    bio: 'Tech enthusiast with 15 years of software development experience.',
    imageUrl: '/hosts/sarah.jpg',
    socialLinks: {
      twitter: 'https://twitter.com/sarahjtech',
      youtube: 'https://youtube.com/@sarahjtech',
      email: 'sarah@techinsights.com'
    }
  },
  {
    name: 'Mike Chen',
    role: 'Co-Host',
    bio: 'Cloud architect and DevOps specialist.',
    imageUrl: '/hosts/mike.jpg',
    socialLinks: {
      twitter: 'https://twitter.com/mikechendev',
      email: 'mike@techinsights.com'
    }
  }
];

export const platforms: PodcastPlatform[] = [
  {
    name: 'Spotify',
    icon: '/platforms/spotify.svg',
    url: 'https://spotify.com/techinsights',
    description: 'Listen on Spotify'
  },
  {
    name: 'Apple Podcasts',
    icon: '/platforms/apple-podcasts.svg',
    url: 'https://podcasts.apple.com/techinsights',
    description: 'Available on Apple Podcasts'
  },
  {
    name: 'Google Podcasts',
    icon: '/platforms/google-podcasts.svg',
    url: 'https://podcasts.google.com/techinsights',
    description: 'Find us on Google Podcasts'
  }
];