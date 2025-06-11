'use client';
import { useState } from 'react';
import Gallery from '@/components/Gallery';
import { happyValley, remington } from '@/data/gallery';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const galleries = [
    { name: 'Remington', data: remington },
    { name: 'Happy Valley', data: happyValley },
  ];

  return (
    <div className='gallery-page'>
      {/* Hero */}
      <section className='hero bg-cover bg-center text-white p-2 sm:p-8 section-margin-top'>
        <div className='container mx-auto text-center flex flex-col items-center py-32'>
          <h1 className='sm:text-4xl xs:text-3xl text-xl font-semibold mb-4 text-shadow-md'>
            Gallery
          </h1>
        </div>
      </section>

      <div className='container mx-auto py-16 px-4'>
        {/* Tabs for switching between galleries */}
        <div
          role='tablist'
          aria-label='Gallery tabs'
          className='flex justify-center mb-8 text-neutral space-x-6'
        >
          {galleries.map((gallery, index) => (
            <button
              key={index}
              role='tab'
              aria-selected={activeTab === index}
              aria-controls={`tabpanel-${index}`}
              id={`tab-${index}`}
              className={`relative py-3 font-semibold text-lg transition-all duration-300 
                ${activeTab === index ? 'text-primary' : 'text-neutral-500'}
                after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:transition-all duration-300 after:origin-center
                ${
                  activeTab === index
                    ? 'after:scale-x-100'
                    : 'hover:after:scale-x-100 hover:text-primary'
                }`}
              onClick={() => setActiveTab(index)}
              aria-label={`View ${gallery.name} gallery`}
            >
              {gallery.name}
            </button>
          ))}
        </div>

        {/* Gallery Section */}
        <section
          role='tabpanel'
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          style={{ contentVisibility: 'auto' }}
        >
          <Gallery gallery={galleries[activeTab].data} />
        </section>
      </div>
    </div>
  );
};

export default GalleryPage;
