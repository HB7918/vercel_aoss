import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vercel Dashboard - OpenSearch Serverless Integration',
  description: 'Demo showing Amazon OpenSearch Serverless V2 integration with Vercel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
