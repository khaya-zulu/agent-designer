import { ArrowLeft, Palette } from 'lucide-react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export const DesignerHeader = () => {
  const router = useRouter();

  return (
    <header className="flex sticky top-0 bg-background py-1.5 items-center px-2 md:px-2 gap-2">
      <Button
        variant="outline"
        className="md:px-2 md:h-[34px]"
        onClick={() => {
          router.push('/');
        }}
      >
        <ArrowLeft />
      </Button>
      <Button
        variant="secondary"
        className="md:px-2 md:h-[34px] flex gap-2 cursor-default"
      >
        <Palette />
        Agent Designer
      </Button>
    </header>
  );
};
