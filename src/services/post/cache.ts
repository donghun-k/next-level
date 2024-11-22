import type { PostData } from '@/types/post';

export class PostCache {
  private static postPathsCache: string[] | null = null;

  private static postDataListCache: PostData[] | null = null;

  private static postCache = new Map<string, PostData>();

  private static tagListCache: string[] | null = null;

  static getPostPaths() {
    return this.postPathsCache ? [...this.postPathsCache] : null;
  }

  static setPostPaths(paths: string[]) {
    this.postPathsCache = paths;
  }

  static getPostDataList() {
    return this.postDataListCache ? [...this.postDataListCache] : null;
  }

  static setPostDataList(posts: PostData[]) {
    this.postDataListCache = posts;
  }

  static getPost(id: string) {
    return this.postCache.get(id);
  }

  static setPost(id: string, post: PostData) {
    this.postCache.set(id, post);
  }

  static getTagList() {
    return this.tagListCache ? [...this.tagListCache] : null;
  }

  static setTagList(tags: string[]) {
    this.tagListCache = tags;
  }
}
