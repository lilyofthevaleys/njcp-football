import { Athlete } from '@/lib/hooks/useAthletes';

export const athletes: Athlete[] = [
  {
    id: '1',
    name: 'Marcus Johnson',
    position: 'QB',
    team: 'Central Valley Tigers',
    image: '/placeholder-athlete.svg',
    stats: {
      passYards: 2850,
      passTD: 28,
      rushYards: 420,
      rushTD: 5,
      completion: '68%'
    },
    bio: 'Dual-threat quarterback with exceptional field vision and leadership skills.'
  },
  {
    id: '2',
    name: 'Darnell Williams',
    position: 'RB',
    team: 'Eastern Shore Hawks',
    image: '/placeholder-athlete.svg',
    stats: {
      rushYards: 1580,
      rushTD: 18,
      recYards: 320,
      recTD: 3,
      yardsPerCarry: 5.8
    },
    bio: 'Power back with breakaway speed and excellent vision between the tackles.'
  },
  {
    id: '3',
    name: 'Jamal Thompson',
    position: 'WR',
    team: 'Mountain West Cougars',
    image: '/placeholder-athlete.svg',
    stats: {
      receptions: 72,
      recYards: 1250,
      recTD: 12,
      yardsPerCatch: 17.4,
      longReception: 76
    },
    bio: 'Deep threat receiver with exceptional hands and route-running ability.'
  },
  {
    id: '4',
    name: 'Tyler Rodriguez',
    position: 'TE',
    team: 'Central Valley Tigers',
    image: '/placeholder-athlete.svg',
    stats: {
      receptions: 45,
      recYards: 580,
      recTD: 6,
      blockedAssignments: '92%',
      yardsAfterCatch: 210
    },
    bio: 'Complete tight end who excels as both a receiver and blocker.'
  },
  {
    id: '5',
    name: 'Brandon Smith',
    position: 'OL',
    team: 'Southern Plains Bison',
    image: '/placeholder-athlete.svg',
    stats: {
      gamesStarted: 12,
      sacks: 2,
      penalties: 3,
      pancakeBlocks: 28,
      qbHits: 4
    },
    bio: 'Dominant left tackle with excellent footwork and pass protection skills.'
  },
  {
    id: '6',
    name: 'DeShawn Jackson',
    position: 'DL',
    team: 'Eastern Shore Hawks',
    image: '/placeholder-athlete.svg',
    stats: {
      tackles: 45,
      sacks: 8.5,
      forcedFumbles: 3,
      tacklesForLoss: 14,
      qbHurries: 22
    },
    bio: 'Explosive edge rusher with an exceptional first step and motor.'
  },
  {
    id: '7',
    name: 'Kevin Martinez',
    position: 'LB',
    team: 'Northern Lakes Wolves',
    image: '/placeholder-athlete.svg',
    stats: {
      tackles: 112,
      sacks: 4.5,
      interceptions: 2,
      forcedFumbles: 3,
      passesDefended: 7
    },
    bio: 'Sideline-to-sideline linebacker with excellent instincts and tackling ability.'
  },
  {
    id: '8',
    name: 'Isaiah Washington',
    position: 'DB',
    team: 'Mountain West Cougars',
    image: '/placeholder-athlete.svg',
    stats: {
      tackles: 58,
      interceptions: 5,
      passesDefended: 14,
      forcedFumbles: 2,
      defensiveTD: 1
    },
    bio: 'Lockdown corner with ball-hawking skills and return ability.'
  },
  {
    id: '9',
    name: 'Michael Chen',
    position: 'K',
    team: 'Southern Plains Bison',
    image: '/placeholder-athlete.svg',
    stats: {
      fieldGoals: '22/25',
      longFieldGoal: 52,
      extraPoints: '35/36',
      kickoffTouchbacks: 48,
      onside: '1/1'
    },
    bio: 'Reliable kicker with exceptional accuracy and leg strength.'
  },
  {
    id: '10',
    name: 'Andre Wilson',
    position: 'P',
    team: 'Northern Lakes Wolves',
    image: '/placeholder-athlete.svg',
    stats: {
      punts: 42,
      puntYards: 1890,
      longPunt: 68,
      inside20: 18,
      netAverage: 41.2
    },
    bio: 'Powerful punter with excellent hang time and directional control.'
  },
  {
    id: '11',
    name: 'Carlos Ramirez',
    position: 'WR',
    team: 'Central Valley Tigers',
    image: '/placeholder-athlete.svg',
    stats: {
      receptions: 65,
      recYards: 980,
      recTD: 9,
      yardsPerCatch: 15.1,
      longReception: 64
    },
    bio: 'Precise route runner with exceptional hands and yards-after-catch ability.'
  },
  {
    id: '12',
    name: 'Malik Johnson',
    position: 'RB',
    team: 'Mountain West Cougars',
    image: '/placeholder-athlete.svg',
    stats: {
      rushYards: 1320,
      rushTD: 14,
      recYards: 280,
      recTD: 2,
      yardsPerCarry: 5.2
    },
    bio: 'Elusive back with excellent vision and breakaway speed.'
  }
];