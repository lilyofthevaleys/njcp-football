import Link from 'next/link';
import { fetchSuuRoster } from '@/lib/suu-roster';
import { athletes as localRoster } from '@/data/athletes';

export default async function AthletesPage() {
  // Try live SUU roster first; fallback to local data if it fails
  let roster = localRoster;
  try {
    const suu = await fetchSuuRoster();
    if (suu.length) roster = suu;
  } catch (e) {
    // keep local roster
  }
  // Show a dedicated Shane Carr card linking to the static page and avoid duplicates
  const normalize = (s?: string) => (s || '').toLowerCase().replace(/[^a-z\s]/g, ' ').replace(/\s+/g, ' ').trim();
  const isShaneCarr = (name?: string) => {
    const n = normalize(name);
    return n.includes('shane') && n.includes('carr');
  };
  const rosterWithoutShane = roster.filter((a) => !isShaneCarr(a.name));
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4"><span className="text-njcpRed">NJCP</span> <span className="text-white">Athletes</span></h1>
          <p className="font-subheading text-xl max-w-2xl animate-delay-100">
            Explore the roster of standout junior college players across the nation.
          </p>
        </div>
      </div>

      {/* CTA Apply Section (moved below banner) */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-njcpBlack">Ready to transform your potential into performance?</h2>
            <p className="mt-2 text-gray-700">Submit your application to join NJCP.</p>
          </div>
          <Link href="/athletes/apply" className="inline-block">
            <span className="inline-flex items-center rounded-md bg-njcpRed px-5 py-3 text-white font-semibold shadow hover:bg-njcpRed/90">Apply Now</span>
          </Link>
        </div>
      </section>

      {/* Roster Grid */}
      <div className="container mx-auto px-4 py-12 animate-fade-in-up animate-delay-200">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Dedicated Shane Carr card linking to static bio page */}
          <Link href="/athletes/shane-carr" className="group">
            <article className="roster-card bg-njcpBlack/80 border border-white/10 rounded-xl overflow-hidden">
              <div className="relative aspect-[3/4] bg-gradient-to-b from-gray-800 to-black">
                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between text-white">
                  <span className="text-xs bg-njcpRed/80 px-2 py-1 rounded">#2</span>
                  <span className="text-xs bg-black/60 px-2 py-1 rounded">WR • Southern Utah Thunderbirds</span>
                </div>
              </div>
              <div className="p-4 bg-black/50">
                <h3 className="font-heading text-white text-lg leading-tight">Shane Carr</h3>
                <p className="text-sm text-gray-300">WR • Southern Utah Thunderbirds</p>
              </div>
            </article>
          </Link>
          {rosterWithoutShane.map((athlete) => (
            <Link key={athlete.id} href={`/athletes/${athlete.id}`} className="group">
              <article className="roster-card bg-njcpBlack/80 border border-white/10 rounded-xl overflow-hidden">
                {/* Removed athlete thumbnails as requested; keep a simple header block */}
                <div className="relative aspect-[3/4] bg-gradient-to-b from-gray-800 to-black">
                  <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between text-white">
                    <span className="text-xs bg-njcpRed/80 px-2 py-1 rounded">#{athlete.jersey ?? '—'}</span>
                    <span className="text-xs bg-black/60 px-2 py-1 rounded">
                      {athlete.position} • {athlete.team}
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-black/50">
                  <h3 className="font-heading text-white text-lg leading-tight">
                    {athlete.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {athlete.position} • {athlete.team}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}