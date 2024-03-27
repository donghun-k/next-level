export interface Post {
  id: string;
  title: string;
  series: string | null;
  category: string;
  image: string;
  content: string;
  publishedAt: string;
}
export interface SimplePost extends Omit<Post, "content"> {
  contentPreview: string;
}
