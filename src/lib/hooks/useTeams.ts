import { useState, useEffect } from 'react';
import { teams } from '@/data/teams';

export type Conference = 'East' | 'West' | 'North' | 'South';

export interface Team {
  id: string;
  name: string;
  mascot: string;
  conference: Conference;
  logo?: string;
  colors: {
    primary: string;
    secondary: string;
  };
  stats: {
    wins: number;
    losses: number;
    points: number;
    pointsAgainst: number;
  };
}

interface UseTeamsOptions {
  conference?: Conference;
  search?: string;
}

export function useTeams(options: UseTeamsOptions = {}) {
  const [filteredTeams, setFilteredTeams] = useState<Team[]>(teams);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      try {
        let result = [...teams];
        
        // Apply filters
        if (options.conference) {
          result = result.filter(team => team.conference === options.conference);
        }
        
        if (options.search) {
          const searchLower = options.search.toLowerCase();
          result = result.filter(team => 
            team.name.toLowerCase().includes(searchLower) || 
            team.mascot.toLowerCase().includes(searchLower)
          );
        }
        
        setFilteredTeams(result);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        setLoading(false);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [options.conference, options.search]);

  return {
    teams: filteredTeams,
    loading,
    error,
    totalCount: teams.length,
    filteredCount: filteredTeams.length
  };
}