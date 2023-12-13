import useSWR from "swr";

import { Category } from "../models/category";

const useCategories = () => {
  return useSWR<Category[]>("/api/categories", (url: string) =>
    fetch(url).then((res) => res.json()),
  );
};

export default useCategories;
