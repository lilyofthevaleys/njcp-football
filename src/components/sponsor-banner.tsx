"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Sponsor {
  id: string;
  name: string;
  logoSrc: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  url: string;
}

interface SponsorBannerProps {
  sponsors: Sponsor[];
  autoRotate?: boolean;
  rotationInterval?: number;
  className?: string;
}

export function SponsorBanner({ 
  sponsors, 
  autoRotate = true, 
  rotationInterval = 3000,
  className
}: SponsorBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    if (!autoRotate || sponsors.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % sponsors.length);
    }, rotationInterval);
    
    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, sponsors.length]);
  
  // Track impressions (in a real app, this would connect to analytics)
  const trackImpression = (sponsorId: string) => {
    console.log(`Sponsor impression tracked: ${sponsorId}`);
    // In production: send to analytics API
  };
  
  // Track clicks (in a real app, this would connect to analytics)
  const trackClick = (sponsorId: string) => {
    console.log(`Sponsor click tracked: ${sponsorId}`);
    // In production: send to analytics API
  };
  
  return (
    <div className={cn("bg-njcpBlack py-12", className)}>
      <div className="container mx-auto px-4">
        <h3 className="text-center text-2xl font-semibold mb-8 text-white">Our <span className="text-njcpGold">Sponsors</span></h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, index) => (
            <Link 
              href={sponsor.url} 
              key={sponsor.id}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-card block bg-white/5 border border-njcpGold/20 rounded-lg p-4 hover:bg-white/10 transition-all"
              onClick={() => trackClick(sponsor.id)}
              onMouseEnter={() => trackImpression(sponsor.id)}
            >
              <div className="relative h-20 flex items-center justify-center">
                <Image
                  src={sponsor.logoSrc}
                  alt={sponsor.name}
                  width={120}
                  height={80}
                  className="object-contain max-h-full"
                />
              </div>
              <div className="mt-3 text-center">
                <span className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  sponsor.tier === 'platinum' && "bg-gray-300 text-gray-800",
                  sponsor.tier === 'gold' && "bg-njcpGold/80 text-njcpBlack",
                  sponsor.tier === 'silver' && "bg-gray-400 text-gray-800",
                  sponsor.tier === 'bronze' && "bg-amber-700/80 text-white"
                )}>
                  {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}