import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { coaches } from '@/data/coaches';

interface PageProps {
  params: { id: string };
}

export default function CoachProfilePage({ params }: PageProps) {
  const coach = coaches.find((c) => c.id === params.id);
  if (!coach) return notFound();

  // Requested contact/info display overrides for the demo profile
  const titleDisplay = 'Head Coach';
  const emailDisplay = 'dlfitzgerald@suu.edu';
  const phoneDisplay = '435-586-5470';
  const teamDisplay = '-';

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Modern hero with gradient overlay */}
      <section className="relative">
        <div
          className="h-[420px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${coach.image ?? '/placeholder-coach.jpg'})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Name and headshot */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="container mx-auto px-4 pb-6">
            <div className="flex items-end gap-6">
              <div className="relative h-32 w-32 rounded-lg overflow-hidden ring-4 ring-white shadow-xl">
                <Image
                  src={coach.headshot ?? '/placeholder-coach.jpg'}
                  alt={`${coach.name} headshot`}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div className="text-white">
                <h1 className="text-3xl md:text-4xl font-bold tracking-wide uppercase drop-shadow">
                  {coach.name}
                </h1>
                <p className="mt-1 text-white/85">{titleDisplay}</p>
              </div>
              {/* Removed close button per request */}
              </div>

            {/* Contact/info card */}
            <div className="mt-6 bg-white rounded-xl shadow-lg border p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="text-xs font-semibold text-gray-500 tracking-wide">TITLE</div>
                  <div className="mt-1 text-gray-900">{titleDisplay}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 tracking-wide">EMAIL</div>
                  <div className="mt-1">
                    <a href={`mailto:${emailDisplay}`} className="text-njcpBlack hover:underline">{emailDisplay}</a>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 tracking-wide">PHONE</div>
                  <div className="mt-1 text-gray-900">{phoneDisplay}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 tracking-wide">TEAM</div>
                  <div className="mt-1 text-gray-900">{teamDisplay}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography content */}
      <section className="container mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-sm border p-6 space-y-4">
          {(coach.bio ?? '').split('\n').map((raw, i) => {
            const t = raw.trim();
            if (!t) return null;
            if (t === "What They're Saying About Fitzgerald:") {
              return (
                <p key={i} className="text-gray-900 font-bold">{t}</p>
              );
            }
            const parts = t.split(/(".*?")/g);
            return (
              <p key={i} className="text-gray-800 leading-relaxed">
                {parts.map((part, idx) => (
                  part.startsWith('"') && part.endsWith('"') ? (
                    <em key={idx}>{part}</em>
                  ) : (
                    <span key={idx}>{part}</span>
                  )
                ))}
              </p>
            );
          })}
        </div>
      </section>
    </div>
  );
}