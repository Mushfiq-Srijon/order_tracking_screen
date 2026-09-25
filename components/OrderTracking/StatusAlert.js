/**
 * StatusAlert Component
 * 
 * Conditional alert banner that displays for:
 * 1. Delayed orders - shows delay reason and revised estimate
 * 2. Delivered but not received - prompts user to report issue
 * 
 * Props:
 *   - order: Order object containing isDelayed, isNotReceived, etc.
 */

import React from "react";

export default function StatusAlert({ order }) {
    // Don't render if no alert needed
    if (!order.isDelayed && !order.isNotReceived) {
        return null;
    }

    // Delayed order alert
    if (order.isDelayed) {
        return (
            <div className="mx-4 mt-4 rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
                {/* Warning icon and title */}
                <div className="mb-2 flex items-start gap-3">
                    <div className="text-xl">⚠️</div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-orange-900">
                            Your order is delayed
                        </h3>
                    </div>
                </div>

                {/* Delay reason */}
                <p className="mb-3 text-sm text-orange-800">
                    {order.delayReason || "Your delivery is delayed."}
                </p>

                {/* Revised estimate */}
                {order.revisedEstimate && (
                    <div className="rounded bg-white bg-opacity-50 p-2">
                        <p className="text-xs text-orange-700">
                            <strong>New estimated delivery:</strong> {order.revisedEstimate}
                        </p>
                    </div>
                )}
            </div>
        );
    }

    // Delivered but not received alert
    if (order.isNotReceived) {
        return (
            <div className="mx-4 mt-4 rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
                {/* Error icon and title */}
                <div className="mb-2 flex items-start gap-3">
                    <div className="text-xl">🚨</div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-red-900">
                            Delivery issue reported
                        </h3>
                    </div>
                </div>

                {/* Description */}
                <p className="mb-3 text-sm text-red-800">
                    We marked this as delivered on {order.completedAt}, but we're here to
                    help if you didn't receive it.
                </p>

                {/* Call to action */}
                <button className="rounded bg-red-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700">
                    Report missing package
                </button>
            </div>
        );
    }

    return null;
}