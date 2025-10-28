import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Mock data for sponsors
const sponsors = [
  {
    id: '1',
    name: 'SportsTech Inc.',
    tier: 'platinum',
    description: 'Leading provider of sports technology solutions for athletes and teams.',
    logoSrc: '/placeholder-logo.svg',
    url: '#',
    metrics: {
      impressions: '1.2M',
      engagement: '85K',
      roi: '320%'
    }
  },
  {
    id: '2',
    name: 'Athletic Gear Co.',
    tier: 'gold',
    description: 'Premium athletic equipment and apparel for college athletes.',
    logoSrc: '/placeholder-logo.svg',
    url: '#',
    metrics: {
      impressions: '950K',
      engagement: '62K',
      roi: '280%'
    }
  },
  {
    id: '3',
    name: 'College Prep Academy',
    tier: 'silver',
    description: 'Preparing student-athletes for success in academics and sports.',
    logoSrc: '/placeholder-logo.svg',
    url: '#',
    metrics: {
      impressions: '720K',
      engagement: '45K',
      roi: '210%'
    }
  },
  {
    id: '4',
    name: 'Performance Nutrition',
    tier: 'gold',
    description: 'Specialized nutrition products for athletic performance and recovery.',
    logoSrc: '/placeholder-logo.svg',
    url: '#',
    metrics: {
      impressions: '850K',
      engagement: '58K',
      roi: '240%'
    }
  },
  {
    id: '5',
    name: 'Scholarship Foundation',
    tier: 'platinum',
    description: 'Supporting student-athletes with scholarships and financial aid.',
    logoSrc: '/placeholder-logo.svg',
    url: '#',
    metrics: {
      impressions: '1.1M',
      engagement: '78K',
      roi: '290%'
    }
  },
  {
    id: '6',
    name: 'Training Systems',
    tier: 'silver',
    description: 'Advanced training methodologies and equipment for athletic development.',
    logoSrc: '/placeholder-logo.svg',
    url: '#',
    metrics: {
      impressions: '680K',
      engagement: '42K',
      roi: '190%'
    }
  },
];

export default function SponsorsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">NJCP <span className="text-gold">Sponsors</span></h1>
          <p className="text-xl max-w-2xl">
            Our valued partners who make the NJCP mission possible through their generous support.
          </p>
        </div>
      </div>
      
      {/* Tier Tabs */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-4">
            <button className="px-6 py-2 text-gold border-b-2 border-gold font-medium">
              All Sponsors
            </button>
            <button className="px-6 py-2 text-gray-600 hover:text-gold font-medium">
              Platinum
            </button>
            <button className="px-6 py-2 text-gray-600 hover:text-gold font-medium">
              Gold
            </button>
            <button className="px-6 py-2 text-gray-600 hover:text-gold font-medium">
              Silver
            </button>
            <button className="px-6 py-2 text-gray-600 hover:text-gold font-medium">
              Bronze
            </button>
          </div>
        </div>
      </div>
      
      {/* Sponsors Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="sponsor-card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-gray-100 flex items-center justify-center p-6">
                <div className="text-2xl font-bold text-gray-400">{sponsor.name}</div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{sponsor.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    sponsor.tier === 'platinum' ? 'bg-gray-300 text-gray-800' :
                    sponsor.tier === 'gold' ? 'bg-gold/20 text-gold' :
                    sponsor.tier === 'silver' ? 'bg-gray-200 text-gray-600' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{sponsor.description}</p>
                
                <div className="grid grid-cols-3 gap-2 my-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gold">{sponsor.metrics.impressions}</div>
                    <div className="text-xs text-gray-500">Impressions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gold">{sponsor.metrics.engagement}</div>
                    <div className="text-xs text-gray-500">Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gold">{sponsor.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                </div>
                
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gold text-black hover:bg-gold/90">
                    Visit Sponsor
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Become a Sponsor */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Become a <span className="text-gold">Sponsor</span></h2>
              <p className="text-lg mb-6">
                Partner with NJCP to connect your brand with our nationwide audience of athletes, 
                coaches, families, and college football fans.
              </p>
              <p className="text-lg mb-6">
                Our tiered sponsorship packages offer customized visibility, engagement metrics, 
                and ROI tracking to maximize your investment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gold text-black hover:bg-gold/90">
                  Sponsorship Packages
                </Button>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
                  Contact Us
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Sponsorship Tiers</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span className="font-medium">Platinum Partner</span>
                    <span className="text-gold">$25,000+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span className="font-medium">Gold Partner</span>
                    <span className="text-gold">$15,000+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span className="font-medium">Silver Partner</span>
                    <span className="text-gold">$7,500+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span className="font-medium">Bronze Partner</span>
                    <span className="text-gold">$2,500+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}