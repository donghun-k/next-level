import MDXComponent from '@/components/MDXComponent';

const ProfileCodeBlock = async () => {
  const response = await fetch(
    'https://api.github.com/repos/donghun-k/donghun-k/contents/README.md'
  );
  const data = await response.json();
  const profileMarkdown = atob(data.content);

  return (
    <MDXComponent
      source={profileMarkdown}
      className="[&_pre]:border-none [&_pre]:bg-transparent"
    />
  );
};

export default ProfileCodeBlock;
