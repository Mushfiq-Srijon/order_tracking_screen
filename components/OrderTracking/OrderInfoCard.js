import React, { useState } from "react";
import Icon from "./Icons";

export default function OrderInfoCard({ order }) {
    const [copied, setCopied] = useState(false);
    const deliveryDate = order.isDelayed && order.revisedEstimate ? order.revisedEstimate : order.estimatedDeliveryDate;

    const handleCopy = async () => {
        if (!order.trackingNumber) return;
        try {
            await navigator.clipboard.writeText(order.trackingNumber);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            setCopied(false);
        }
    };

    return (
        <section className="surface-card info-card" aria-labelledby="delivery-details-heading">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">Good to know</p>
                    <h2 id="delivery-details-heading">Delivery details</h2>
                </div>
                <Icon name="calendar" size={21} />
            </div>

            <div className="delivery-highlight">
                <span className="delivery-highlight__icon"><Icon name="calendar" size={18} /></span>
                <div>
                    <span className="field-label">{order.isDelayed ? "Updated delivery estimate" : "Estimated delivery"}</span>
                    {deliveryDate ? <strong>{deliveryDate}</strong> : <strong>We’ll update this soon</strong>}
                    {order.estimatedDeliveryTime && <span>{order.isDelayed ? order.revisedEstimateTime : order.estimatedDeliveryTime}</span>}
                </div>
            </div>

            <div className="info-grid">
                <div className="info-field">
                    <span className="field-label">Order number</span>
                    <strong>{order.id}</strong>
                </div>
                <div className="info-field">
                    <span className="field-label">Tracking</span>
                    {order.trackingAvailable ? (
                        <button className="tracking-copy" type="button" onClick={handleCopy} aria-label="Copy tracking number">
                            <span>{order.trackingNumber.slice(-8)}</span>
                            <Icon name={copied ? "check" : "copy"} size={15} />
                        </button>
                    ) : <strong className="muted-value">Not available yet</strong>}
                </div>
            </div>

            {!order.trackingAvailable && (
                <div className="info-note">
                    <span className="info-note__dot" />
                    <p>{order.message}</p>
                </div>
            )}
            {order.trackingAvailable && <p className="info-footnote">Tracking updates can take a few hours to appear after a carrier scan.</p>}
        </section>
    );
}
