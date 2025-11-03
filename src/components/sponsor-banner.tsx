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
  centered?: boolean;
  logoSize?: 'sm' | 'md' | 'lg';
}

export function SponsorBanner({ 
  sponsors, 
  autoRotate = true, 
  rotationInterval = 3000,
  className,
  centered = false,
  logoSize = 'md'
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
        <h3 className="text-center text-3xl md:text-4xl font-semibold mb-10 text-white">Our <span className="text-njcpRed">Sponsors</span></h3>

        {/** derive sizing for logo container and image dimensions */}
        {(() => {
          const containerHeight = logoSize === 'lg' ? 'h-28' : logoSize === 'sm' ? 'h-16' : 'h-20';
          const imageDims = logoSize === 'lg' ? { w: 180, h: 110 } : logoSize === 'sm' ? { w: 96, h: 64 } : { w: 120, h: 80 };
          return (
            <div className={cn(
              centered 
                ? "flex flex-wrap justify-center items-center gap-6"
                : "grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
            )}>
              {sponsors.map((sponsor) => (
                <Link 
                  href={sponsor.url} 
                  key={sponsor.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor-card block bg-white/5 border border-njcpGold/20 rounded-lg p-6 hover:bg-white/10 transition-all"
                  onClick={() => trackClick(sponsor.id)}
                  onMouseEnter={() => trackImpression(sponsor.id)}
                >
                  <div className={cn("relative flex items-center justify-center", containerHeight)}>
                    <Image
                      src={sponsor.logoSrc}
                      alt={sponsor.name}
                      width={imageDims.w}
                      height={imageDims.h}
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
          );
        })()}
        
      </div>
    </div>
  );
}