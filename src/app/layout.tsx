import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Import Export Pro',
  description: 'Your trusted partner in global trade',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="has-scroll-smooth">
      <head>
        <style>{`
          html.has-scroll-smooth {
            overflow: hidden;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
          }
          html.has-scroll-dragging {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .has-scroll-smooth body {
            overflow: hidden;
          }
          .has-scroll-smooth [data-scroll-container] {
            min-height: 100vh;
          }
          [data-scroll-direction="horizontal"] [data-scroll-container] {
            height: 100vh;
            display: inline-block;
            white-space: nowrap;
          }
          [data-scroll-direction="horizontal"] [data-scroll-section] {
            display: inline-block;
            vertical-align: top;
            white-space: nowrap;
            height: 100%;
          }
          [data-scroll] {
            position: relative;
            will-change: transform;
          }
          [data-scroll-speed] {
            will-change: transform;
          }
          .c-scrollbar {
            position: absolute;
            right: 0;
            top: 0;
            width: 11px;
            height: 100%;
            transform-origin: center right;
            transition: transform 0.3s, opacity 0.3s;
            opacity: 0;
          }
          .c-scrollbar:hover {
            transform: scaleX(1.45);
          }
          .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
            opacity: 1;
          }
          .c-scrollbar_thumb {
            position: absolute;
            top: 0;
            right: 0;
            background-color: #000;
            opacity: 0.5;
            width: 7px;
            border-radius: 10px;
            margin: 2px;
            cursor: grab;
          }
          .has-scroll-dragging .c-scrollbar_thumb {
            cursor: grabbing;
          }
          .c-scrollbar_thumb:hover {
            background-color: #000;
            opacity: 0.8;
          }
          main {
            position: relative;
            width: 100%;
            height: 100%;
          }
          [data-scroll-container] {
            position: relative;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
} 