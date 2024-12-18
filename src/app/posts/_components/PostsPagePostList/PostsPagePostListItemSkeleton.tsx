import { Skeleton } from '@/components/ui/skeleton';

const PostsPagePostListItemSkeleton = () => {
  return (
    <li className="flex w-full gap-8 rounded-md bg-card p-4 pr-8 shadow-sm">
      {/* Thumbnail skeleton */}
      <div className="shrink-0">
        <Skeleton className="aspect-[4/3] w-80 rounded-md" />
      </div>

      {/* Content area */}
      <div className="flex w-[calc(100%-352px)] flex-col justify-start">
        <div>
          {/* Date skeleton */}
          <Skeleton className="h-4 w-36" />

          {/* Title skeleton */}
          <Skeleton className="mt-1 h-7 w-3/4" />

          {/* Tags skeleton */}
          <div className="mt-2 flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </div>
        </div>

        {/* Content skeleton */}
        <div className="mt-4 space-y-2">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
        </div>
      </div>
    </li>
  );
};

export default PostsPagePostListItemSkeleton;
