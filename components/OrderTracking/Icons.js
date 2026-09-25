export default function Icon({ name, size = 20, strokeWidth = 1.8 }) {
    const common = {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
    };

    const paths = {
        arrowLeft: <><path d="m15 18-6-6 6-6" /><path d="M9 12h10" /></>,
        calendar: <><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
        copy: <><rect width="13" height="13" x="9" y="9" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>,
        check: <path d="m5 12 4 4L19 6" />,
        chevronDown: <path d="m6 9 6 6 6-6" />,
        chat: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5 8.5 8.5 0 0 1 8.7 4a8.4 8.4 0 0 1 3.8-.9h.5A8.5 8.5 0 0 1 21 11v.5Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></>,
        alert: <><path d="M10.3 3.1 2.3 17a2 2 0 0 0 1.7 3h16a2 2 0 0 0 1.7-3l-8-13.9a2 2 0 0 0-3.4 0Z" /><path d="M12 9v4M12 17h.01" /></>,
        package: <><path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="M3.3 7 12 12l8.7-5M12 22V12" /></>,
        truck: <><path d="M10 17h4V5H2v12h3" /><path d="M14 8h4l4 4v5h-3M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="16.5" cy="17.5" r="2.5" /></>,
        external: <><path d="M14 3h7v7M10 14 21 3" /><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></>,
        sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></>,
        moon: <path d="M20.9 15.1A8.5 8.5 0 0 1 8.9 3.1 8.5 8.5 0 1 0 20.9 15.1Z" />,
    };

    return <svg {...common}>{paths[name]}</svg>;
}
