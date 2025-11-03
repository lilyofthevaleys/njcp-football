import { Button } from '@/components/ui/button';
import Link from 'next/link';
// Simplified hero without busy background image for a cleaner look

export function HeroSection() {
  return (
    <section className="relative bg-njcpBlack text-white overflow-hidden">
      <div className="hero-section py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-njcpBlack via-njcpRed/45 to-black" />
        <div className="container mx-auto px-4 relative z-10 animate-fade-in-up">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="text-njcpRed">NJCP</span> <span className="text-white">National Junior College Football</span>
            </h1>
            <p className="font-subheading text-xl mb-8 animate-fade-in-up animate-delay-200">
              Where <span className="text-njcpGold">Future Stars</span> are Born — The New Era of Junior College Football.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-njcpRed text-white hover:bg-njcpRed/90 px-8 py-6 text-lg font-bold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-njcpRed/40">
                <Link href="/athletes">View Athletes</Link>
              </Button>
              <Button asChild variant="outline" className="border-njcpRed text-njcpRed hover:bg-njcpRed/10 px-8 py-6 text-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-njcpRed/40">
                <Link href="/sponsors">Our Sponsors</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="gold-gradient animate-background-pan absolute top-0 left-0 w-full h-full opacity-45 mix-blend-overlay"></div>
      </div>
      
      <div className="bg-njcpRed py-4 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-white font-semibold">Next Game: Panthers vs Tigers - November 15, 2025</div>
            <Button asChild variant="secondary" className="bg-njcpBlack text-white hover:bg-njcpBlack/90 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-njcpRed/40">
              <Link href="/teams">View Schedule</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}