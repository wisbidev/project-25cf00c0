import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'aiteam — AI Team tự động build phần mềm của bạn',
  description: 'Describe your idea in Telegram and an AI engineering team builds it — from planning to deploy.',
  openGraph: {
    title: 'aiteam — AI Team tự động build phần mềm của bạn',
    description: 'Describe your idea in Telegram and an AI engineering team builds it — from planning to deploy.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
