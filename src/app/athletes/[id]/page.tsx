import { notFound } from 'next/navigation';
import { athletes } from '@/data/athletes';
import { StatChart } from '@/components/stat-chart';
import { EventCalendar } from '@/components/event-calendar';

interface PageProps {
  params: { id: string };
}

export default function AthleteProfilePage({ params }: PageProps) {
  const athlete = athletes.find((a) => a.id === params.id);
  if (!athlete) return notFound();

  const statData = Object.entries(athlete.stats)
    .filter(([_, v]) => typeof v === 'number')
    .map(([k, v]) => ({ label: k, value: v as number }));

  const events = [
    { id: 'e1', title: 'Practice', date: new Date().toISOString(), location: 'Field House' },
    { id: 'e2', title: 'Game vs Tigers', date: new Date(Date.now() + 86400000).toISOString(), location: 'Main Stadium' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-njcpBlack text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{athlete.name}</h1>
          <p className="text-gray-300">{athlete.team}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <StatChart title="Key Stats" data={statData} />
          <EventCalendar title="Upcoming" events={events} />
        </div>
        <aside className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h2 className="text-lg font-semibold mb-2">Bio</h2>
            <p className="text-sm text-gray-700">{athlete.bio ?? 'Bio coming soon.'}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}