/**
 * TimelineStatus Component
 * 
 * Displays a vertical timeline showing order progression through 4 statuses:
 * Processing → Shipped → Out for Delivery → Delivered
 * 
 * Props:
 *   - timeline: Array of timeline step objects
 *   - isDelayed: Boolean indicating if order is delayed
 */

import React from "react";

export default function TimelineStatus({ timeline, isDelayed }) {
    // Map status names to emoji icons for quick visual recognition
    const statusIcons = {
        processing: "📦",
        shipped: "🚚",
        outForDelivery: "🚗",
        delivered: "✓"
    };

    /**
     * Determines Tailwind classes based on step state
     * Returns appropriate styling for completed, current, delayed, or pending steps
     */
    const getStepClasses = (step) => {
        let baseClasses = "flex gap-3 relative py-4";

        if (step.completed && !step.current) {
            // Completed step (in the past)
            return baseClasses;
        } else if (step.current) {
            // Current step (happening now)
            if (isDelayed) {
                // Current + delayed
                return baseClasses;
            } else {
                // Current + on-time
                return baseClasses;
            }
        } else {
            // Future step
            return baseClasses;
        }
    };

    /**
     * Determines indicator styling based on step state
     */
    const getIndicatorClasses = (step) => {
        let baseClasses = "flex items-center justify-center w-12 h-12 min-w-12 rounded-full font-semibold text-lg transition-all duration-300 flex-shrink-0";

        if (step.completed && !step.current) {
            // Completed: green background
            return baseClasses + " bg-green-500 border-2 border-green-500 text-white";
        } else if (step.current) {
            // Current step
            if (isDelayed) {
                // Delayed: orange background with glow
                return (
                    baseClasses +
                    " bg-orange-500 border-2 border-orange-500 text-white shadow-lg shadow-orange-200 scale-105"
                );
            } else {
                // On-time: blue background with glow
                return (
                    baseClasses +
                    " bg-blue-600 border-2 border-blue-600 text-white shadow-lg shadow-blue-200 scale-105"
                );
            }
        } else {
            // Future: gray background
            return baseClasses + " bg-gray-100 border-2 border-gray-300 text-gray-500";
        }
    };

    /**
     * Determines label styling based on step state
     */
    const getLabelClasses = (step) => {
        let baseClasses = "text-base font-medium mb-1";

        if (step.completed && !step.current) {
            return baseClasses + " text-black";
        } else if (step.current) {
            if (isDelayed) {
                return baseClasses + " text-orange-600 font-semibold";
            } else {
                return baseClasses + " text-blue-600 font-semibold";
            }
        } else {
            return baseClasses + " text-gray-400";
        }
    };

    /**
     * Determines date text styling based on step state
     */
    const getDateClasses = (step) => {
        let baseClasses = "text-sm";

        if (step.completed && !step.current) {
            return baseClasses + " text-gray-600";
        } else if (step.current) {
            if (isDelayed) {
                return baseClasses + " text-orange-500 font-medium";
            } else {
                return baseClasses + " text-blue-600 font-medium";
            }
        } else {
            return baseClasses + " text-gray-300";
        }
    };

    /**
     * Determines connector line styling (line between steps)
     */
    const getConnectorClasses = (step) => {
        let baseClasses = "h-8 w-0.5 transition-colors duration-300";

        if (step.completed) {
            // Completed: green line
            return baseClasses + " bg-green-500 ml-5.5";
        } else {
            // Pending: light gray line
            return baseClasses + " bg-gray-200 ml-5.5";
        }
    };

    return (
        <div className="px-4 py-6 bg-white">
            {/* Main timeline track */}
            <div className="flex flex-col gap-0">
                {timeline.map((step, index) => (
                    <React.Fragment key={step.status}>
                        {/* Timeline Step */}
                        <div className={getStepClasses(step)}>
                            {/* Step Indicator Circle */}
                            <div className={getIndicatorClasses(step)}>
                                {step.completed && !step.current ? (
                                    // Checkmark for completed steps
                                    <span className="text-xl">✓</span>
                                ) : (
                                    // Icon for current/pending steps
                                    <span>{statusIcons[step.status]}</span>
                                )}
                            </div>

                            {/* Step Content: Label & Date */}
                            <div className="flex flex-col justify-center flex-1 min-w-0">
                                <div className={getLabelClasses(step)}>{step.label}</div>
                                <div className={getDateClasses(step)}>{step.date}</div>
                            </div>
                        </div>

                        {/* Connector Line (not after last step) */}
                        {index < timeline.length - 1 && (
                            <div className={getConnectorClasses(step)}></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}