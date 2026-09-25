import Icon from "./Icons";

export default function ErrorState({ error, onRetry }) {
    return (
        <div className="state-card error-state" role="alert">
            <span className="state-icon state-icon--error"><Icon name="alert" size={24} /></span>
            <p className="eyebrow">Something went wrong</p>
            <h2>We couldn&apos;t load this order</h2>
            <p>{error || "Check your connection and try again. Your order details are safe."}</p>
            <button className="primary-button" type="button" onClick={onRetry}>Try again</button>
        </div>
    );
}
