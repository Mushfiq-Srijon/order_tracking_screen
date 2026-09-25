import React, { useEffect, useState } from "react";
import StatusAlert from "./StatusAlert";
import TimelineStatus from "./TimelineStatus";
import OrderInfoCard from "./OrderInfoCard";
import ProductSummary from "./ProductSummary";
import SupportActions from "./SupportActions";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";
import Icon from "./Icons";

const defaultOrder = {
    id: "ORD-001",
    status: "shipped",
    statusLabel: "On the way",
    statusDescription: "Your order is moving through the network.",
    estimatedDeliveryDate: "Sep 27, 2026",
    estimatedDeliveryTime: "2:00 PM – 6:00 PM",
    isDelayed: false,
    isNotReceived: false,
    trackingAvailable: true,
    trackingNumber: "1Z999AA10123456784",
    product: { name: "Wireless Headphones", qty: 1, price: 89.99, image: "🎧" },
    timeline: [],
};

export default function OrderTracking({ orderId = null, mockData = null }) {
    const [pageState, setPageState] = useState("loaded");
    const [notice, setNotice] = useState("");
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "light";
        return window.localStorage.getItem("order-tracking-theme") || "light";
    });
    // Static demo data is applied immediately so switching the selector feels like
    // a real product control. LoadingState remains available for a real API.
    const order = mockData || { ...defaultOrder, id: orderId || defaultOrder.id };

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem("order-tracking-theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");

    const handleRetry = () => {
        setPageState("loading");
        window.setTimeout(() => setPageState("loaded"), 550);
    };

    const handleContactSupport = () => {
        setNotice("Support is ready to help. A chat request has been started for this order.");
    };

    const handleReportIssue = () => {
        setNotice("Thanks — your delivery issue was submitted. Support will follow up within 24 hours.");
    };

    if (pageState === "loading") return <LoadingState />;
    if (pageState === "error") return <ErrorState onRetry={handleRetry} />;
    if (pageState === "empty" || !order) return <EmptyState />;

    return (
        <div className="order-tracking">
            <header className="tracking-header">
                <button className="icon-button" type="button" aria-label="Go back">
                    <Icon name="arrowLeft" size={21} />
                </button>
                <div className="tracking-header__copy">
                    <p className="eyebrow">Order tracking</p>
                    <h1>Where&apos;s my order?</h1>
                </div>
                <div className="tracking-header__actions">
                    <span className="order-id">#{order.id}</span>
                    <button
                        className="theme-toggle"
                        type="button"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                    >
                        <Icon name={theme === "light" ? "moon" : "sun"} size={17} />
                    </button>
                </div>
            </header>

            <section className={`status-hero ${order.isDelayed ? "status-hero--delayed" : order.isNotReceived ? "status-hero--issue" : ""}`}>
                <div className="status-hero__topline">
                    <span className="status-badge">
                        <span className="status-badge__dot" />
                        {order.statusLabel}
                    </span>
                    <span className="status-step">{order.status === "delivered" ? "4 of 4" : order.status === "processing" ? "1 of 4" : "2 of 4"}</span>
                </div>
                <h2>{order.statusLabel}</h2>
                <p>{order.statusDescription}</p>
            </section>

            <StatusAlert order={order} onReportIssue={handleReportIssue} />

            <section className="surface-card timeline-card" aria-labelledby="progress-heading">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">Delivery progress</p>
                        <h2 id="progress-heading">Your package journey</h2>
                    </div>
                    <Icon name="truck" size={22} />
                </div>
                <TimelineStatus timeline={order.timeline} isDelayed={order.isDelayed} />
            </section>

            <OrderInfoCard order={order} />
            <ProductSummary product={order.product} />
            <SupportActions
                order={order}
                onContactSupport={handleContactSupport}
                onReportIssue={handleReportIssue}
            />

            {notice && (
                <div className="toast" role="status">
                    <span className="toast__icon"><Icon name="check" size={17} /></span>
                    <span>{notice}</span>
                    <button type="button" onClick={() => setNotice("")} aria-label="Dismiss notification">×</button>
                </div>
            )}
        </div>
    );
}
