export interface SimplePost {
  id: string;
  title: string;
  category: string;
  categoryImage: string;
  body: string;
  publishedAt: string;
}

export interface Post extends Omit<SimplePost, "categoryImage"> {}
