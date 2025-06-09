'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Logo = ({ menuOpen, isMobile }) => {
  const [isHydrated, setIsHydrated] = useState(null);
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    isHydrated && (
      <div className='flex flex-col items-center'>
        <Image
          src='/images/logos/bclogo.png'
          alt='Barsell Construction Inc. Logo'
          width={150}
          height={150}
          className={`pt-3 transition-all duration-500 object-contain w-36 lg:w-48 ${
            !menuOpen && isMobile
              ? 'opacity-0 scale-0 h-0'
              : 'h-0 opacity-0 scale-0 xs:h-auto xs:opacity-100 xs:scale-100'
          } sm:block`} // Logo shrinks and fades out on mobile when menu is closed
        />
        <h1 className='xs:text-xl xs:pb-0 pt-0  pb-0.5 text-lg leading-normal lg:hidden text-center sm:px-4 px-0'>
          Barsell Construction Inc.
        </h1>
      </div>
    )
  );
};

export default Logo;
