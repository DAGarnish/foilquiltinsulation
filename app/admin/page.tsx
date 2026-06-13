import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import DashboardClient from './DashboardClient';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get('admin_session')?.value === 'true';

  if (!isAdmin) {
    return <DashboardClient initialAuth={false} initialEnquiries={[]} />;
  }

  const enquiries = await prisma.contactEnquiry.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return <DashboardClient initialAuth={true} initialEnquiries={enquiries} />;
}
