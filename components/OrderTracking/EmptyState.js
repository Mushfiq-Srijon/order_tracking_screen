/**
 * EmptyState Component
 * 
 * Displays when user has no orders to show
 * Provides guidance on what to do next
 */

export default function EmptyState() {
    return (
        <div className="mx-auto max-w-md">
            {/* Empty state container */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
                {/* Empty icon */}
                <div className="mb-4 text-5xl">📦</div>

                {/* Empty title */}
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                    No active orders
                </h2>

                {/* Empty message */}
                <p className="mb-6 text-sm text-gray-600">
                    You don't have any orders in progress right now.
                </p>

                {/* CTA buttons */}
                <div className="space-y-2">
                    <button className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                        Start shopping
                    </button>

                    <button className="w-full rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50">
                        View order history
                    </button>
                </div>
            </div>
        </div>
    );
}