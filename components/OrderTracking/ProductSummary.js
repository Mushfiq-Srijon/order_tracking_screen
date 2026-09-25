/**
 * ProductSummary Component
 * 
 * Displays a card showing:
 * - Product image/emoji
 * - Product name
 * - Quantity
 * - Price
 * 
 * Props:
 *   - product: Product object with name, qty, price, image
 */

import React from "react";

export default function ProductSummary({ product }) {
    return (
        <div className="mx-4 mt-4 rounded-lg border border-gray-200 bg-white p-4">
            {/* Product header */}
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                📋 Order Summary
            </p>

            {/* Product card container */}
            <div className="flex gap-4">
                {/* Product Image/Icon */}
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-4xl">
                    {product.image}
                </div>

                {/* Product Details */}
                <div className="flex flex-1 flex-col justify-between min-w-0">
                    {/* Product name */}
                    <div>
                        <h3 className="mb-1 font-semibold text-black line-clamp-2">
                            {product.name}
                        </h3>
                        <p className="text-xs text-gray-500">Qty: {product.qty}</p>
                    </div>

                    {/* Product price */}
                    <div>
                        <p className="text-lg font-semibold text-gray-900">
                            ${product.price.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>

            {/* View details button */}
            <button className="mt-4 w-full rounded-lg border border-gray-300 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
                View full order details
            </button>
        </div>
    );
}