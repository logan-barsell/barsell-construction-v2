'use client';

import { useRef } from 'react';
import {
  faPhone,
  faEnvelope,
  faMapPin,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faHouzz,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const contactSections = [
  {
    items: [
      {
        icon: faPhone,
        title: 'Call or Text',
        value: '925-260-4331',
        href: 'tel:+19252604331',
        external: false,
      },
      {
        icon: faEnvelope,
        title: 'Email',
        value: 'john@barsellconstruction.com',
        href: 'mailto:johnbarsell@yahoo.com',
        external: false,
      },
      {
        icon: faLinkedin,
        title: 'LinkedIn',
        value: 'Visit Profile',
        href: 'https://www.linkedin.com/in/john-barsell-1601891b/',
        external: true,
      },
      {
        icon: faFacebook,
        title: 'Facebook',
        value: 'Visit Page',
        href: 'https://www.facebook.com/BarsellConstruction/',
        external: true,
      },
      {
        icon: faHouzz,
        title: 'Houzz',
        value: 'Visit Profile',
        href: 'https://www.houzz.com/professionals/general-contractors/barsell-construction-inc-pfvwus-pf~1167174073',
        external: true,
      },
    ],
  },
  {
    items: [
      {
        icon: faMapPin,
        title: 'Location',
        value: 'Alamo, CA',
        href: 'https://maps.google.com?q=Alamo,+CA',
        external: true,
      },
    ],
    showMap: true,
  },
];

const ContactItem = ({ item, isLight }) => (
  <a
    href={item.href}
    {...(item.external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {})}
    className='flex w-full items-center gap-5 group transition-colors'
  >
    <div
      className={`flex-shrink-0 w-14 h-14 flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110 rounded-full ${
        isLight ? 'bg-black/25' : 'bg-white/40'
      }`}
    >
      <FontAwesomeIcon icon={item.icon} className='w-6 h-6' />
    </div>
    <div className='flex flex-col overflow-hidden items-start text-left min-w-0'>
      <p className='text-2xl sm:text-3xl font-bold mb-2'>{item.title}</p>
      <p
        className={`text-xl transition-colors duration-300 group-hover:underline truncate w-full ${
          isLight
            ? 'text-secondary/70 group-hover:text-secondary'
            : 'text-white/85 group-hover:text-primary'
        }`}
      >
        {item.value}
      </p>
    </div>
  </a>
);

const ContactPage = () => {
  const elementsRef = useRef([]);
  const assignRef = useScrollAnimation(elementsRef, {
    duration: 0.8,
    delay: 0.1,
  });

  return (
    <div className='contact-page'>
      <section className='hero bg-cover bg-center text-white p-2 sm:p-8 section-margin-top'>
        <div className='container mx-auto text-center flex flex-col items-center py-32'>
          <h1 className='sm:text-4xl xs:text-3xl text-xl font-semibold mb-4 text-shadow-md'>
            Contact Us
          </h1>
          <p className='text-lg mb-6 text-shadow-md'>
            For inquiries, quotes, or to discuss your project, please reach out
            using the information below.
          </p>
        </div>
      </section>

      <section className='pb-0'>
        <div className='mx-auto flex flex-col items-center'>
          {contactSections.map((section, index) => {
            const isLight = index % 2 === 0;
            const isFirstSection = index === 0;

            return (
              <div
                key={index}
                ref={el => assignRef(el, index)}
                className={`hero-section px-6 w-full ${
                  isLight ? 'bg-heroWhite' : 'text-white text-shadow-md'
                } py-16`}
              >
                <div className='container mx-auto max-w-3xl flex flex-col gap-10 items-center'>
                  <div
                    className={`mx-auto flex flex-col ${
                      isFirstSection ? '' : 'w-fit gap-10'
                    }`}
                  >
                    {isFirstSection ? (
                      <div className='w-fit mx-auto flex flex-col'>
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={item.title}
                            className='relative py-10 first:pt-0 last:pb-0'
                          >
                            <ContactItem item={item} isLight={isLight} />
                            {itemIndex < section.items.length - 1 && (
                              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(100vw-3rem,36rem)] border-b border-black/20' />
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      section.items.map(item => (
                        <ContactItem
                          key={item.title}
                          item={item}
                          isLight={isLight}
                        />
                      ))
                    )}
                  </div>

                  {section.showMap && (
                    <div className='overflow-hidden shadow-md h-[320px] w-full'>
                      <iframe
                        title='Map of Alamo CA'
                        className='w-full h-full'
                        loading='lazy'
                        allowFullScreen
                        src='https://www.google.com/maps/embed/v1/place?key=AIzaSyAEM9yxS-4KUJ_TMWma817QnlirkhK6hzg&q=Alamo,CA'
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
