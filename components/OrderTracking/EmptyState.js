import Icon from "./Icons";

export default function EmptyState() {
    return (
        <div className="state-card empty-state">
            <span className="state-icon"><Icon name="package" size={25} /></span>
            <p className="eyebrow">No active orders</p>
            <h2>Nothing to track yet</h2>
            <p>Your next order will appear here as soon as it ships.</p>
            <button className="primary-button" type="button">View order history</button>
        </div>
    );
}
