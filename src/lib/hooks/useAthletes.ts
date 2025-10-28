import { useState, useEffect } from 'react';
import { athletes } from '@/data/athletes';

export type Position = 'QB' | 'RB' | 'WR' | 'TE' | 'OL' | 'DL' | 'LB' | 'DB' | 'K' | 'P' | 'LS' | 'ST';
export type Team = string;

export interface Athlete {
  id: string;
  name: string;
  position: Position;
  team: string;
  image?: string;
  stats: {
    [key: string]: number | string;
  };
  bio?: string;
}

interface UseAthletesOptions {
  position?: Position;
  team?: Team;
  search?: string;
}

export function useAthletes(options: UseAthletesOptions = {}) {
  const [filteredAthletes, setFilteredAthletes] = useState<Athlete[]>(athletes);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      try {
        let result = [...athletes];
        
        // Apply filters
        if (options.position) {
          result = result.filter(athlete => athlete.position === options.position);
        }
        
        if (options.team) {
          result = result.filter(athlete => athlete.team === options.team);
        }
        
        if (options.search) {
          const searchLower = options.search.toLowerCase();
          result = result.filter(athlete => 
            athlete.name.toLowerCase().includes(searchLower) || 
            athlete.team.toLowerCase().includes(searchLower)
          );
        }
        
        setFilteredAthletes(result);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        setLoading(false);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [options.position, options.team, options.search]);

  return {
    athletes: filteredAthletes,
    loading,
    error,
    totalCount: athletes.length,
    filteredCount: filteredAthletes.length
  };
}