import useSWR from "swr";

import { Category } from "../models/category";

const useCategories = () => {
  return useSWR<Category[]>(
    "/api/categories",
    (url: string) => fetch(url).then((res) => res.json()),
    {
      dedupingInterval: 1000 * 60 * 60 * 24,
    },
  );
};

export default useCategories;
