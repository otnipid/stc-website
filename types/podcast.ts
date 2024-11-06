export interface Episode {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  imageUrl: string;
  audioUrl: string;
  isFeatured?: boolean;
}

export interface Host {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    twitter?: string;
    youtube?: string;
    email?: string;
  };
}

export interface PodcastPlatform {
  name: string;
  icon: string;
  url: string;
  description: string;
}