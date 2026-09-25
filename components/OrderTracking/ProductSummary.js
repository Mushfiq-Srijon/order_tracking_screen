import React, { useState } from "react";
import Icon from "./Icons";

export default function ProductSummary({ product }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="surface-card product-card" aria-labelledby="product-heading">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">What&apos;s inside</p>
                    <h2 id="product-heading">Order summary</h2>
                </div>
                <Icon name="package" size={21} />
            </div>
            <div className="product-row">
                <div className="product-image" aria-hidden="true">{product.image}</div>
                <div className="product-copy">
                    <h3>{product.name}</h3>
                    <span>Qty {product.qty}</span>
                    <strong>${product.price.toFixed(2)}</strong>
                </div>
            </div>
            <button className="details-toggle" type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
                {expanded ? "Hide order details" : "View order details"}
                <span className={expanded ? "details-toggle__chevron details-toggle__chevron--open" : "details-toggle__chevron"}><Icon name="chevronDown" size={16} /></span>
            </button>
            {expanded && (
                <div className="product-details">
                    <div><span>Item subtotal</span><strong>${product.price.toFixed(2)}</strong></div>
                    <div><span>Shipping</span><strong>Free</strong></div>
                    <div className="product-details__total"><span>Total</span><strong>${product.price.toFixed(2)}</strong></div>
                </div>
            )}
        </section>
    );
}
