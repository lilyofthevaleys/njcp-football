import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Mock data for coaches
const coaches = [
  {
    id: '1',
    name: 'Coach Robert Wilson',
    position: 'Head Coach',
    team: 'Panthers',
    imageSrc: '/placeholder-coach.jpg',
    experience: '15 years',
    record: '112-45',
    championships: 3,
  },
  {
    id: '2',
    name: 'Coach Michael Thomas',
    position: 'Offensive Coordinator',
    team: 'Tigers',
    imageSrc: '/placeholder-coach.jpg',
    experience: '12 years',
    record: '98-32',
    championships: 2,
  },
  {
    id: '3',
    name: 'Coach Sarah Johnson',
    position: 'Defensive Coordinator',
    team: 'Eagles',
    imageSrc: '/placeholder-coach.jpg',
    experience: '8 years',
    record: '76-28',
    championships: 1,
  },
  {
    id: '4',
    name: 'Coach David Martinez',
    position: 'Head Coach',
    team: 'Wolves',
    imageSrc: '/placeholder-coach.jpg',
    experience: '10 years',
    record: '82-40',
    championships: 2,
  },
  {
    id: '5',
    name: 'Coach James Williams',
    position: 'Special Teams Coordinator',
    team: 'Sharks',
    imageSrc: '/placeholder-coach.jpg',
    experience: '7 years',
    record: '65-30',
    championships: 1,
  },
  {
    id: '6',
    name: 'Coach Lisa Rodriguez',
    position: 'Head Coach',
    team: 'Bears',
    imageSrc: '/placeholder-coach.jpg',
    experience: '9 years',
    record: '78-35',
    championships: 2,
  },
];

export default function CoachesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">NJCP <span className="text-gold">Coaches</span></h1>
          <p className="text-xl max-w-2xl">
            Meet the dedicated coaches who develop our athletes both on and off the field.
          </p>
        </div>
      </div>
      
      {/* Coaches Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <div key={coach.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{coach.name}</h3>
                <p className="text-gray-600">{coach.position} • {coach.team}</p>
                <div className="grid grid-cols-3 gap-2 my-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gold">{coach.experience}</div>
                    <div className="text-xs text-gray-500">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gold">{coach.record}</div>
                    <div className="text-xs text-gray-500">Record</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gold">{coach.championships}</div>
                    <div className="text-xs text-gray-500">Titles</div>
                  </div>
                </div>
                <Link href={`/coaches/${coach.id}`} passHref>
                  <Button className="w-full bg-gold text-black hover:bg-gold/90">
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Coaching Opportunities */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Coaching Staff</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            NJCP is always looking for talented and dedicated coaches to join our program.
            If you're passionate about developing young athletes, we want to hear from you.
          </p>
          <Button className="bg-gold text-black hover:bg-gold/90 px-8">
            Coaching Opportunities
          </Button>
        </div>
      </div>
    </div>
  );
}