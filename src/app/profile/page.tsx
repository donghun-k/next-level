import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
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
        <Avatar className="size-[360px] ring-4 ring-slate-300 dark:ring-slate-800">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/60064471"
            alt="Donghun Kim"
          />
          <AvatarFallback>DH</AvatarFallback>
        </Avatar>
        <Card>
          <CardContent className="w-[500px] overflow-hidden rounded-xl bg-[rgb(39,33,46)] p-2">
            {/* <Markdown content={profileMarkdown} /> */}
            <MDXComponent source={profileMarkdown} />
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default ProfilePage;
