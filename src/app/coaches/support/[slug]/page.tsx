import { notFound } from 'next/navigation';
import { supportStaff } from '@/data/support-staff';

interface PageProps {
  params: { slug: string };
}

export default function SupportStaffProfilePage({ params }: PageProps) {
  const staff = supportStaff.find((s) => s.slug === params.slug);
  if (!staff) return notFound();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-njcpBlack text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{staff.name}</h1>
          <p className="text-gray-300">{staff.role}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-2">Profile Overview</h2>
            <p className="text-sm text-gray-700">
              {staff.bio ?? 'Profile details coming soon. Check back for updates.'}
            </p>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h2 className="text-lg font-semibold mb-2">Contact</h2>
            <p className="text-sm text-gray-700">For inquiries, please reach out via the NJCP contact page.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}