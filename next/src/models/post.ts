export interface SimplePost {
  id: string;
  title: string;
  category: string;
  categoryImage: string;
  body: string;
  publishedAt: string;
  views: number;
}

export interface Post extends SimplePost {}
