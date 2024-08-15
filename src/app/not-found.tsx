'use client';

import { Frown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex h-[calc(100vh-60px)] w-full items-center justify-center">
      <div className="flex h-fit flex-col items-center pb-[10vw]">
        <Frown className="size-[200px]" />
        <p className="mt-[20px] flex items-center gap-8 text-[64px] font-[600]">
          PAGE NOT FOUND
        </p>
        <div className="mt-10 flex gap-4">
          <Link href="/">
            <Button variant="default" className="size-fit text-xl">
              HOME
            </Button>
          </Link>
          <Button onClick={() => router.back()} className="size-fit text-xl">
            BACK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
