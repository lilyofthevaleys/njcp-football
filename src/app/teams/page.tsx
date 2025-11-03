import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Mock data for teams
const teams = [
  {
    id: '1',
    name: 'Panthers',
    mascot: 'Panthers',
    location: 'Central Florida',
    record: '10-2',
    conference: 'Eastern',
    standing: '1st',
    imageSrc: '/placeholder-team.jpg',
  },
  {
    id: '2',
    name: 'Tigers',
    mascot: 'Tigers',
    location: 'South Texas',
    record: '9-3',
    conference: 'Southern',
    standing: '2nd',
    imageSrc: '/placeholder-team.jpg',
  },
  {
    id: '3',
    name: 'Eagles',
    mascot: 'Eagles',
    location: 'Northern California',
    record: '8-4',
    conference: 'Western',
    standing: '1st',
    imageSrc: '/placeholder-team.jpg',
  },
  {
    id: '4',
    name: 'Wolves',
    mascot: 'Wolves',
    location: 'Minnesota',
    record: '7-5',
    conference: 'Northern',
    standing: '3rd',
    imageSrc: '/placeholder-team.jpg',
  },
  {
    id: '5',
    name: 'Sharks',
    mascot: 'Sharks',
    location: 'South Florida',
    record: '11-1',
    conference: 'Eastern',
    standing: '1st',
    imageSrc: '/placeholder-team.jpg',
  },
  {
    id: '6',
    name: 'Bears',
    mascot: 'Bears',
    location: 'Chicago',
    record: '6-6',
    conference: 'Northern',
    standing: '4th',
    imageSrc: '/placeholder-team.jpg',
  },
];

export default function TeamsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4"><span className="text-njcpRed">NJCP</span> <span className="text-white">Teams</span></h1>
          <p className="font-subheading text-xl max-w-2xl animate-delay-100">
            Explore our competitive teams from across the nation, their rosters, stats, and schedules.
          </p>
        </div>
      </div>
      
      {/* Conference Tabs */}
      <div className="bg-white shadow-md animate-fade-in-up animate-delay-100">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-4">
            <button className="px-6 py-2 text-gold border-b-2 border-gold font-medium hover-underline">
              All Conferences
            </button>
            <button className="px-6 py-2 text-gray-600 hover:text-gold font-medium hover-underline">
              Eastern
            </button>
            <button className="px-6 py-2 text-gray-600 hover:text-gold font-medium hover-underline">
              Western
            </button>
            <button className="px-6 py-2 text-gray-600 hover:text-gold font-medium hover-underline">
              Northern
            </button>
            <button className="px-6 py-2 text-gray-600 hover:text-gold font-medium hover-underline">
              Southern
            </button>
          </div>
        </div>
      </div>
      
      {/* Teams Grid */}
      <div className="container mx-auto px-4 py-12 animate-fade-in-up animate-delay-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <div key={team.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift hover-glow ring-1 ring-njcpGold/10 hover:ring-njcpGold/30 transition-all">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-5">
                <h3 className="font-heading text-2xl font-bold">{team.name}</h3>
                <p className="font-subheading text-gray-600">{team.location}</p>
                
                <div className="grid grid-cols-3 gap-2 my-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gold">{team.record}</div>
                    <div className="text-xs text-gray-500">Record</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gold">{team.conference}</div>
                    <div className="text-xs text-gray-500">Conference</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gold">{team.standing}</div>
                    <div className="text-xs text-gray-500">Standing</div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Link href={`/teams/${team.id}`} passHref className="flex-1">
                    <Button className="w-full bg-gold text-black hover:bg-gold/90 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-njcpGold/30">
                      Team Profile
                    </Button>
                  </Link>
                  <Link href={`/teams/${team.id}/schedule`} passHref className="flex-1">
                    <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/10 transition-transform duration-300 hover:scale-105">
                      Schedule
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Standings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8">Conference Standings</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Rank</th>
                  <th className="py-3 px-4 text-left">Team</th>
                  <th className="py-3 px-4 text-left">Conference</th>
                  <th className="py-3 px-4 text-left">Record</th>
                  <th className="py-3 px-4 text-left">Win %</th>
                  <th className="py-3 px-4 text-left">PF</th>
                  <th className="py-3 px-4 text-left">PA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">1</td>
                  <td className="py-3 px-4 font-medium">Sharks</td>
                  <td className="py-3 px-4">Eastern</td>
                  <td className="py-3 px-4">11-1</td>
                  <td className="py-3 px-4">.917</td>
                  <td className="py-3 px-4">385</td>
                  <td className="py-3 px-4">210</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">2</td>
                  <td className="py-3 px-4 font-medium">Panthers</td>
                  <td className="py-3 px-4">Eastern</td>
                  <td className="py-3 px-4">10-2</td>
                  <td className="py-3 px-4">.833</td>
                  <td className="py-3 px-4">412</td>
                  <td className="py-3 px-4">245</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">3</td>
                  <td className="py-3 px-4 font-medium">Tigers</td>
                  <td className="py-3 px-4">Southern</td>
                  <td className="py-3 px-4">9-3</td>
                  <td className="py-3 px-4">.750</td>
                  <td className="py-3 px-4">378</td>
                  <td className="py-3 px-4">290</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">4</td>
                  <td className="py-3 px-4 font-medium">Eagles</td>
                  <td className="py-3 px-4">Western</td>
                  <td className="py-3 px-4">8-4</td>
                  <td className="py-3 px-4">.667</td>
                  <td className="py-3 px-4">345</td>
                  <td className="py-3 px-4">315</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">5</td>
                  <td className="py-3 px-4 font-medium">Wolves</td>
                  <td className="py-3 px-4">Northern</td>
                  <td className="py-3 px-4">7-5</td>
                  <td className="py-3 px-4">.583</td>
                  <td className="py-3 px-4">320</td>
                  <td className="py-3 px-4">305</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <Button className="bg-gold text-black hover:bg-gold/90 transition-transform duration-300 hover:scale-105">
              View Complete Standings
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}