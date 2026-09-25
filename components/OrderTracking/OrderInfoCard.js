/**
 * OrderInfoCard Component
 * 
 * Displays key order information:
 * - Estimated delivery date and time
 * - Order number
 * - Tracking number (with copy functionality)
 * - Message if tracking not available yet
 * 
 * Props:
 *   - order: Order object
 */

import React, { useState } from "react";

export default function OrderInfoCard({ order }) {
    // State for copy-to-clipboard feedback
    const [copiedTrackingNumber, setCopiedTrackingNumber] = useState(false);

    /**
     * Handles copying tracking number to clipboard
     * Shows brief "Copied!" feedback
     */
    const handleCopyTracking = () => {
        if (order.trackingNumber) {
            navigator.clipboard.writeText(order.trackingNumber);
            setCopiedTrackingNumber(true);

            // Reset feedback after 2 seconds
            setTimeout(() => {
                setCopiedTrackingNumber(false);
            }, 2000);
        }
    };

    /**
     * Determines which delivery date to show
     * If delayed, show revised estimate; otherwise show original
     */
    const deliveryDate =
        order.isDelayed && order.revisedEstimate
            ? order.revisedEstimate
            : order.estimatedDeliveryDate;

    return (
        <div className="mx-4 mt-4 rounded-lg border border-gray-200 bg-white p-4">
            {/* Delivery Date Section */}
            <div className="mb-4 pb-4 border-b border-gray-100">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    📅 Estimated Delivery
                </p>

                {deliveryDate ? (
                    <div>
                        <p className="text-lg font-semibold text-black">{deliveryDate}</p>
                        {order.estimatedDeliveryTime && (
                            <p className="text-sm text-gray-600">{order.estimatedDeliveryTime}</p>
                        )}
                    </div>
                ) : (
                    <p className="text-sm text-gray-600">
                        {order.message ||
                            "Delivery date will be updated soon"}
                    </p>
                )}
            </div>

            {/* Order Number Section */}
            <div className="mb-4 pb-4 border-b border-gray-100">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    📦 Order Number
                </p>
                <p className="font-mono text-base font-semibold text-black">{order.id}</p>
            </div>

            {/* Tracking Number Section */}
            {order.trackingAvailable ? (
                <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        🚚 Tracking Number
                    </p>

                    {/* Tracking number with copy button */}
                    <div className="flex items-center gap-2">
                        <code className="flex-1 rounded bg-gray-50 px-3 py-2 font-mono text-sm font-semibold text-black">
                            {order.trackingNumber}
                        </code>

                        {/* Copy button */}
                        <button
                            onClick={handleCopyTracking}
                            className={`rounded px-3 py-2 text-xs font-semibold transition-colors ${copiedTrackingNumber
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {copiedTrackingNumber ? "✓ Copied" : "Copy"}
                        </button>
                    </div>

                    {/* Info text about tracking */}
                    <p className="mt-2 text-xs text-gray-500">
                        Use this number to track your package on the carrier's website
                    </p>
                </div>
            ) : (
                /* Tracking not available yet message */
                <div className="rounded-lg bg-blue-50 p-3">
                    <p className="text-sm text-blue-900">
                        <strong>Tracking coming soon</strong>
                    </p>
                    <p className="mt-1 text-xs text-blue-800">
                        {order.message ||
                            "Tracking information will be available within 2-4 hours"}
                    </p>
                </div>
            )}
        </div>
    );
}