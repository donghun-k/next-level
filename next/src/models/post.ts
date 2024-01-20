export interface Post {
  id: string;
  title: string;
  category: string;
  mainImage: string;
  content: string;
  publishedAt: string;
}
export interface SimplePost extends Omit<Post, "content"> {
  contentPreview: string;
}
