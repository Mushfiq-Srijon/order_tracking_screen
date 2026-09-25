export const mockOrders = {
    // Scenario 1: NORMAL PROGRESSION - Currently "Shipped" (on-time)
    normalOrder: {
        id: "ORD-001",
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
    },

    // Scenario 2: DELAYED ORDER - Estimated delivery has passed
    delayedOrder: {
        id: "ORD-002",
        status: "shipped",
        estimatedDeliveryDate: "2026-09-25", // Already passed
        estimatedDeliveryTime: "by end of day",
        isDelayed: true,
        isNotReceived: false,
        trackingAvailable: true,
        trackingNumber: "1Z999BB20234567895",
        delayReason: "Unexpected weather delay affecting carrier operations",
        revisedEstimate: "2026-09-29",
        product: {
            name: "USB-C Cable (2-pack)",
            qty: 2,
            price: 19.99,
            image: "🔌"
        },
        timeline: [
            {
                status: "processing",
                label: "Processing",
                date: "Sep 23, 9:15 AM",
                completed: true,
                current: false
            },
            {
                status: "shipped",
                label: "Shipped",
                date: "Sep 24, 4:20 PM",
                completed: true,
                current: true
            },
            {
                status: "outForDelivery",
                label: "Out for Delivery",
                date: "Sep 29, TBD",
                completed: false,
                current: false
            },
            {
                status: "delivered",
                label: "Delivered",
                date: "Sep 29, TBD",
                completed: false,
                current: false
            }
        ]
    },

    // Scenario 3: DELIVERED BUT NOT RECEIVED - Says delivered, customer reports missing
    deliveredNotReceived: {
        id: "ORD-003",
        status: "delivered",
        estimatedDeliveryDate: "2026-09-26",
        isDelayed: false,
        isNotReceived: true,
        trackingAvailable: true,
        trackingNumber: "1Z999CC30345678906",
        completedAt: "2026-09-26 3:45 PM",
        product: {
            name: "Smartphone Case",
            qty: 1,
            price: 24.99,
            image: "📱"
        },
        timeline: [
            {
                status: "processing",
                label: "Processing",
                date: "Sep 24, 11:20 AM",
                completed: true,
                current: false
            },
            {
                status: "shipped",
                label: "Shipped",
                date: "Sep 25, 1:30 PM",
                completed: true,
                current: false
            },
            {
                status: "outForDelivery",
                label: "Out for Delivery",
                date: "Sep 26, 8:15 AM",
                completed: true,
                current: false
            },
            {
                status: "delivered",
                label: "Delivered",
                date: "Sep 26, 3:45 PM",
                completed: true,
                current: true
            }
        ]
    },

    // Scenario 4: TRACKING NOT AVAILABLE YET - Order just placed
    trackingNotAvailable: {
        id: "ORD-004",
        status: "processing",
        estimatedDeliveryDate: null,
        isDelayed: false,
        isNotReceived: false,
        trackingAvailable: false,
        message: "Your order is being prepared. Tracking information will be available within 2-4 hours.",
        product: {
            name: "Phone Case",
            qty: 1,
            price: 24.99,
            image: "📱"
        },
        timeline: [
            {
                status: "processing",
                label: "Processing",
                date: "Just now",
                completed: true,
                current: true
            },
            {
                status: "shipped",
                label: "Shipped",
                date: "Soon",
                completed: false,
                current: false
            },
            {
                status: "outForDelivery",
                label: "Out for Delivery",
                date: "TBD",
                completed: false,
                current: false
            },
            {
                status: "delivered",
                label: "Delivered",
                date: "TBD",
                completed: false,
                current: false
            }
        ]
    }
};