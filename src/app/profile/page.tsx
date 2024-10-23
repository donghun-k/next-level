import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { fetchGitHubFileContent } from '@/services/github';

import MDXComponent from '../_components/MDXComponent';

const ProfilePage = async () => {
  const profileMarkdown = await fetchGitHubFileContent({
    username: 'donghun-k',
    repo: 'donghun-k',
    path: 'README.md',
  });

  return (
    <main>
      <section className="mx-auto flex h-[calc(100vh-80px)] max-w-screen-xl items-center justify-center gap-[100px] pb-[80px]">
        <div className="flex w-fit max-w-[1000px] items-center justify-center gap-16 overflow-hidden rounded-xl px-8 py-4">
          <MDXComponent
            source={profileMarkdown}
            className="[&_pre]:border-none"
          />
          <Avatar className="size-[360px] shadow-xl">
            <AvatarImage
              className="mono"
              src="https://avatars.githubusercontent.com/u/60064471"
              alt="Donghun Kim"
            />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
