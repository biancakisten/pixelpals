import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'Pixel Pals | Web Development, AI Solutions & Shopify South Africa',
  description:
    'Pixel Pals partners with businesses and agencies worldwide for freelance web development, Shopify, UI/UX, AI solutions and automation.',
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
