import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'Pixel Pals South Africa | Web Development & AI Solutions',
  description:
    'Pixel Pals builds modern websites, Shopify experiences, AI-powered software and business automation solutions for clients in South Africa and worldwide.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SZVTS0YC58"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-SZVTS0YC58');
            `,
          }}
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
