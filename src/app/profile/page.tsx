import GitHubLinkButton from './_components/GitHubLinkButton';
import ProfileCodeBlock from './_components/ProfileCodeBlock';
import SendMailButton from './_components/SendMailButton';

const ProfilePage = () => {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-196px)] items-center justify-center gap-[100px]">
      <div className="flex w-fit max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-xl px-8 py-4">
        <ProfileCodeBlock />
        <div className="mt-8 flex gap-4">
          <GitHubLinkButton />
          <SendMailButton />
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
