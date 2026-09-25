import React, { useState } from "react";
import OrderTracking from "../components/OrderTracking/OrderTracking";
import { mockOrder, scenarioOptions } from "../data/mockOrders";

const statePreviewOptions = [
    { value: "loading", label: "Loading state" },
    { value: "error", label: "Error state" },
];

export default function OrderTrackingPage() {
    const [selectedScenario, setSelectedScenario] = useState("onTime");
    const isStatePreview = statePreviewOptions.some(({ value }) => value === selectedScenario);
    const selectedOrder = {
        ...mockOrder,
        ...(mockOrder.scenarios[selectedScenario] || mockOrder.scenarios.onTime),
        product: mockOrder.product,
    };

    return (
        <main className="tracking-page">
            <div className="tracking-shell">
                <div className="demo-control" aria-label="Demo scenario selector">
                    <div className="demo-control__copy">
                        <p className="eyebrow">Demo mode</p>
                        <p className="demo-control__hint">Preview the key order states</p>
                    </div>
                    <div className="demo-control__controls">
                        <label className="select-wrap">
                            <span className="sr-only">Demo scenario</span>
                            <select
                                value={selectedScenario}
                                onChange={(event) => setSelectedScenario(event.target.value)}
                                aria-label="Demo scenario"
                            >
                                {scenarioOptions.map((scenario) => (
                                    <option key={scenario.value} value={scenario.value}>
                                        {scenario.label}
                                    </option>
                                ))}
                                <option disabled>──────────</option>
                                {statePreviewOptions.map((state) => (
                                    <option key={state.value} value={state.value}>
                                        {state.label}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <div className="state-preview-buttons" aria-label="Standalone state previews">
                            {statePreviewOptions.map((state) => (
                                <button
                                    className={`state-preview-button ${selectedScenario === state.value ? "state-preview-button--active" : ""}`}
                                    key={state.value}
                                    type="button"
                                    onClick={() => setSelectedScenario(state.value)}
                                >
                                    <span className={`state-preview-button__dot state-preview-button__dot--${state.value}`} />
                                    {state.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <OrderTracking
                    key={selectedScenario}
                    orderId={mockOrder.id}
                    mockData={selectedOrder}
                    initialPageState={isStatePreview ? selectedScenario : "loaded"}
                />
            </div>
        </main>
    );
}
