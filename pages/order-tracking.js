import React, { useState } from "react";
import OrderTracking from "../components/OrderTracking/OrderTracking";
import { mockOrders } from "../data/mockOrders";

/**
 * Order Tracking Test Page
 * Test all scenarios with the full OrderTracking component
 */

export default function OrderTrackingPage() {
    const [selectedScenario, setSelectedScenario] = useState("normalOrder");

    const scenarios = [
        {
            key: "normalOrder",
            label: "✓ Normal Order",
            description: "On-time delivery, currently shipped"
        },
        {
            key: "delayedOrder",
            label: "⚠️ Delayed Order",
            description: "Delivery delayed, orange alert shown"
        },
        {
            key: "deliveredNotReceived",
            label: "🚨 Not Received",
            description: "Marked delivered, but customer reports missing"
        },
        {
            key: "trackingNotAvailable",
            label: "📦 No Tracking Yet",
            description: "Just ordered, tracking info coming soon"
        }
    ];

    const currentScenarioData = mockOrders[selectedScenario];

    return (
        <div className="bg-gray-50">
            {/* Test Controls */}
            <div className="sticky top-0 z-20 border-b border-gray-300 bg-white p-4 shadow-sm">
                <div className="mx-auto max-w-2xl">
                    <p className="mb-3 text-sm font-bold text-gray-900">
                        🧪 Test Order Tracking Scenarios
                    </p>

                    {/* Scenario buttons */}
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {scenarios.map((scenario) => (
                            <button
                                key={scenario.key}
                                onClick={() => setSelectedScenario(scenario.key)}
                                className={`rounded-lg px-3 py-2.5 text-xs font-semibold transition-all ${selectedScenario === scenario.key
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                    }`}
                            >
                                {scenario.label}
                            </button>
                        ))}
                    </div>

                    {/* Scenario description */}
                    <div className="mt-3 rounded-lg bg-blue-50 p-3">
                        <p className="text-xs text-blue-900">
                            <strong>Current:</strong>{" "}
                            {
                                scenarios.find((s) => s.key === selectedScenario)
                                    ?.description
                            }
                        </p>
                    </div>
                </div>
            </div>

            {/* Main OrderTracking Component with mock data */}
            <OrderTracking
                orderId={currentScenarioData.id}
                mockData={currentScenarioData}
            />

            {/* Scenario details for reference */}
            <div className="mx-auto max-w-md px-4 py-8">
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <p className="mb-3 text-sm font-semibold text-gray-900">
                        Order Details
                    </p>

                    <div className="space-y-2 text-xs text-gray-600">
                        <p>
                            <strong>Order ID:</strong> {currentScenarioData.id}
                        </p>
                        <p>
                            <strong>Status:</strong>{" "}
                            <span className="text-blue-600 font-medium">
                                {currentScenarioData.status}
                            </span>
                        </p>
                        <p>
                            <strong>Delayed:</strong>{" "}
                            <span
                                className={
                                    currentScenarioData.isDelayed
                                        ? "text-orange-600 font-medium"
                                        : "text-green-600"
                                }
                            >
                                {currentScenarioData.isDelayed ? "Yes" : "No"}
                            </span>
                        </p>
                        <p>
                            <strong>Not Received:</strong>{" "}
                            <span
                                className={
                                    currentScenarioData.isNotReceived
                                        ? "text-red-600 font-medium"
                                        : "text-green-600"
                                }
                            >
                                {currentScenarioData.isNotReceived ? "Yes" : "No"}
                            </span>
                        </p>
                        <p>
                            <strong>Tracking Available:</strong>{" "}
                            <span
                                className={
                                    currentScenarioData.trackingAvailable
                                        ? "text-green-600"
                                        : "text-gray-500"
                                }
                            >
                                {currentScenarioData.trackingAvailable ? "Yes" : "No"}
                            </span>
                        </p>
                        {currentScenarioData.delayReason && (
                            <p>
                                <strong>Delay Reason:</strong> {currentScenarioData.delayReason}
                            </p>
                        )}
                        {currentScenarioData.revisedEstimate && (
                            <p>
                                <strong>Revised Estimate:</strong>{" "}
                                {currentScenarioData.revisedEstimate}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Spacing at bottom */}
            <div className="h-8"></div>
        </div>
    );
}