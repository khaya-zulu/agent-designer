import { auth } from '@/app/(auth)/auth';
import { Designer } from '@/components/designer';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect('/api/auth/guest');
  }

  return <Designer />;
}
