import useSWR from "swr";

const useViews = (postId: string) => {
  return useSWR<number>(
    `/api/views/${postId}`,
    (url: string) =>
      fetch(url).then((res) => {
        return res.json();
      }),
    {
      dedupingInterval: 1000 * 60 * 60 * 24,
    },
  );
};

export default useViews;
