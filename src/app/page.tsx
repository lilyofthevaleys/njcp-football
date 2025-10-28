import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  // THIS IS A TEST CHANGE - SHOULD BE VISIBLE
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-center mb-8 text-njcpGold">NJCP Football</h1>
      <p className="text-xl text-center mb-12">Building champions</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-njcpBlack text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Athletes</h2>
          <p className="mb-6">Develop your skills and prepare for college success</p>
          <Link href="/athletes">
            <Button className="bg-njcpGold text-njcpBlack hover:bg-yellow-500">View Athletes</Button>
          </Link>
        </div>
        
        <div className="bg-njcpBlack text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Teams</h2>
          <p className="mb-6">Join our championship-winning football teams</p>
          <Link href="/teams">
            <Button className="bg-njcpGold text-njcpBlack hover:bg-yellow-500">View Teams</Button>
          </Link>
        </div>
        
        <div className="bg-njcpBlack text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Sponsors</h2>
          <p className="mb-6">Support our mission and help develop future stars</p>
          <Link href="/sponsors">
            <Button className="bg-njcpGold text-njcpBlack hover:bg-yellow-500">View Sponsors</Button>
          </Link>
        </div>
      </div>
      
      <div className="text-center">
        <p className="mb-4">This is the updated NJCP Football website</p>
        <Link href="/test-page">
          <Button className="bg-njcpRed text-white hover:bg-red-700">Visit Test Page</Button>
        </Link>
      </div>
    </main>
  );
}