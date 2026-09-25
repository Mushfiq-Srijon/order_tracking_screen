/**
 * OrderTracking Component (Main)
 * 
 * Orchestrates all order tracking sub-components and manages:
 * - Loading/error/empty states
 * - Data fetching simulation
 * - Action handlers for support and issue reporting
 * 
 * Props:
 *   - orderId: The order ID to load (optional)
 */

import React, { useState, useEffect } from "react";
import StatusAlert from "./StatusAlert";
import TimelineStatus from "./TimelineStatus";
import OrderInfoCard from "./OrderInfoCard";
import ProductSummary from "./ProductSummary";
import SupportActions from "./SupportActions";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";

export default function OrderTracking({ orderId = null, mockData = null }) {
    // State management
    const [order, setOrder] = useState(null);
    const [pageState, setPageState] = useState("loading"); // "loading", "loaded", "error", "empty"
    const [error, setError] = useState(null);

    /**
 * Simulate fetching order data
 * In a real app, this would call an API
 * For testing, accepts mockData prop
 */
    useEffect(() => {
        const fetchOrder = async () => {
            try {
                setPageState("loading");
                setError(null);

                // Simulate network delay
                await new Promise((resolve) => setTimeout(resolve, 1000));

                // Use provided mock data, or default mock order
                const fetchedOrder = mockData || {
                    id: orderId || "ORD-001",
                    status: "shipped",
                    estimatedDeliveryDate: "2026-09-27",
                    estimatedDeliveryTime: "2:00 PM - 6:00 PM",
                    isDelayed: false,
                    isNotReceived: false,
                    trackingAvailable: true,
                    trackingNumber: "1Z999AA10123456784",
                    product: {
                        name: "Wireless Headphones",
                        qty: 1,
                        price: 89.99,
                        image: "🎧"
                    },
                    timeline: [
                        {
                            status: "processing",
                            label: "Processing",
                            date: "Sep 24, 10:30 AM",
                            completed: true,
                            current: false
                        },
                        {
                            status: "shipped",
                            label: "Shipped",
                            date: "Sep 25, 2:45 PM",
                            completed: true,
                            current: true
                        },
                        {
                            status: "outForDelivery",
                            label: "Out for Delivery",
                            date: "Sep 27, TBD",
                            completed: false,
                            current: false
                        },
                        {
                            status: "delivered",
                            label: "Delivered",
                            date: "Sep 27, TBD",
                            completed: false,
                            current: false
                        }
                    ]
                };

                if (fetchedOrder) {
                    setOrder(fetchedOrder);
                    setPageState("loaded");
                } else {
                    setPageState("empty");
                }
            } catch (err) {
                setError(err.message || "Failed to load order. Please try again.");
                setPageState("error");
            }
        };

        fetchOrder();
    }, [orderId, mockData]);

    /**
     * Handle retry when error occurs
     */
    const handleRetry = () => {
        setPageState("loading");
        setError(null);
        // Re-trigger the effect by changing a dependency
        // In real app, would retry the API call
        setTimeout(() => {
            setPageState("loaded");
        }, 1000);
    };

    /**
     * Handle contact support action
     * In real app, would open chat, modal, or navigate to support page
     */
    const handleContactSupport = () => {
        console.log("Contact support for order:", order.id);
        // Example implementations:
        // - window.open('/support/chat');
        // - openModal(SupportChatModal);
        // - analytics.track('support_contact', { orderId: order.id });
        alert(
            `Support chat opened for order ${order.id}. In production, this would open a live chat or contact form.`
        );
    };

    /**
     * Handle report issue action
     * In real app, would submit issue to backend
     */
    const handleReportIssue = (message) => {
        console.log("Issue reported for order:", order.id, message);
        // Example implementations:
        // - await fetch(`/api/orders/${order.id}/report-issue`, { method: 'POST', body: JSON.stringify({ message }) });
        // - analytics.track('issue_reported', { orderId: order.id, issue: message });
        alert(
            `Thank you for reporting this issue. Our support team will contact you within 24 hours about order ${order.id}.`
        );
    };

    // Render different states
    if (pageState === "loading") {
        return <LoadingState />;
    }

    if (pageState === "error") {
        return <ErrorState error={error} onRetry={handleRetry} />;
    }

    if (pageState === "empty" || !order) {
        return <EmptyState />;
    }

    // Render loaded order tracking screen
    return (
        <div className="bg-gray-50 pb-8">
            {/* Header */}
            <div className="border-b border-gray-200 bg-white px-4 py-4 sticky top-0 z-10">
                <h1 className="text-xl font-bold text-black">Track Your Order</h1>
                <p className="mt-1 text-sm text-gray-600">Order #{order.id}</p>
            </div>

            {/* Main content */}
            <div className="mx-auto max-w-md">
                {/* StatusAlert - appears for delayed/not received */}
                <StatusAlert order={order} />

                {/* Card wrapper for timeline and info */}
                <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-white">
                    {/* Timeline Component */}
                    <TimelineStatus timeline={order.timeline} isDelayed={order.isDelayed} />
                </div>

                {/* Order Info Card - delivery date, order #, tracking # */}
                <OrderInfoCard order={order} />

                {/* Product Summary - what was ordered */}
                <ProductSummary product={order.product} />

                {/* Support Actions - contact support or report issue */}
                <SupportActions
                    order={order}
                    onContactSupport={handleContactSupport}
                    onReportIssue={handleReportIssue}
                />
            </div>
        </div>
    );
}