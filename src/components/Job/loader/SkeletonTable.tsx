import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonTable() {
    return (
        <div className="space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex space-x-2">
                    <Skeleton className="h-6 w-1/3" />
                    <Skeleton className="h-6 w-1/2" />
                    <Skeleton className="h-6 w-1/4" />
                </div>
            ))}
        </div>
    )
}
