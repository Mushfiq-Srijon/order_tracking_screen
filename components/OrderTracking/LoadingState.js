/**
 * LoadingState Component
 * 
 * Skeleton/loading state shown while order data is being fetched
 * Uses placeholder shimmer effects to indicate loading
 */

export default function LoadingState() {
    return (
        <div className="mx-auto max-w-md">
            {/* Header skeleton */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                <div className="border-b border-gray-200 bg-white px-4 py-4">
                    <div className="mb-2 h-6 w-1/3 animate-pulse rounded bg-gray-200"></div>
                    <div className="h-4 w-1/4 animate-pulse rounded bg-gray-100"></div>
                </div>

                {/* Timeline skeleton */}
                <div className="px-4 py-6">
                    <div className="space-y-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="flex gap-3">
                                {/* Circle placeholder */}
                                <div className="h-12 w-12 min-w-12 animate-pulse rounded-full bg-gray-200"></div>

                                {/* Text placeholders */}
                                <div className="flex-1 space-y-2">
                                    <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200"></div>
                                    <div className="h-3 w-1/3 animate-pulse rounded bg-gray-100"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Info card skeleton */}
            <div className="mt-4 space-y-3 rounded-lg border border-gray-200 bg-white p-4">
                <div className="space-y-2">
                    <div className="h-3 w-1/4 animate-pulse rounded bg-gray-200"></div>
                    <div className="h-5 w-1/2 animate-pulse rounded bg-gray-100"></div>
                </div>
                <div className="space-y-2 border-t border-gray-100 pt-3">
                    <div className="h-3 w-1/4 animate-pulse rounded bg-gray-200"></div>
                    <div className="h-5 w-1/3 animate-pulse rounded bg-gray-100"></div>
                </div>
            </div>

            {/* Message */}
            <p className="mt-4 text-center text-sm text-gray-500">
                Loading your order...
            </p>
        </div>
    );
}