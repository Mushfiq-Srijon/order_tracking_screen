const timeline = {
    onTime: [
        { status: "processing", label: "Processing", date: "Sep 24, 10:30 AM", completed: true, current: false },
        { status: "shipped", label: "Shipped", date: "Sep 25, 2:45 PM", completed: true, current: true },
        { status: "outForDelivery", label: "Out for delivery", date: "Expected Sep 27", completed: false, current: false },
        { status: "delivered", label: "Delivered", date: "Expected Sep 27", completed: false, current: false },
    ],
    delayed: [
        { status: "processing", label: "Processing", date: "Sep 24, 10:30 AM", completed: true, current: false },
        { status: "shipped", label: "Shipped", date: "Sep 25, 2:45 PM", completed: true, current: true },
        { status: "outForDelivery", label: "Out for delivery", date: "Rescheduled Sep 29", completed: false, current: false },
        { status: "delivered", label: "Delivered", date: "Rescheduled Sep 29", completed: false, current: false },
    ],
    notReceived: [
        { status: "processing", label: "Processing", date: "Sep 24, 10:30 AM", completed: true, current: false },
        { status: "shipped", label: "Shipped", date: "Sep 25, 2:45 PM", completed: true, current: false },
        { status: "outForDelivery", label: "Out for delivery", date: "Sep 27, 8:15 AM", completed: true, current: false },
        { status: "delivered", label: "Delivered", date: "Sep 27, 3:45 PM", completed: true, current: true },
    ],
    noTracking: [
        { status: "processing", label: "Processing", date: "Just now", completed: true, current: true },
        { status: "shipped", label: "Shipped", date: "Usually within 1 day", completed: false, current: false },
        { status: "outForDelivery", label: "Out for delivery", date: "Coming soon", completed: false, current: false },
        { status: "delivered", label: "Delivered", date: "Coming soon", completed: false, current: false },
    ],
};

// One order with four demo states. Keeping the order identity consistent makes it
// clear that the selector is demonstrating UI states, not switching orders.
export const mockOrder = {
    id: "ORD-001",
    product: {
        name: "Wireless Headphones",
        qty: 1,
        price: 89.99,
        image: "🎧",
    },
    scenarios: {
        onTime: {
            label: "On-time delivery",
            status: "shipped",
            statusLabel: "On the way",
            statusDescription: "Your order is moving through the network.",
            estimatedDeliveryDate: "Sep 27, 2026",
            estimatedDeliveryTime: "2:00 PM – 6:00 PM",
            isDelayed: false,
            isNotReceived: false,
            trackingAvailable: true,
            trackingNumber: "1Z999AA10123456784",
            timeline: timeline.onTime,
        },
        delayed: {
            label: "Delayed order",
            status: "shipped",
            statusLabel: "Delivery delayed",
            statusDescription: "We’re sorry — your package needs a little more time.",
            estimatedDeliveryDate: "Sep 25, 2026",
            estimatedDeliveryTime: "Original estimate passed",
            isDelayed: true,
            isNotReceived: false,
            trackingAvailable: true,
            trackingNumber: "1Z999AA10123456784",
            delayReason: "Unexpected weather has slowed carrier operations.",
            revisedEstimate: "Sep 29, 2026",
            revisedEstimateTime: "By end of day",
            timeline: timeline.delayed,
        },
        notReceived: {
            label: "Delivered but not received",
            status: "delivered",
            statusLabel: "Marked as delivered",
            statusDescription: "The carrier marked this package as delivered.",
            estimatedDeliveryDate: "Sep 27, 2026",
            estimatedDeliveryTime: "Delivered at 3:45 PM",
            isDelayed: false,
            isNotReceived: true,
            trackingAvailable: true,
            trackingNumber: "1Z999AA10123456784",
            completedAt: "Sep 27, 2026 at 3:45 PM",
            timeline: timeline.notReceived,
        },
        noTracking: {
            label: "Tracking not available yet",
            status: "processing",
            statusLabel: "Preparing your order",
            statusDescription: "Your order is confirmed and getting ready to ship.",
            estimatedDeliveryDate: null,
            estimatedDeliveryTime: null,
            isDelayed: false,
            isNotReceived: false,
            trackingAvailable: false,
            message: "Tracking usually becomes available within 2–4 hours after your order is packed.",
            timeline: timeline.noTracking,
        },
    },
};

export const scenarioOptions = Object.entries(mockOrder.scenarios).map(([value, scenario]) => ({
    value,
    label: scenario.label,
}));
