import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Profile | NEXT LEVEL',
  description: 'Donghun Kim의 프로필 페이지입니다.',
};

const ProfileLayout = ({ children }: PropsWithChildren) => {
  return children;
};

export default ProfileLayout;
