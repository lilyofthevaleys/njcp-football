import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative bg-njcpBlack text-white">
      <div className="hero-section py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-njcpGold">NJCP</span> National Junior College Football
            </h1>
            <p className="text-xl mb-8">
              Developing tomorrow's champions through excellence, integrity, and opportunity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-njcpGold text-njcpBlack hover:bg-njcpGold/90 px-8 py-6 text-lg font-bold">
                <Link href="/athletes">View Athletes</Link>
              </Button>
              <Button asChild variant="outline" className="border-njcpGold text-njcpGold hover:bg-njcpGold/10 px-8 py-6 text-lg">
                <Link href="/sponsors">Our Sponsors</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="gold-gradient absolute top-0 right-0 w-1/2 h-full opacity-20"></div>
      </div>
      
      <div className="bg-njcpGold py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-njcpBlack font-semibold">Next Game: Panthers vs Tigers - November 15, 2025</div>
            <Button asChild variant="secondary" className="bg-njcpBlack text-white hover:bg-njcpBlack/90">
              <Link href="/teams">View Schedule</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}