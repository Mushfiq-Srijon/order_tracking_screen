import React, { useState } from "react";
import Icon from "./Icons";

export default function SupportActions({ onContactSupport, onReportIssue }) {
    const [showReportForm, setShowReportForm] = useState(false);
    const [reportMessage, setReportMessage] = useState("");

    const submitReport = (event) => {
        event.preventDefault();
        if (!reportMessage.trim()) return;
        onReportIssue?.(reportMessage);
        setReportMessage("");
        setShowReportForm(false);
    };

    return (
        <section className="surface-card support-card" aria-labelledby="support-heading">
            <div className="support-card__intro">
                <span className="support-icon"><Icon name="chat" size={20} /></span>
                <div>
                    <p className="eyebrow">Need a hand?</p>
                    <h2 id="support-heading">We&apos;re here to help</h2>
                </div>
            </div>
            <div className="support-actions">
                <button type="button" className="primary-button" onClick={onContactSupport}>
                    <Icon name="chat" size={18} /> Contact support
                </button>
                <button type="button" className="secondary-button" onClick={() => setShowReportForm((value) => !value)} aria-expanded={showReportForm}>
                    <Icon name="alert" size={18} /> Report an issue
                </button>
            </div>
            {showReportForm && (
                <form className="report-form" onSubmit={submitReport}>
                    <label htmlFor="issue-message">Tell us what happened</label>
                    <textarea
                        id="issue-message"
                        value={reportMessage}
                        onChange={(event) => setReportMessage(event.target.value)}
                        placeholder="Package missing, damaged, or something else?"
                        rows="3"
                        required
                    />
                    <div className="report-form__actions">
                        <button className="primary-button primary-button--danger" type="submit">Submit report</button>
                        <button className="link-button" type="button" onClick={() => { setShowReportForm(false); setReportMessage(""); }}>Cancel</button>
                    </div>
                    <p>Support typically responds within 24 hours.</p>
                </form>
            )}
        </section>
    );
}
