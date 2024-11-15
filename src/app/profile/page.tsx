import GitHubLinkButton from './_components/GitHubLinkButton';
import ProfileCodeBlock from './_components/ProfileCodeBlock';
import SendMailButton from './_components/SendMailButton';

const ProfilePage = () => {
  return (
    <main>
      <section className="mx-auto flex h-[calc(100vh-80px)] max-w-screen-xl items-center justify-center gap-[100px] pb-[80px]">
        <div className="flex w-fit max-w-[1000px] flex-col items-center justify-center gap-16 overflow-hidden rounded-xl px-8 py-4">
          <ProfileCodeBlock />
          <div className="flex gap-4">
            <GitHubLinkButton />
            <SendMailButton />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
