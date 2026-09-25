import React, { useState } from "react";
import OrderTracking from "../components/OrderTracking/OrderTracking";
import { mockOrder, scenarioOptions } from "../data/mockOrders";

export default function OrderTrackingPage() {
    const [selectedScenario, setSelectedScenario] = useState("onTime");
    const selectedOrder = {
        ...mockOrder,
        ...mockOrder.scenarios[selectedScenario],
        product: mockOrder.product,
    };

    return (
        <main className="tracking-page">
            <div className="tracking-shell">
                <div className="demo-control" aria-label="Demo scenario selector">
                    <div>
                        <p className="eyebrow">Demo mode</p>
                        <p className="demo-control__hint">Preview the key order states</p>
                    </div>
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
                        </select>
                    </label>
                </div>

                <OrderTracking key={selectedScenario} orderId={mockOrder.id} mockData={selectedOrder} />
            </div>
        </main>
    );
}
