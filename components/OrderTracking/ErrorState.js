/**
 * ErrorState Component
 * 
 * Displays when order data fails to load
 * Provides helpful message and retry option
 * 
 * Props:
 *   - error: Error message to display
 *   - onRetry: Callback function to retry loading
 */

import React from "react";

export default function ErrorState({ error, onRetry }) {
    return (
        <div className="mx-auto max-w-md">
            {/* Error container */}
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 text-center">
                {/* Error icon */}
                <div className="mb-4 text-5xl">😕</div>

                {/* Error title */}
                <h2 className="mb-2 text-lg font-semibold text-red-900">
                    Unable to load order
                </h2>

                {/* Error message */}
                <p className="mb-4 text-sm text-red-800">
                    {error || "Something went wrong while loading your order. Please try again."}
                </p>

                {/* Retry button */}
                <button
                    onClick={onRetry}
                    className="mb-3 w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-red-700 active:bg-red-800"
                >
                    Try again
                </button>

                {/* Support link */}

                <a href="#"
                    className="inline-block text-sm font-semibold text-red-600 hover:text-red-700 underline"
                >
                    Contact support if the problem persists
                </a>
            </div>

            {/* Helpful info section */}
            <div className="mt-6 rounded-lg bg-gray-50 p-4">
                <p className="mb-2 text-xs font-semibold uppercase text-gray-500">
                    Need help?
                </p>
                <ul className="space-y-2 text-xs text-gray-600">
                    <li>✓ Check your internet connection</li>
                    <li>✓ Try refreshing the page</li>
                    <li>✓ Contact our support team for assistance</li>
                </ul>
            </div>
        </div>
    );
}