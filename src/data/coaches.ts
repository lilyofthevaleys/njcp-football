export type Coach = {
  id: string;
  name: string;
  position: string;
  team: string;
  image?: string;
  bio?: string;
  experienceYears: number;
  recordWins: number;
  recordLosses: number;
  championships: number;
};

export const coaches: Coach[] = [
  {
    id: '1',
    name: 'Robert Wilson',
    position: 'Head Coach',
    team: 'Panthers',
    image: '/placeholder-coach.jpg',
    bio: 'Leader with a proven track record in developing championship teams.',
    experienceYears: 15,
    recordWins: 112,
    recordLosses: 45,
    championships: 3,
  },
  {
    id: '2',
    name: 'Michael Thomas',
    position: 'Offensive Coordinator',
    team: 'Tigers',
    image: '/placeholder-coach.jpg',
    bio: 'Innovative play-caller focused on maximizing player strengths.',
    experienceYears: 12,
    recordWins: 98,
    recordLosses: 32,
    championships: 2,
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    position: 'Defensive Coordinator',
    team: 'Eagles',
    image: '/placeholder-coach.jpg',
    bio: 'Defensive strategist known for disciplined and high-performing units.',
    experienceYears: 8,
    recordWins: 76,
    recordLosses: 28,
    championships: 1,
  },
];