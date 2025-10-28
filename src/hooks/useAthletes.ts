import { useState, useEffect } from 'react';

// Mock athlete data
const mockAthletes = [
  {
    id: '1',
    name: 'Marcus Johnson',
    position: 'Quarterback',
    team: 'Panthers',
    imageSrc: '/images/athletes/athlete1.jpg',
    stats: [
      { label: 'Pass Yards', value: 2450 },
      { label: 'TDs', value: 28 },
      { label: 'Rating', value: 158.3 }
    ]
  },
  {
    id: '2',
    name: 'Darius Williams',
    position: 'Running Back',
    team: 'Tigers',
    imageSrc: '/images/athletes/athlete2.jpg',
    stats: [
      { label: 'Rush Yards', value: 1250 },
      { label: 'TDs', value: 15 },
      { label: 'Avg', value: 5.8 }
    ]
  },
  {
    id: '3',
    name: 'Jamal Thompson',
    position: 'Wide Receiver',
    team: 'Eagles',
    imageSrc: '/images/athletes/athlete3.jpg',
    stats: [
      { label: 'Receptions', value: 68 },
      { label: 'Yards', value: 1120 },
      { label: 'TDs', value: 12 }
    ]
  },
  {
    id: '4',
    name: 'Tyler Rodriguez',
    position: 'Linebacker',
    team: 'Panthers',
    imageSrc: '/images/athletes/athlete4.jpg',
    stats: [
      { label: 'Tackles', value: 95 },
      { label: 'Sacks', value: 8.5 },
      { label: 'INTs', value: 2 }
    ]
  }
];

export interface Athlete {
  id: string;
  name: string;
  position: string;
  team: string;
  imageSrc: string;
  stats: {
    label: string;
    value: number | string;
  }[];
}

export function useAthletes() {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate API fetch
    const fetchAthletes = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/athletes');
        // const data = await response.json();
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setAthletes(mockAthletes);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch athletes'));
        setLoading(false);
      }
    };

    fetchAthletes();
  }, []);

  return { athletes, loading, error };
}