import '../../styles/globals.css';

import { Roboto, Alegreya_SC } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const roboto = Roboto({ weight: '400', subsets: ['latin'], display: 'swap' });
const alegreyaSC = Alegreya_SC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Barsell Construction Inc.',
  description: `Serving the Bay Area for over 25 years, Barsell Construction Inc. is the tried and true business to get your home looking how you've always dreamed.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* Favicons */}
        <link
          rel='icon'
          href='/images/favicons/favicon.ico'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicons/favicon-16x16.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/images/favicons/android-chrome-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='512x512'
          href='/images/favicons/android-chrome-512x512.png'
        />
        <link
          rel='manifest'
          href='/images/favicons/site.webmanifest'
        />
        <link
          rel='preload'
          as='image'
          href='/images/bg.jpg'
        />

        <meta
          name='theme-color'
          content='#ffffff'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          name='robots'
          content='index, follow'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Barsell Construction Inc.'
        />
        <meta
          property='og:description'
          content="Serving the Bay Area for over 25 years, Barsell Construction Inc. is the tried and true business to get your home looking how you've always dreamed."
        />
        <meta
          property='og:image'
          content='/images/OG.png'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://barsellconstruction.com'
        />

        {/* Twitter Card */}
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:title'
          content='Barsell Construction Inc.'
        />
        <meta
          name='twitter:description'
          content="Serving the Bay Area for over 25 years, Barsell Construction Inc. is the tried and true business to get your home looking how you've always dreamed."
        />
        <meta
          name='twitter:image'
          content='/images/OG.png'
        />

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Barsell Construction Inc.',
              image: 'https://barsellconstruction.com/images/OG.png',
              url: 'https://barsellconstruction.com',
              telephone: '+1-925-260-4331',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Alamo',
                addressRegion: 'CA',
                postalCode: '94507',
                addressCountry: 'US',
              },
              description:
                'Serving the Bay Area for over 25 years with remodeling, additions, kitchens, bathrooms, decks, and more.',
              sameAs: [
                'https://www.facebook.com/BarsellConstruction',
                'https://www.linkedin.com/in/john-barsell-1601891b/',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`antialiased text-secondary ${roboto.className} ${alegreyaSC.className}`}
      >
        <div
          id='fixed-bg'
          role='presentation'
          aria-hidden='true'
        ></div>
        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
