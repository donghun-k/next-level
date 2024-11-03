import { fetchGitHubFileContent } from '@/services/github';

import MDXComponent from '../_components/MDXComponent';
import GitHubHoverCard from './_components/GitHubHoverCard';

const ProfilePage = async () => {
  const profileMarkdown = await fetchGitHubFileContent({
    username: 'donghun-k',
    repo: 'donghun-k',
    path: 'README.md',
  });

  return (
    <main>
      <section className="mx-auto flex h-[calc(100vh-80px)] max-w-screen-xl items-center justify-center gap-[100px] pb-[80px]">
        <div className="flex w-fit max-w-[1000px] flex-col items-center justify-center gap-16 overflow-hidden rounded-xl px-8 py-4">
          <MDXComponent
            source={profileMarkdown}
            className="[&_pre]:border-none [&_pre]:bg-transparent"
          />
          <div>
            <GitHubHoverCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
