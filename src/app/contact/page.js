'use client';

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

const ContactPage = () => {
  return (
    <div className='contact-page text-neutral'>
      {/* Hero */}
      <section className='hero bg-cover bg-center text-white p-4 sm:p-12 section-margin-top'>
        <div className='container mx-auto text-center flex flex-col items-center py-32'>
          <h1 className='sm:text-4xl text-2xl font-semibold mb-4 text-shadow-md'>
            Contact Us
          </h1>
          <p className='text-lg mb-6 text-shadow-md'>
            For inquiries, quotes, or to discuss your project, please reach out
            to us using the contact information below.
          </p>
        </div>
      </section>

      {/* Stacked Contact Section */}
      <section className='container mx-auto px-4 sm:px-8 py-16 flex flex-col items-center  gap-4'>
        <ContactCard
          icon={
            <FontAwesomeIcon
              icon={faPhone}
              className='w-6 h-6 bg-primaryFaded p-2 rounded-full'
            />
          }
          title='Call or Text'
          value='925-260-4331'
          href='tel:+19252604331'
        />

        <ContactCard
          icon={
            <FontAwesomeIcon
              icon={faEnvelope}
              className='w-6 h-6 bg-primaryFaded p-2 rounded-full'
            />
          }
          title='Email'
          value='john@barsellconstruction.com'
          href='mailto:johnbarsell@yahoo.com'
        />

        <ContactCard
          icon={
            <FontAwesomeIcon
              icon={faLinkedin}
              className='w-6 h-6 bg-primaryFaded p-2 rounded-full'
            />
          }
          title='LinkedIn'
          value='john-barsell'
          href='https://www.linkedin.com/in/john-barsell-1601891b/'
        />

        <ContactCard
          icon={
            <FontAwesomeIcon
              icon={faFacebook}
              className='w-6 h-6 bg-primaryFaded p-2 rounded-full'
            />
          }
          title='Facebook'
          value='Visit Page'
          href='https://www.facebook.com/BarsellConstruction/'
        />

        <ContactCard
          icon={
            <FontAwesomeIcon
              icon={faHouzz}
              className='w-6 h-6 bg-primaryFaded p-2 rounded-full'
            />
          }
          title='Houzz'
          value='Visit Profile'
          href='https://www.houzz.com/professionals/general-contractors/barsell-construction-inc-pfvwus-pf~1167174073'
        />

        <ContactCard
          icon={
            <FontAwesomeIcon
              icon={faMapPin}
              className='w-6 h-6 bg-primaryFaded p-2 rounded-full'
            />
          }
          title='Location'
          value='Alamo, CA'
          href='https://maps.google.com?q=Alamo,+CA'
        />

        {/* Map */}
        <div className='overflow-hidden shadow-md h-[300px] w-full max-w-md'>
          <iframe
            title='Map of Alamo CA'
            className='w-full h-full'
            loading='lazy'
            allowFullScreen
            src='https://www.google.com/maps/embed/v1/place?key=AIzaSyAEM9yxS-4KUJ_TMWma817QnlirkhK6hzg&q=Alamo,CA'
          />
        </div>
      </section>
    </div>
  );
};

const ContactCard = ({ icon, title, value, href }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='w-full max-w-md flex items-center gap-4 p-4 shadow-sm transition-all bg-lightWhite hover:bg-nav group'
  >
    <div className='p-2 rounded-full text-primary text-lg'>{icon}</div>
    <div className='w-full flex flex-col overflow-hidden'>
      <p className='font-semibold text-shadow-md'>{title}</p>
      <p className='text-base group-hover:underline text-shadow-md truncate overflow-hidden whitespace-nowrap max-w-[200px] sm:max-w-[300px]'>
        {value}
      </p>
    </div>
  </a>
);

export default ContactPage;
