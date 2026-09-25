# Order Tracking Screen

A polished, mobile-first order tracking experience for an e-commerce application. The screen makes delivery progress easy to understand through a visual timeline, clear status messaging, delivery details, product summary, and contextual support actions.

Repository: [github.com/Mushfiq-Srijon/order_tracking_screen](https://github.com/Mushfiq-Srijon/order_tracking_screen)

## What is included

- Responsive layout for approximately 360px–430px mobile widths
- Visual delivery timeline for Processing, Shipped, Out for delivery, and Delivered
- Current order status with estimated delivery date and time
- Product and order summary cards
- Tracking number copy interaction
- Expandable order details
- Contact support feedback interaction
- Delivery issue reporting form
- Loading, empty, and error state components
- Light/dark mode toggle with a persisted user preference
- Accessible labels, keyboard-friendly controls, and readable status contrast

## Demo scenarios

The app uses one consistent mock order and changes its presentation through the `Demo scenario` dropdown. This keeps the experience consistent while making the required states easy to review:

1. On-time delivery
2. Delayed order
3. Delivered but not received
4. Tracking not available yet

The scenario data lives in [`data/mockOrders.js`](./data/mockOrders.js). No backend or API integration is required.

## Tech stack

- Next.js 16 using the Pages Router
- React 19
- CSS with Tailwind CSS v4 support through PostCSS
- Static/mock data only

## Requirements

- Node.js 20.9.0 or newer
- npm 10 or newer recommended

You can check your installed versions with:

```bash
node --version
npm --version
```

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Mushfiq-Srijon/order_tracking_screen.git
   cd order_tracking_screen
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in a browser:

   - [http://localhost:3000](http://localhost:3000)
   - [http://localhost:3000/order-tracking](http://localhost:3000/order-tracking)

The root route and `/order-tracking` both open the order tracking screen. Changes to the source files are reflected automatically during development.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint checks |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production build locally |

To test the production build:

```bash
npm run build
npm run start
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```text
components/OrderTracking/
├── EmptyState.js
├── ErrorState.js
├── Icons.js
├── LoadingState.js
├── OrderInfoCard.js
├── OrderTracking.js
├── ProductSummary.js
├── StatusAlert.js
├── SupportActions.js
└── TimelineStatus.js

data/mockOrders.js       # Single mock order and its four demo states
pages/index.js            # Root route
pages/order-tracking.js   # Demo scenario selector page
styles/globals.css        # Global layout, responsive styling, and themes
```

## Notes for assessment review

- The delayed state shows the original estimate, reason for delay, revised estimate, and an appropriate next step.
- The delivered-but-not-received state explains what happened and provides a missing-package action.
- The no-tracking state explains why tracking is unavailable and what the customer should expect next.
- Support actions are intentionally UI-only. They display local confirmation feedback and do not send data to a backend.
- The theme preference is stored in `localStorage` under `order-tracking-theme`.
