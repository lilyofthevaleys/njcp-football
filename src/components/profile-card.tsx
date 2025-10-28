import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProfileCardProps {
  id: string;
  name: string;
  role: 'athlete' | 'coach';
  position?: string;
  team?: string;
  imageSrc: string;
  stats?: {
    label: string;
    value: string | number;
  }[];
  className?: string;
}

export function ProfileCard({ id, name, role, position, team, imageSrc, stats, className }: ProfileCardProps) {
  const profilePath = role === 'athlete' ? `/athletes/${id}` : `/coaches/${id}`;
  
  return (
    <div className={cn("bg-njcpBlack rounded-lg border border-njcpGold/30 overflow-hidden transition-all hover:shadow-lg", className)}>
      <div className="relative h-48 bg-gradient-to-r from-njcpBlack to-gray-800">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-njcpBlack to-transparent"></div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <div className="flex items-center text-sm text-gray-400 mt-1 mb-3">
          {position && <span className="mr-2">{position}</span>}
          {team && (
            <>
              <span className="mx-2">•</span>
              <span>{team}</span>
            </>
          )}
        </div>
        
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-3 gap-2 my-4 athlete-stats">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-njcpGold">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
        
        <Button asChild className="w-full mt-3 bg-njcpGold text-njcpBlack hover:bg-njcpGold/90">
          <Link href={profilePath}>View Profile</Link>
        </Button>
      </div>
    </div>
  );
}