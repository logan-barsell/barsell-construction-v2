import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=' py-8 text-neutral text-shadow-md'>
      <div className='container mx-auto text-center space-y-4'>
        {/* Company Name & Note */}
        <p className='text-xl font-primary'>Barsell Construction</p>
        <p className='text-sm'>Proudly serving the Bay Area since 1994.</p>

        {/* Copyright */}
        <p className='text-xs'>
          © {new Date().getFullYear()} Barsell Construction. All rights
          reserved.
        </p>

        {/* Footer Navigation Links */}
        <div className='flex justify-center space-x-8'>
          <Link
            href='/'
            className='hover:text-primary transition-colors'
          >
            Home
          </Link>
          <Link
            href='/services'
            className='hover:text-primary transition-colors'
          >
            Services
          </Link>
          <Link
            href='/gallery'
            className='hover:text-primary transition-colors'
          >
            Gallery
          </Link>
          <Link
            href='/contact'
            className='hover:text-primary transition-colors'
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
