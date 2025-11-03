"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CoachApplyForm } from '@/components/coach-apply-form';

// Grid-first Coaches page: simple hero + coach cards, no inline form
const coaches = [
  { id: '1', name: 'Coach Robert Wilson', position: 'Head Coach', team: 'Panthers', imageSrc: '/placeholder-coach.jpg', experience: '15 years', record: '112-45', championships: 3 },
  { id: '2', name: 'Coach Michael Thomas', position: 'Offensive Coordinator', team: 'Tigers', imageSrc: '/placeholder-coach.jpg', experience: '12 years', record: '98-32', championships: 2 },
  { id: '3', name: 'Coach Sarah Johnson', position: 'Defensive Coordinator', team: 'Eagles', imageSrc: '/placeholder-coach.jpg', experience: '8 years', record: '76-28', championships: 1 },
  { id: '4', name: 'Coach David Martinez', position: 'Head Coach', team: 'Wolves', imageSrc: '/placeholder-coach.jpg', experience: '10 years', record: '82-40', championships: 2 },
  { id: '5', name: 'Coach James Williams', position: 'Special Teams Coordinator', team: 'Sharks', imageSrc: '/placeholder-coach.jpg', experience: '7 years', record: '65-30', championships: 1 },
  { id: '6', name: 'Coach Lisa Rodriguez', position: 'Head Coach', team: 'Bears', imageSrc: '/placeholder-coach.jpg', experience: '9 years', record: '78-35', championships: 2 },
];

export default function CoachesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner (clean) */}
      <section className="bg-njcpBlack text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3"><span className="text-njcpRed">NJCP</span> <span className="text-white">Coaches</span></h1>
          <p className="font-subheading text-gray-300 max-w-2xl">Meet the dedicated staff driving athlete development across the nation.</p>
        </div>
      </section>

      {/* Coaching Opportunities (Inline Form) */}
      <section className="bg-njcpBlack text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-3">Join Our Coaching Staff</h2>
            <p className="font-subheading text-white/80 max-w-2xl mx-auto">
              NJCP is always looking for talented and dedicated coaches to join our program.
              If you're passionate about developing young athletes, apply below.
            </p>
            <div className="mt-4">
              <Link href="/coaches/apply" className="hover-underline">Prefer a dedicated apply page?</Link>
            </div>
          </div>
          <CoachApplyForm />
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map((c) => (
            <div key={c.id} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200" />
                <div>
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-sm text-gray-600">{c.position} • {c.team}</p>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                <p>Experience: {c.experience}</p>
                <p>Record: {c.record}</p>
                <p>Titles: {c.championships}</p>
              </div>
              <div className="mt-4">
                <Link href={`/coaches/${c.id}`} className="text-njcpBlack">
                  <Button variant="outline" className="hover:bg-njcpGold/10">View Profile</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}