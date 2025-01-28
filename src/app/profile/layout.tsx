import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile | NEXT LEVEL',
  description: 'Donghun Kim의 프로필 페이지입니다.',
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
