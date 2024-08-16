type FetchGitHubContentParams = {
  username: string;
  repo: string;
  path: string;
};

export const fetchGitHubFileContent = async ({
  username,
  repo,
  path,
}: FetchGitHubContentParams): Promise<string> => {
  const url = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;
  const response = await fetch(url);
  const data = await response.json();
  return atob(data.content);
};
