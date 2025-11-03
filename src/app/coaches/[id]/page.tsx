import { notFound } from 'next/navigation';
import { coaches } from '@/data/coaches';
import { StatChart } from '@/components/stat-chart';
import { EventCalendar } from '@/components/event-calendar';

interface PageProps {
  params: { id: string };
}

export default function CoachProfilePage({ params }: PageProps) {
  const coach = coaches.find((c) => c.id === params.id);
  if (!coach) return notFound();

  const statData = [
    { label: 'Experience (yrs)', value: coach.experienceYears },
    { label: 'Wins', value: coach.recordWins },
    { label: 'Losses', value: coach.recordLosses },
    { label: 'Titles', value: coach.championships },
  ];

  const events = [
    { id: 'c1', title: 'Team Meeting', date: new Date().toISOString(), location: 'Locker Room' },
    { id: 'c2', title: 'Film Review', date: new Date(Date.now() + 2 * 86400000).toISOString(), location: 'Strategy Lab' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-njcpBlack text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{coach.name}</h1>
          <p className="text-gray-300">{coach.position} • {coach.team}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <StatChart title="Coaching Overview" data={statData} />
          <EventCalendar title="Schedule" events={events} />
        </div>
        <aside className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h2 className="text-lg font-semibold mb-2">Bio</h2>
            <p className="text-sm text-gray-700">{coach.bio ?? 'Bio coming soon.'}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}