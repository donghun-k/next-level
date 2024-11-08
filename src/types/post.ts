export interface PostMetaData {
  id: string;
  title: string;
  date: string;
  desc: string;
  tags: string[];
  thumbnail: string;
}

export interface PostData extends PostMetaData {
  content: string;
}
