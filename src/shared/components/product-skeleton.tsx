import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => (
  <div className="relative w-full h-fit rounded-sm bg-white overflow-hidden p-4">
    <div className="space-y-4">
      <Skeleton className="h-[150px] w-full rounded-sm" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-8 w-full" />
        <div className="flex gap-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-6 w-1/4" />
        </div>
      </div>
    </div>
  </div>
);

export default SkeletonCard;
