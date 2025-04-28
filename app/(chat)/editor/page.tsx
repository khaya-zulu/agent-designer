import { auth } from '@/app/(auth)/auth';
import { Editor } from '@/components/editor';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect('/api/auth/guest');
  }

  return <Editor />;
}
