import { Roboto, Alegreya_SC } from 'next/font/google';
import '../../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });
const alegreyaSC = Alegreya_SC({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Barsell Construction',
  description: 'The best construction services',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Alegreya+SC&display=swap'
          rel='stylesheet'
        />
      </head>
      <body
        className={`antialiased bg-neutral text-secondary ${roboto.className} ${alegreyaSC.className}`}
      >
        {/* Header Nav */}
        <Header />
        {/* Main Content */}
        <PageTransition>
          <main>{children}</main>
        </PageTransition>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
