import { Button } from '@/components/ui/button';
import { Mic } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Tech Insights Podcast
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Your weekly dose of tech insights, development trends, and expert interviews.
            Stay updated with the latest in technology.
          </p>
        </div>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/episodes">
              <Mic className="mr-2 h-4 w-4" />
              Latest Episodes
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/subscribe">
              Subscribe Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}