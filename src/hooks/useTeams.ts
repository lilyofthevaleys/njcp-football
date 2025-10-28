import { useState, useEffect } from 'react';

// Mock team data
const mockTeams = [
  {
    id: '1',
    name: 'Panthers',
    mascot: 'Panther',
    colors: ['#0A0A0A', '#CFAF36'],
    record: { wins: 8, losses: 2 },
    conference: 'Eastern',
    coach: 'Robert Wilson',
    logoSrc: '/images/teams/panthers.svg',
  },
  {
    id: '2',
    name: 'Tigers',
    mascot: 'Tiger',
    colors: ['#F58426', '#000000'],
    record: { wins: 7, losses: 3 },
    conference: 'Western',
    coach: 'Michael Thomas',
    logoSrc: '/images/teams/tigers.svg',
  },
  {
    id: '3',
    name: 'Eagles',
    mascot: 'Eagle',
    colors: ['#004C54', '#A5ACAF'],
    record: { wins: 9, losses: 1 },
    conference: 'Eastern',
    coach: 'James Peterson',
    logoSrc: '/images/teams/eagles.svg',
  },
  {
    id: '4',
    name: 'Knights',
    mascot: 'Knight',
    colors: ['#862633', '#8A8D8F'],
    record: { wins: 6, losses: 4 },
    conference: 'Western',
    coach: 'David Martinez',
    logoSrc: '/images/teams/knights.svg',
  }
];

export interface Team {
  id: string;
  name: string;
  mascot: string;
  colors: string[];
  record: { wins: number; losses: number };
  conference: string;
  coach: string;
  logoSrc: string;
}

export function useTeams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate API fetch
    const fetchTeams = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/teams');
        // const data = await response.json();
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setTeams(mockTeams);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch teams'));
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return { teams, loading, error };
}