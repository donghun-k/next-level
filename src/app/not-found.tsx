'use client';

import { Frown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center pb-[80px]">
      <div className="flex h-fit flex-col items-center">
        <Frown className="size-[200px]" />
        <p className="mt-[20px] flex items-center gap-8 text-[64px] font-[600]">
          Page not found
        </p>
        <div className="mt-10 flex gap-4">
          <Link href="/">
            <Button variant="default" className="size-fit text-xl">
              Home
            </Button>
          </Link>
          <Button onClick={() => router.back()} className="size-fit text-xl">
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
