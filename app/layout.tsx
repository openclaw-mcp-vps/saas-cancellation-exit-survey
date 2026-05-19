import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CancelSurvey – Capture why customers cancel",
  description: "Embeddable cancellation flow that asks context-aware questions based on usage patterns and saves responses to reduce churn."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c9ae3e52-2e1e-4cfb-8f1d-a14e17aacd51"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
