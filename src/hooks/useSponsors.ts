import { useState, useEffect } from 'react';

// Mock sponsor data
const mockSponsors: Sponsor[] = [
  {
    id: '1',
    name: 'Athletic Excellence',
    logoSrc: '/images/sponsors/sponsor1.svg',
    tier: 'platinum',
    url: 'https://example.com/sponsor1',
  },
  {
    id: '2',
    name: 'Champion Gear',
    logoSrc: '/images/sponsors/sponsor2.svg',
    tier: 'gold',
    url: 'https://example.com/sponsor2',
  },
  {
    id: '3',
    name: 'Victory Nutrition',
    logoSrc: '/images/sponsors/sponsor3.svg',
    tier: 'gold',
    url: 'https://example.com/sponsor3',
  },
  {
    id: '4',
    name: 'Elite Training',
    logoSrc: '/images/sponsors/sponsor4.svg',
    tier: 'silver',
    url: 'https://example.com/sponsor4',
  },
  {
    id: '5',
    name: 'Performance Plus',
    logoSrc: '/images/sponsors/sponsor5.svg',
    tier: 'silver',
    url: 'https://example.com/sponsor5',
  },
  {
    id: '6',
    name: 'Athlete Support',
    logoSrc: '/images/sponsors/sponsor6.svg',
    tier: 'bronze',
    url: 'https://example.com/sponsor6',
  }
];

export interface Sponsor {
  id: string;
  name: string;
  logoSrc: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  url: string;
}

export function useSponsors() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate API fetch
    const fetchSponsors = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/sponsors');
        // const data = await response.json();
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setSponsors(mockSponsors);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch sponsors'));
        setLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  return { sponsors, loading, error };
}