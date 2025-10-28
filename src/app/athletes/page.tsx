import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Mock data for athletes
const athletes = [
  {
    id: '1',
    name: 'Marcus Johnson',
    position: 'Quarterback',
    team: 'Panthers',
    imageSrc: '/placeholder-athlete.jpg',
    stats: [
      { label: 'TDs', value: 24 },
      { label: 'Yards', value: 3200 },
      { label: 'Comp.', value: '68%' },
    ],
  },
  {
    id: '2',
    name: 'Jamal Williams',
    position: 'Running Back',
    team: 'Tigers',
    imageSrc: '/placeholder-athlete.jpg',
    stats: [
      { label: 'TDs', value: 18 },
      { label: 'Yards', value: 1450 },
      { label: 'Avg', value: 5.8 },
    ],
  },
  {
    id: '3',
    name: 'Tyler Rodriguez',
    position: 'Wide Receiver',
    team: 'Eagles',
    imageSrc: '/placeholder-athlete.jpg',
    stats: [
      { label: 'TDs', value: 12 },
      { label: 'Yards', value: 980 },
      { label: 'Rec.', value: 62 },
    ],
  },
  {
    id: '4',
    name: 'DeShawn Smith',
    position: 'Linebacker',
    team: 'Wolves',
    imageSrc: '/placeholder-athlete.jpg',
    stats: [
      { label: 'Tackles', value: 86 },
      { label: 'Sacks', value: 7.5 },
      { label: 'INTs', value: 2 },
    ],
  },
  {
    id: '5',
    name: 'Carlos Mendez',
    position: 'Safety',
    team: 'Sharks',
    imageSrc: '/placeholder-athlete.jpg',
    stats: [
      { label: 'Tackles', value: 64 },
      { label: 'INTs', value: 5 },
      { label: 'PDs', value: 12 },
    ],
  },
  {
    id: '6',
    name: 'Brandon Taylor',
    position: 'Tight End',
    team: 'Panthers',
    imageSrc: '/placeholder-athlete.jpg',
    stats: [
      { label: 'TDs', value: 8 },
      { label: 'Yards', value: 620 },
      { label: 'Rec.', value: 45 },
    ],
  },
];

// Position options for filter
const positions = [
  'All Positions',
  'Quarterback',
  'Running Back',
  'Wide Receiver',
  'Tight End',
  'Offensive Line',
  'Defensive Line',
  'Linebacker',
  'Cornerback',
  'Safety',
  'Special Teams',
];

// Team options for filter
const teams = [
  'All Teams',
  'Panthers',
  'Tigers',
  'Eagles',
  'Wolves',
  'Sharks',
  'Bears',
  'Lions',
  'Falcons',
];

export default function AthletesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">NJCP <span className="text-gold">Athletes</span></h1>
          <p className="text-xl max-w-2xl">
            Discover the rising stars of junior college football. Our athletes represent the best talent across the nation.
          </p>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search athletes..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <svg
                  className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold">
                {positions.map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold">
                {teams.map((team) => (
                  <option key={team} value={team}>
                    {team}
                  </option>
                ))}
              </select>
              
              <Button className="bg-gold text-black hover:bg-gold/90">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Athletes Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {athletes.map((athlete) => (
            <div key={athlete.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{athlete.name}</h3>
                <p className="text-gray-600">{athlete.position} • {athlete.team}</p>
                <div className="grid grid-cols-3 gap-2 my-4">
                  {athlete.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-gold">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link href={`/athletes/${athlete.id}`} passHref>
                  <Button className="w-full bg-gold text-black hover:bg-gold/90">
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <Button variant="outline" className="border-gray-300 text-gray-700">
              Previous
            </Button>
            <Button variant="outline" className="border-gold bg-gold text-black">
              1
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700">
              2
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700">
              3
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700">
              Next
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}