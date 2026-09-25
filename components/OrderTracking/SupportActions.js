/**
 * SupportActions Component
 * 
 * Displays action buttons for:
 * - Contact support/customer service
 * - Report a delivery issue (especially for not received orders)
 * 
 * Props:
 *   - order: Order object
 *   - onContactSupport: Callback function
 *   - onReportIssue: Callback function
 */

import React, { useState } from "react";

export default function SupportActions({ order, onContactSupport, onReportIssue }) {
    // State for issue report modal/form
    const [showReportForm, setShowReportForm] = useState(false);
    const [reportMessage, setReportMessage] = useState("");

    /**
     * Handles report issue submission
     */
    const handleReportSubmit = () => {
        if (reportMessage.trim()) {
            onReportIssue && onReportIssue(reportMessage);
            setReportMessage("");
            setShowReportForm(false);
        }
    };

    return (
        <div className="mx-4 mt-4 mb-6 rounded-lg border border-gray-200 bg-white p-4">
            {/* Section header */}
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                💬 Need Help?
            </p>

            {/* Action buttons container */}
            <div className="flex flex-col gap-3">
                {/* Contact Support Button */}
                <button
                    onClick={onContactSupport}
                    className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800"
                >
                    <span>💬</span>
                    <span>Contact Support</span>
                </button>

                {/* Report Issue Button */}
                <button
                    onClick={() => setShowReportForm(!showReportForm)}
                    className="flex items-center justify-center gap-2 rounded-lg border-2 border-red-500 px-4 py-3 font-semibold text-red-600 transition-colors hover:bg-red-50 active:bg-red-100"
                >
                    <span>⚠️</span>
                    <span>Report a delivery issue</span>
                </button>
            </div>

            {/* Report Issue Form (conditional) */}
            {showReportForm && (
                <div className="mt-4 border-t border-gray-100 pt-4">
                    <p className="mb-3 text-sm font-semibold text-gray-900">
                        What's the issue?
                    </p>

                    {/* Textarea for message */}
                    <textarea
                        value={reportMessage}
                        onChange={(e) => setReportMessage(e.target.value)}
                        placeholder="Describe what happened (package not received, damaged, etc.)"
                        className="mb-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        rows="3"
                    />

                    {/* Action buttons for form */}
                    <div className="flex gap-2">
                        <button
                            onClick={handleReportSubmit}
                            disabled={!reportMessage.trim()}
                            className="flex-1 rounded-lg bg-red-600 px-3 py-2 font-semibold text-white transition-colors hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            Submit report
                        </button>

                        <button
                            onClick={() => {
                                setShowReportForm(false);
                                setReportMessage("");
                            }}
                            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                    </div>

                    {/* Info text */}
                    <p className="mt-3 text-xs text-gray-500">
                        Our support team will review your report and contact you within 24 hours.
                    </p>
                </div>
            )}
        </div>
    );
}