import Icon from "./Icons";

const statusIcons = {
    processing: "package",
    shipped: "truck",
    outForDelivery: "truck",
    delivered: "check",
};

export default function TimelineStatus({ timeline = [], isDelayed }) {
    return (
        <div className="timeline" aria-label="Order delivery timeline">
            {timeline.map((step, index) => {
                const isComplete = step.completed && !step.current;
                const stateClass = isComplete ? "timeline-step--complete" : step.current ? isDelayed ? "timeline-step--delayed" : "timeline-step--current" : "timeline-step--upcoming";
                return (
                    <div className="timeline-step-wrap" key={step.status}>
                        <div className={`timeline-step ${stateClass}`}>
                            <div className="timeline-step__indicator">
                                <Icon name={isComplete ? "check" : statusIcons[step.status]} size={17} />
                            </div>
                            <div className="timeline-step__copy">
                                <div className="timeline-step__label">
                                    <strong>{step.label}</strong>
                                    {step.current && <span className="current-label">Current</span>}
                                </div>
                                <span>{step.date}</span>
                            </div>
                        </div>
                        {index < timeline.length - 1 && <div className={`timeline-connector ${step.completed ? "timeline-connector--complete" : ""}`} />}
                    </div>
                );
            })}
        </div>
    );
}
