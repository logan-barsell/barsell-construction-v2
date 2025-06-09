'use client';

import { useEffect, useState } from 'react';
import { missionStatements } from '@/data/missionStatements';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const MissionStatements = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const assignRef = useScrollAnimation([], { duration: 0.8, delay: 0.1 });

  // Delay animations to avoid blocking LCP
  useEffect(() => {
    const timeout = setTimeout(() => setHasMounted(true), 100); // short delay after mount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <section className='mission-statements py-16 px-4 bg-heroWhite'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8'>Our Mission</h2>
          <div className='space-y-6'>
            {missionStatements.map((statement, index) => (
              <p
                key={index}
                ref={el => hasMounted && assignRef(el, index)}
                className={`text-lg max-w-xl mx-auto transition-opacity transition-transform duration-700 ease-out ${
                  hasMounted ? 'opacity-0 translate-y-6' : ''
                }`}
              >
                {statement}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className='signature pb-16 px-4 bg-heroWhite'>
        <div className='container mx-auto text-center'>
          <h3 className='text-2xl font-semibold mb-4'>
            A Commitment to our Clients
          </h3>
          <p className='mt-4 text-lg text-gray-500'>
            John Barsell, Owner & Founder
          </p>
        </div>
      </section>
    </>
  );
};

export default MissionStatements;
