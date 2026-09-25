export default function LoadingState() {
    return (
        <div className="state-card loading-state" role="status" aria-label="Loading order details">
            <div className="skeleton skeleton--title" />
            <div className="skeleton skeleton--subtitle" />
            <div className="skeleton-timeline">
                {[1, 2, 3, 4].map((item) => <div className="skeleton-step" key={item}><span className="skeleton skeleton--circle" /><span><i className="skeleton skeleton--line" /><i className="skeleton skeleton--small" /></span></div>)}
            </div>
            <p>Loading your order…</p>
        </div>
    );
}
