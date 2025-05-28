'use client';
import Gallery from '@/components/Gallery';
import PageTransition from '@/components/PageTransition';
import { happyValley, remington } from '@/data/gallery';
import { useState } from 'react';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='gallery-page'>
      <section className='hero bg-cover bg-center text-white p-2 sm:p-8 section-margin-top'>
        <div className='container mx-auto text-center flex flex-col items-center py-32'>
          <h1 className='sm:text-4xl xs:text-3xl text-xl font-semibold mb-4 text-shadow-md'>
            Gallery
          </h1>
        </div>
      </section>

      <div className='container mx-auto py-16 px-4'>
        {/* Tabs for switching between galleries */}
        <div className='flex justify-center mb-8 text-neutral space-x-6'>
          <button
            className={`relative py-3 font-semibold text-lg transition-all duration-300 
      ${activeTab === 0 ? 'text-primary' : 'text-neutral-500'}
      after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:transition-all duration-300 after:origin-center
      ${
        activeTab === 0
          ? 'after:scale-x-100'
          : 'hover:after:scale-x-100 hover:text-primary'
      }`}
            onClick={() => setActiveTab(0)}
          >
            Remington
          </button>

          <button
            className={`relative py-3 font-semibold text-lg transition-all duration-300 
      ${activeTab === 1 ? 'text-primary' : 'text-neutral-500'}
      after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:transition-all duration-300 after:origin-center
      ${
        activeTab === 1
          ? 'after:scale-x-100'
          : 'hover:after:scale-x-100 hover:text-primary'
      }`}
            onClick={() => setActiveTab(1)}
          >
            Happy Valley
          </button>
        </div>

        {/* Gallery Section */}
        <div>
          {activeTab === 0 ? (
            <Gallery gallery={remington} />
          ) : (
            <Gallery gallery={happyValley} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
