import Icon from "./Icons";

export default function StatusAlert({ order, onReportIssue }) {
    if (!order.isDelayed && !order.isNotReceived) return null;

    const delayed = order.isDelayed;
    return (
        <section className={`status-alert ${delayed ? "status-alert--delayed" : "status-alert--issue"}`} role="status">
            <span className="status-alert__icon"><Icon name="alert" size={19} /></span>
            <div className="status-alert__content">
                <h2>{delayed ? "Your delivery is running late" : "Didn’t receive this package?"}</h2>
                <p>{delayed ? order.delayReason : `The carrier marked this package delivered on ${order.completedAt}. We can help locate it.`}</p>
                {delayed ? (
                    <div className="status-alert__estimate">
                        <span>New estimated delivery</span>
                        <strong>{order.revisedEstimate} · {order.revisedEstimateTime}</strong>
                    </div>
                ) : (
                    <button type="button" className="text-button" onClick={onReportIssue}>Report a missing package <span>→</span></button>
                )}
            </div>
        </section>
    );
}
