import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { SponsorBanner } from '@/components/sponsor-banner';
import { CoachApplyForm } from '@/components/coach-apply-form';

export default function Home() {
  const homepageSponsors = [
    { id: 's1', name: 'SportsTech Inc.', logoSrc: '/placeholder-logo.svg', tier: 'platinum', url: '#' },
    { id: 's2', name: 'Athletic Gear Co.', logoSrc: '/placeholder-logo.svg', tier: 'gold', url: '#' },
    { id: 's3', name: 'College Prep Academy', logoSrc: '/placeholder-logo.svg', tier: 'silver', url: '#' },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-b from-zinc-900/40 via-zinc-950/50 to-black/60 border border-njcpGold/30 rounded-xl p-8 hover-lift hover-glow transition-all text-white">
            <h2 className="font-heading text-3xl mb-4 text-njcpGold">Mission</h2>
            <p className="font-subheading text-lg text-white/90">
              To elevate the standards of junior college football by providing unparalleled coaching, mentorship,
              and exposure to athletes, fostering their growth on and off the field.
            </p>
          </div>
          <div className="bg-gradient-to-b from-zinc-900/40 via-zinc-950/50 to-black/60 border border-njcpGold/30 rounded-xl p-8 hover-lift hover-glow transition-all text-white">
            <h2 className="font-heading text-3xl mb-4 text-njcpGold">Vision</h2>
            <p className="font-subheading text-lg text-white/90">
              To become the premier junior college football conference recognized for developing world-class
              athletes and upstanding individuals who succeed in professional sports and life.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Pillars */}
      <section className="container mx-auto px-4 py-12 animate-fade-in-up animate-delay-100">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-3xl text-njcpGold">Innovation Pillars</h2>
          <Link href="/teams" className="hover-underline text-njcpGold">Explore Programs</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Academic Support */}
          <div className="group bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-white p-6 rounded-lg ring-1 ring-njcpGold/30 hover:ring-njcpGold/50 hover-lift hover-glow transition-all">
            <div className="flex items-center gap-3 mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-njcpGold"><path d="M4 7l8-4 8 4-8 4-8-4zm0 6l8 4 8-4" stroke="currentColor" strokeWidth="2"/></svg>
              <h3 className="font-heading text-xl">Academic Support</h3>
            </div>
            <p className="font-subheading text-white/80">Tutoring, workshops, and academic pathways to four-year universities.</p>
          </div>
          {/* Health & Wellness */}
          <div className="group bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-white p-6 rounded-lg ring-1 ring-njcpGold/30 hover:ring-njcpGold/50 hover-lift hover-glow transition-all">
            <div className="flex items-center gap-3 mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-njcpGold"><path d="M12 21s-6-4.35-6-9a6 6 0 0112 0c0 4.65-6 9-6 9z" stroke="currentColor" strokeWidth="2"/></svg>
              <h3 className="font-heading text-xl">Health & Wellness</h3>
            </div>
            <p className="font-subheading text-white/80">State-of-the-art training, recovery, and mental health resources.</p>
          </div>
          {/* Community Engagement */}
          <div className="group bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-white p-6 rounded-lg ring-1 ring-njcpGold/30 hover:ring-njcpGold/50 hover-lift hover-glow transition-all">
            <div className="flex items-center gap-3 mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-njcpGold"><path d="M6 8a6 6 0 1112 0v4H6V8zm-2 8h16" stroke="currentColor" strokeWidth="2"/></svg>
              <h3 className="font-heading text-xl">Community Engagement</h3>
            </div>
            <p className="font-subheading text-white/80">Programs for local outreach and involvement across regions.</p>
          </div>
          {/* Athlete Development */}
          <div className="group bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-white p-6 rounded-lg ring-1 ring-njcpGold/30 hover:ring-njcpGold/50 hover-lift hover-glow transition-all">
            <div className="flex items-center gap-3 mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-njcpGold"><path d="M4 18l8-12 8 12H4z" stroke="currentColor" strokeWidth="2"/></svg>
              <h3 className="font-heading text-xl">Athlete Development</h3>
            </div>
            <p className="font-subheading text-white/80">Mentorship from pro-level coaches and elite performance pathways.</p>
          </div>
        </div>
      </section>

      {/* Season Format */}
      <section className="container mx-auto px-4 py-12 animate-fade-in-up animate-delay-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-njcpBlack text-white p-8 rounded-lg text-center ring-1 ring-njcpGold/20 hover:ring-njcpGold/40 hover-lift hover-glow transition-all">
            <div className="font-heading text-5xl text-njcpGold mb-2">10</div>
            <div className="font-subheading text-white/80">Regular Season Games</div>
          </div>
          <div className="bg-njcpBlack text-white p-8 rounded-lg text-center ring-1 ring-njcpGold/20 hover:ring-njcpGold/40 hover-lift hover-glow transition-all">
            <div className="font-heading text-4xl text-njcpGold mb-2">Playoffs</div>
            <div className="font-subheading text-white/80">Journey to the Championship</div>
          </div>
          <div className="bg-njcpBlack text-white p-8 rounded-lg text-center ring-1 ring-njcpGold/20 hover:ring-njcpGold/40 hover-lift hover-glow transition-all">
            <div className="font-heading text-4xl text-njcpGold mb-2">Championship</div>
            <div className="font-subheading text-white/80">The ultimate stage to shine</div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
          <div className="group bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-white p-8 rounded-lg text-center hover-lift hover-glow ring-1 ring-njcpGold/30 hover:ring-njcpGold/50 transition-all h-full flex flex-col">
            <h2 className="font-heading text-2xl font-bold mb-4">Athletes</h2>
            <p className="font-subheading mb-6">Develop your skills and prepare for college success</p>
            <Link href="/athletes" className="mt-auto inline-block">
              <Button className="bg-njcpGold text-njcpBlack hover:bg-njcpGold/90 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-njcpGold/40">View Athletes</Button>
            </Link>
          </div>
          <div className="group bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-white p-8 rounded-lg text-center hover-lift hover-glow ring-1 ring-njcpGold/30 hover:ring-njcpGold/50 transition-all h-full flex flex-col">
            <h2 className="font-heading text-2xl font-bold mb-4">Teams</h2>
            <p className="font-subheading mb-6">Join our championship-winning football teams</p>
            <Link href="/teams" className="mt-auto inline-block">
              <Button className="bg-njcpGold text-njcpBlack hover:bg-njcpGold/90 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-njcpGold/40">View Teams</Button>
            </Link>
          </div>
          <div className="group bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-white p-8 rounded-lg text-center hover-lift hover-glow ring-1 ring-njcpGold/30 hover:ring-njcpGold/50 transition-all h-full flex flex-col">
            <h2 className="font-heading text-2xl font-bold mb-4">Sponsors</h2>
            <p className="font-subheading mb-6">Support our mission and help develop future stars</p>
            <Link href="/sponsors" className="mt-auto inline-block">
              <Button className="bg-njcpGold text-njcpBlack hover:bg-njcpGold/90 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-njcpGold/40">View Sponsors</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Coaching Opportunities on Home */}
      <section className="bg-njcpBlack text-white py-16 animate-fade-in-up">
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

      <section className="container mx-auto px-4 pb-16 animate-fade-in-up">
        <SponsorBanner 
          sponsors={homepageSponsors as Sponsor[]}
          autoRotate 
          rotationInterval={4000} 
          centered 
          logoSize="lg" 
          className="animate-fade-in-up"
        />
      </section>
    </main>
  );
}